// Reads content/entries/*.md and writes site/entries.json. No dependencies. Node 18+.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
// Usage: node build.mjs [entriesDir]   (default content/entries; use examples/entries for a local preview)
import { resolve } from "node:path";
const dir = new URL(resolve(process.argv[2] ?? "content/entries") + "/", "file://");
const AREAS = ["Models", "API and Apps", "Claude Code", "Apps"];
const STATUS = ["ga", "beta", "preview", "deprecated"];
const SECTIONS = ["What's new", "When is it safe to use", "Use case and value", "How to implement"];
const entries = [];
for (const f of readdirSync(dir).filter(f => f.endsWith(".md"))) {
  const raw = readFileSync(new URL(f, dir), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`${f}: missing frontmatter`);
  const e = { sources: [], tags: [] }; let key = null;
  for (const line of m[1].split("\n")) {
    let t;
    if ((t = line.match(/^\s+-\s+(.*)$/)) && key) e[key].push(t[1].trim());
    else if ((t = line.match(/^(\w+):\s*(.*)$/))) {
      key = t[1]; const v = t[2].trim();
      if (v.startsWith("[")) e[key] = v.slice(1, -1).split(",").map(x => x.trim()).filter(Boolean);
      else e[key] = v === "" ? [] : v;
    }
  }
  const sections = {}; let cur = null;
  for (const line of m[2].split("\n")) {
    const h = line.match(/^##\s+(.*)$/);
    if (h) { cur = h[1].trim(); sections[cur] = ""; } else if (cur) sections[cur] += line + "\n";
  }
  for (const k of Object.keys(sections)) sections[k] = sections[k].trim();
  const errs = [];
  for (const k of ["id","date","title","area","status","status_reason"]) if (!e[k]) errs.push(`missing ${k}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.date || "")) errs.push("bad date");
  if (!AREAS.includes(e.area)) errs.push(`bad area ${e.area}`);
  if (!STATUS.includes(e.status)) errs.push(`bad status ${e.status}`);
  if (!e.sources.length) errs.push("sources required");
  for (const s of SECTIONS) if (!sections[s]) errs.push(`missing section "${s}"`);
  if (errs.length) throw new Error(`${f}: ${errs.join(", ")}`);
  entries.push({ ...e, sections });
}
entries.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
writeFileSync(new URL("./site/entries.json", import.meta.url), JSON.stringify(entries, null, 2));
console.log(`built ${entries.length} entries`);
