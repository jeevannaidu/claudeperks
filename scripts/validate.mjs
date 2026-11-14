#!/usr/bin/env node
// Checks every timeline entry and data/seen.json. No dependencies.
// Usage: node scripts/validate.mjs [repoRoot]
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const entriesDir = join(root, 'content', 'entries');
const AREAS = ['Models', 'API and Apps', 'Claude Code', 'Apps'];
const STATUSES = ['ga', 'beta', 'preview', 'deprecated'];
const CONFIDENCE = ['high', 'low'];
const REQUIRED = ['id', 'date', 'title', 'area', 'status', 'status_reason', 'sources', 'last_checked'];
const HEADINGS = ["What's new", 'When is it safe to use', 'Use case and value', 'How to implement'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);
const today = new Date().toISOString().slice(0, 10);

function stripComment(v) {
  // drop a trailing " # comment" that is outside quotes
  let q = null;
  for (let i = 0; i < v.length; i++) {
    const c = v[i];
    if (q) { if (c === q) q = null; continue; }
    if (c === '"' || c === "'") q = c;
    else if (c === '#' && (i === 0 || /\s/.test(v[i - 1]))) return v.slice(0, i).trimEnd();
  }
  return v;
}
const unquote = v => (/^(['"]).*\1$/.test(v) ? v.slice(1, -1) : v);

export function parseFrontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const data = {};
  let listKey = null;
  for (const raw of m[1].split(/\r?\n/)) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    const item = raw.match(/^\s+-\s+(.*)$/);
    if (item && listKey) { data[listKey].push(unquote(stripComment(item[1]).trim())); continue; }
    const kv = raw.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) { listKey = null; continue; }
    const [, key, rest] = kv;
    const val = stripComment(rest).trim();
    if (val === '') { data[key] = []; listKey = key; continue; }
    listKey = null;
    if (/^\[.*\]$/.test(val)) data[key] = val.slice(1, -1).split(',').map(s => unquote(s.trim())).filter(Boolean);
    else data[key] = unquote(val);
  }
  return { data, body: m[2] };
}

function checkEntry(file) {
  const text = readFileSync(join(entriesDir, file), 'utf8');
  const fm = parseFrontMatter(text);
  if (!fm) return fail(file, 'missing front matter between --- lines');
  const { data, body } = fm;
  const nameMatch = file.match(/^(\d{4}-\d{2}-\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/);
  if (!nameMatch) fail(file, 'file name must be YYYY-MM-DD-lowercase-slug.md');
  for (const k of REQUIRED) {
    const v = data[k];
    if (v === undefined || (Array.isArray(v) ? v.length === 0 : String(v).trim() === '')) fail(file, `missing ${k}`);
  }
  if (data.id && data.id !== file.replace(/\.md$/, '')) fail(file, `id "${data.id}" must equal the file name without .md`);
  for (const k of ['date', 'last_checked']) {
    if (data[k] && !DATE.test(data[k])) fail(file, `${k} must be YYYY-MM-DD`);
    else if (data[k] && data[k] > today) fail(file, `${k} ${data[k]} is in the future`);
  }
  if (nameMatch && data.date && nameMatch[1] !== data.date) fail(file, `file name date ${nameMatch[1]} differs from date ${data.date}`);
  if (data.date && data.last_checked && data.last_checked < data.date) fail(file, 'last_checked is before date');
  if (data.area && !AREAS.includes(data.area)) fail(file, `area must be one of: ${AREAS.join(', ')}`);
  if (data.status && !STATUSES.includes(data.status)) fail(file, `status must be one of: ${STATUSES.join(', ')}`);
  if (data.confidence && !CONFIDENCE.includes(data.confidence)) fail(file, `confidence must be high or low`);
  if (data.sources !== undefined && !Array.isArray(data.sources)) fail(file, 'sources must be a list');
  for (const s of [].concat(data.sources ?? [])) if (!/^https:\/\/\S+$/.test(s)) fail(file, `source is not an https URL: ${s}`);
  const found = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map(x => x[1].replace(/’/g, "'"));
  HEADINGS.forEach((h, i) => {
    const at = found.indexOf(h);
    if (at === -1) fail(file, `missing section "## ${h}"`);
    else if (at !== i) fail(file, `section "## ${h}" is out of order`);
  });
  const sections = body.split(/^##\s+.+$/m).slice(1);
  sections.forEach((s, i) => { if (!s.trim()) fail(file, `section "${found[i]}" is empty`); });
  return data;
}

function checkSeen(entryFiles) {
  const p = join(root, 'data', 'seen.json');
  if (!existsSync(p)) return fail('data/seen.json', 'missing');
  let seen;
  try { seen = JSON.parse(readFileSync(p, 'utf8')); } catch (e) { return fail('data/seen.json', `not valid JSON: ${e.message}`); }
  if (!Array.isArray(seen)) return fail('data/seen.json', 'must be an array');
  const ids = new Set();
  seen.forEach((r, i) => {
    const where = `data/seen.json[${i}]`;
    if (!r || typeof r.id !== 'string' || !r.id.includes(':')) return fail(where, 'id must look like "<source>:<item>"');
    if (ids.has(r.id)) fail(where, `duplicate id ${r.id}`);
    ids.add(r.id);
    if (!['added', 'updated', 'skipped', 'rejected'].includes(r.outcome)) fail(where, 'outcome must be added, updated, skipped or rejected');
    if (!DATE.test(r.first_seen ?? '')) fail(where, 'first_seen must be YYYY-MM-DD');
    if (['added', 'updated'].includes(r.outcome) && !entryFiles.includes(r.entry)) fail(where, `entry file not found: ${r.entry}`);
    if (r.outcome === 'skipped' && !r.reason) fail(where, 'skipped items need a reason');
  });
}

const entryFiles = existsSync(entriesDir) ? readdirSync(entriesDir).filter(f => f.endsWith('.md')) : [];
const titles = new Map();
for (const f of entryFiles) {
  const d = checkEntry(f);
  if (d?.title) {
    const key = `${d.date}|${d.title.toLowerCase()}`;
    if (titles.has(key)) fail(f, `same date and title as ${titles.get(key)}`);
    titles.set(key, f);
  }
}
checkSeen(entryFiles);

if (errors.length) {
  console.error(`${errors.length} problem(s):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`OK: ${entryFiles.length} entries, seen.json valid.`);
