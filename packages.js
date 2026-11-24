const ORIGINAL = DATA.slice();
const ORIGINAL_ID = "original";
const ORIGINAL_DATE = "2026-11-24";
const MAX_BYTES = 4 * 1024 * 1024;
function validateValue(value, spec, path) {
  const fail = reason => { throw Error(path + " · " + reason); };
  if (spec.enum && !spec.enum.includes(value)) fail("Unsupported value");
  if (spec.type === "array") {
    if (!Array.isArray(value) || value.length < (spec.minItems || 0) || value.length > spec.maxItems) fail("Invalid list size");
    value.forEach((item,i) => validateValue(item,spec.items,path+"["+i+"]"));
  } else if (spec.type === "object") {
    if (!value || typeof value !== "object" || Array.isArray(value)) fail("Expected object");
    for (const key of spec.required) if (!Object.hasOwn(value,key)) fail("Missing "+key);
    for (const [key,item] of Object.entries(value)) {
      if (!Object.hasOwn(spec.properties,key)) fail("Unknown field "+key);
      validateValue(item,spec.properties[key],path+"."+key);
    }
  } else if (spec.type && typeof value !== spec.type) fail("Expected "+spec.type);
  if (spec.type === "string") {
    if (/<\/?[a-z][^>]*>/iu.test(value) || /^\s*javascript:/iu.test(value)) fail("Plain text only");
    if (!value.trim() || Array.from(value).length > spec.maxLength || (spec.pattern && !new RegExp(spec.pattern).test(value))) fail("Invalid text");
    if (spec.format === "date" && new Date(value+"T00:00:00Z").toISOString().slice(0,10)!==value) fail("Invalid date");
  }
}
function normalizedCard(c) {
  return {variants:[], context:"", originalFocus:"", contextForms:[], errors:[], ...c};
}
function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map(k=>[k,stable(value[k])]));
  return value;
}
function signature(c) {
  return JSON.stringify([c.wrong,c.target,c.context || ""].map(x=>x.normalize("NFC").trim().replace(/\s+/gu," ")));
}
function inspectPackage(pkg, packages) {
  validateValue(pkg,PACKAGE_SCHEMA,"Package");
  const installed=packages.find(p=>p.id===pkg.id);
  const catalog=[...ORIGINAL,...packages.flatMap(p=>p.cards.map(normalizedCard))];
  const ids=new Map(catalog.map(c=>[c.id,c]));
  const contents=new Set(catalog.map(signature));
  const added=[], conflicts=[];
  let duplicates=0;
  if (installed && ["name","created","description"].some(k=>installed[k]!==pkg[k])) conflicts.push(pkg.id);
  for (const raw of pkg.cards) {
    const c=normalizedCard(raw);
    if (!c.id.startsWith(pkg.id+":") || !c.answer.includes(c.focus) ||
      (c.originalFocus && !c.wrong.includes(c.originalFocus)) ||
      (c.mode!=="sentence" && (c.tolerance.initial || c.tolerance.final)) ||
      c.errors.some(e=>e.span && !e.form.includes(e.span))) throw Error(c.id+" · Invalid ID, highlight or tolerance");
    if (classify(c.negative,c)!=="target" || c.errors.some(e=>classify(e.form,c)!=="target") ||
        c.contextForms.some(f=>classify(f,c)!=="context") || classify(c.wrong,c)!==c.sourceVerdict)
      throw Error(c.id+" · Conflicting answer and feedback rules");
    const existing=ids.get(c.id);
    if (existing && JSON.stringify(stable(existing))!==JSON.stringify(stable(c))) conflicts.push(c.id);
    else if (existing || contents.has(signature(c))) duplicates++;
    else {added.push(raw); contents.add(signature(c));}
    if (!existing) ids.set(c.id,c);
  }
  if (installed && installed.cards.some(c=>!pkg.cards.some(incoming=>incoming.id===c.id))) conflicts.push(pkg.id+" · Existing package has other cards");
  if (installed && added.length) conflicts.push(pkg.id+" · Use a new package ID for additions");
  return {added,duplicates,conflicts};
}
function verifyPackages(packages) {
  if (!Array.isArray(packages)) throw Error("Invalid package list");
  const valid=[];
  for (const pkg of packages) {
    const report=inspectPackage(pkg,valid);
    if (report.conflicts.length || report.duplicates) throw Error("Conflicting backup packages");
    valid.push(pkg);
  }
  return valid;
}
function catalogFor(packages) {return ORIGINAL.concat(packages.flatMap(p=>p.cards.map(normalizedCard)));}
function syncCatalog() {DATA.splice(0,DATA.length); for (const c of catalogFor(state.packages)) DATA.push(c);}
function packageOf(c) {return typeof c.id==="number"?ORIGINAL_ID:c.id.split(":")[0];}
function filteredPool(category) {
  const filter=state.settings.package || "all";
  return DATA.filter(c=>(category==="all" || category===c.category) &&
    (filter==="all" || filter===packageOf(c) || (filter==="new" && typeof c.id==="string" && !record(c.id).seen)));
}
function packageOverview() {
  const select=EL("packageFilter");
  const packages=[{id:ORIGINAL_ID,name:"Original mistakes – November 2026",created:ORIGINAL_DATE,cards:ORIGINAL},...state.packages];
  select.replaceChildren(new Option(t("allCards"),"all"),new Option(t("newCards"),"new"));
  EL("packagesList").replaceChildren();
  for (const p of packages) {
    select.add(new Option(p.name,p.id));
    const row=document.createElement("p");
    const seen=p.cards.filter(c=>record(c.id).seen).length;
    row.textContent=p.name+" · "+p.created+" · "+seen+"/"+p.cards.length+" "+t("practised")+" ("+Math.round(100*seen/p.cards.length)+"%)";
    EL("packagesList").append(row);
  }
  select.value=state.settings.package || "all";
}
function downloadJSON(data,name) {
  const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));
  const a=document.createElement("a"); a.href=url; a.download=name; document.body.append(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
let pending=null;
let previewSequence=0;
async function previewPackage(file) {
  const sequence=++previewSequence;
  pending=null; EL("confirmPackage").hidden=true;
  try {
    if(file.size>MAX_BYTES) throw Error("Maximum file size: 4 MiB");
    const pkg=JSON.parse(await file.text());
    if(sequence!==previewSequence) return;
    const report=inspectPackage(pkg,state.packages);
    EL("packageMessage").textContent=[pkg.name,pkg.created,pkg.cards.length+" "+t("count"),report.added.length+" "+t("newCount"),report.duplicates+" "+t("duplicates"),report.conflicts.length+" "+t("conflicts"),...report.conflicts.slice(0,5)].join(" · ");
    if (!report.conflicts.length && report.added.length) {pending=pkg;EL("confirmPackage").hidden=false;}
  } catch(e) {if(sequence!==previewSequence) return; EL("packageMessage").textContent=t("invalidPackage")+" "+e.message;}
}
function acceptPackage() {
  if (!pending) return;
  try {
    const report=inspectPackage(pending,state.packages);
    if (!report.added.length || report.conflicts.length) throw Error("Package changed");
    const next={...state,packages:[...state.packages,{...pending,cards:report.added}]};
    commitState(next); refreshLanguage(); EL("packageMessage").textContent=t("packageSaved");
  } catch(e) {EL("packageMessage").textContent=e.message;}
  pending=null; EL("confirmPackage").hidden=true;
}
