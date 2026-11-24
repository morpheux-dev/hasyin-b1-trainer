const STORE = "hasyin-b1-trainer-v1";
const EL = (id) => document.getElementById(id);
const CATEGORIES = [...new Set(DATA.map((x) => x.category))];
const CN = {
  "Satzstellung & Nebensätze": [
    "Word order & subordinate clauses",
    "Satzstellung & Nebensätze",
  ],
  "Verben, Modalverben & Zeitformen": ["Verbs & tenses", "Verben & Zeitformen"],
  "Artikel, Fälle & Pronomen": ["Articles & cases", "Artikel & Fälle"],
  "Präpositionen & feste Ausdrücke": [
    "Prepositions & phrases",
    "Präpositionen & Wendungen",
  ],
  "Wortschatz & Rechtschreibung": [
    "Vocabulary & spelling",
    "Wortschatz & Rechtschreibung",
  ],
  "E-Mail & Aufgabenstellung": [
    "Emails & task completion",
    "E-Mails & Aufgaben",
  ],
};
const M = {
  en: {
    navHome: "Practice",
    navStats: "Progress",
    navSettings: "Settings",
    subtitle: "Learn German from your own mistakes",
    welcomeEyebrow: "Your personal practice",
    welcomeTitle: "Your daily German practice",
    welcomeText:
      "Correct your own German mistakes. Several answers can be correct!",
    todayLabel: "Daily goal",
    dueLabel: "Due to review",
    trainedLabel: "Practised cards",
    startTitle: "Start practising",
    categoryLabel: "Topic",
    goalLabel: "Cards",
    startBtn: "Start {n} cards",
    resumeBtn: "Resume previous session",
    repeatBtn: "Repeat difficult cards",
    homeTip:
      "Write your own answer. The offline checker recognises saved examples. A different phrasing can also be correct.",
    practiceType: "Correction practice",
    wrongLabel: "Correct this sentence or phrase:",
    inputLabel: "Your corrected version",
    inputPlaceholder: "Write your correction in German...",
    checkBtn: "Check answer",
    showBtn: "Show solution",
    referenceLabel: "Model answer · learning point underlined",
    nextBtn: "Next card",
    alternateBtn: "My answer is also correct*",
    noteAboutAlt:
      "*Only mark your answer as correct if the grammar and meaning are right. Self-checked, not AI-verified.",
    quitBtn: "← Back to overview",
    resultsTop: "Session complete",
    resultsTitle: "Well done, Hasyin!",
    resultsIntro: "Every correction is a step forward.",
    resultFirstLabel: "Correct on first try",
    resultSecondLabel: "Correct on second try",
    resultAgainLabel: "Review again",
    resultAlternateLabel: "Self-checked alternatives",
    moreBtn: "Practise 10 more",
    resultsHomeBtn: "Back to overview",
    statsEyebrow: "Learning progress",
    statsTitle: "How it’s going",
    statsSeenLabel: "Practised",
    statsMasteredLabel: "Well learned",
    statsStreakLabel: "Day streak",
    statsTopicsTitle: "By topic",
    statsNote:
      "Progress stays on this device. Export a backup to transfer it to another device.",
    settingsTitle: "Settings & backup",
    langLabel: "Interface language",
    backupTitle: "Your learning history",
    backupText:
      "Saved locally on this device; no account or automatic cloud sync.",
    exportBtn: "Export progress (.json)",
    importBtn: "Import progress",
    resetBtn: "Reset all progress",
    settingsFoot:
      "For reliable saving and home-screen installation, open through an HTTPS website. The app can then work offline.",
    footerText: "Beta 3.0.1",
    allCategories: "All topics",
    correct: "✓ Correct! Nicely done.",
    tryAgain:
      "Not recognised yet. Your sentence might still be correct. Try again or show the solution.",
    secondTry: "✓ Correct on the second try.",
    answerRevealed:
      "Compare your answer with the accepted solutions. You can confirm your own correct alternative below.",
    altResult: "Saved as self-checked. This card stays in review.",
    noAnswer: "Please type a correction first.",
    noCards: "No cards available for this selection. Try another topic.",
    resetConfirm: "Delete all your learning progress from this device?",
    importConfirm: "Replace your current progress with this backup?",
    importFailed: "This is not a valid backup file.",
    importSuccess: "Progress imported.",
    exportSuccess: "Backup downloaded.",
    savedWarning:
      "Local storage is unavailable here. Your progress may not be kept after closing the page. Try opening it via an HTTPS website.",
    storageError: "Could not save progress. Export a backup where possible.",
    noDifficult: "No difficult cards yet. Starting a normal practice instead.",
    due: "Due",
    done: "Done",
    first: "1st try",
    second: "2nd try",
    reveal: "Revealed",
    self: "Alternative",
    count: "cards",
    toleranceHint: "Write in German. Spelling and internal punctuation count.",
    draftLabel: "Original wording",
    draftFocus: "Original wording · form to revise underlined",
    contextHint:
      "This wording can fit a different situation. Check what the task asks you to say here.",
    targetReview:
      "Check the underlined form in the model and open Why? for the rule.",
    whyLabel: "Why? · Explain the rule",
    otherLabel: "More accepted answers",
    targetHint:
      "Check the learning point for this task. Open Why? for a hint, then try again.",
  },
  de: {
    navHome: "Üben",
    navStats: "Fortschritt",
    navSettings: "Einstellungen",
    subtitle: "Lerne Deutsch aus deinen eigenen Fehlern",
    welcomeEyebrow: "Dein persönliches Training",
    welcomeTitle: "Dein tägliches Deutschtraining",
    welcomeText:
      "Korrigiere deine eigenen Fehler. Mehrere Antworten können richtig sein!",
    todayLabel: "Tagesziel",
    dueLabel: "Wiederholung fällig",
    trainedLabel: "Bearbeitete Karten",
    startTitle: "Übung starten",
    categoryLabel: "Thema",
    goalLabel: "Karten",
    startBtn: "{n} Karten üben",
    resumeBtn: "Letzte Übung fortsetzen",
    repeatBtn: "Schwierige Karten wiederholen",
    homeTip:
      "Formuliere selbst. Die Offline-Prüfung erkennt hinterlegte Beispiele. Auch eine andere Formulierung kann richtig sein.",
    practiceType: "Fehler korrigieren",
    wrongLabel: "Korrigiere diesen Satz oder Ausdruck:",
    inputLabel: "Deine Korrektur",
    inputPlaceholder: "Schreibe die richtige Form auf Deutsch ...",
    checkBtn: "Antwort prüfen",
    showBtn: "Lösung zeigen",
    referenceLabel: "Musterlösung · Lernschwerpunkt unterstrichen",
    nextBtn: "Nächste Karte",
    alternateBtn: "Meine Antwort ist auch richtig*",
    noteAboutAlt:
      "*Nur bestätigen, wenn Grammatik und Bedeutung stimmen. Selbst geprüft, nicht KI-verifiziert.",
    quitBtn: "← Zur Übersicht",
    resultsTop: "Übung beendet",
    resultsTitle: "Gut gemacht, Hasyin!",
    resultsIntro: "Jede Korrektur bringt dich weiter.",
    resultFirstLabel: "Beim 1. Versuch richtig",
    resultSecondLabel: "Beim 2. Versuch richtig",
    resultAgainLabel: "Noch wiederholen",
    resultAlternateLabel: "Selbst bestätigte Varianten",
    moreBtn: "10 weitere üben",
    resultsHomeBtn: "Zur Übersicht",
    statsEyebrow: "Dein Lernfortschritt",
    statsTitle: "So läuft es",
    statsSeenLabel: "Bearbeitet",
    statsMasteredLabel: "Gut gelernt",
    statsStreakLabel: "Lerntage in Folge",
    statsTopicsTitle: "Nach Themen",
    statsNote:
      "Fortschritt wird nur auf diesem Gerät gespeichert. Du kannst eine Sicherung exportieren.",
    settingsTitle: "Einstellungen & Backup",
    langLabel: "Sprache der Bedienung",
    backupTitle: "Deine Lernhistorie",
    backupText:
      "Nur lokal auf diesem Gerät gespeichert; keine automatische Cloud-Synchronisation.",
    exportBtn: "Fortschritt exportieren (.json)",
    importBtn: "Fortschritt importieren",
    resetBtn: "Fortschritt löschen",
    settingsFoot:
      "Für zuverlässiges Speichern und die Installation auf dem Startbildschirm die App über eine HTTPS-Webseite öffnen. Danach funktioniert sie auch offline.",
    footerText: "Beta 3.0.1",
    allCategories: "Alle Themen",
    correct: "✓ Richtig! Sehr gut.",
    tryAgain:
      "Noch nicht erkannt – deine Formulierung kann trotzdem richtig sein. Versuche es erneut oder zeige die Lösung.",
    secondTry: "✓ Beim zweiten Versuch richtig.",
    answerRevealed:
      "Vergleiche deine Antwort mit den Lösungen. Eine andere richtige Antwort kannst du unten selbst bestätigen.",
    altResult:
      "Als selbst geprüft gespeichert. Die Karte bleibt zur Wiederholung vorgemerkt.",
    noAnswer: "Schreibe zuerst eine Korrektur.",
    noCards: "Für diese Auswahl gibt es keine Karten. Wähle ein anderes Thema.",
    resetConfirm:
      "Wirklich den gesamten Lernfortschritt auf diesem Gerät löschen?",
    importConfirm: "Den aktuellen Fortschritt mit dieser Sicherung ersetzen?",
    importFailed: "Keine gültige Sicherungsdatei.",
    importSuccess: "Fortschritt importiert.",
    exportSuccess: "Sicherung heruntergeladen.",
    savedWarning:
      "Der lokale Speicher ist hier nicht verfügbar. Der Fortschritt geht beim Schließen möglicherweise verloren. Öffne die App möglichst über HTTPS.",
    storageError:
      "Fortschritt konnte nicht gespeichert werden. Erstelle möglichst eine Sicherung.",
    noDifficult:
      "Noch keine schwierigen Karten. Wir starten eine normale Übung.",
    due: "Fällig",
    done: "Erledigt",
    first: "1. Versuch",
    second: "2. Versuch",
    reveal: "Lösung gezeigt",
    self: "Alternative",
    count: "Karten",
    toleranceHint:
      "Schreibe auf Deutsch. Achte auf Schreibweise und Satzzeichen.",
    draftLabel: "Ausgangsform",
    draftFocus: "Ausgangsform · zu überarbeitende Stelle unterstrichen",
    contextHint:
      "Diese Formulierung passt in einem anderen Zusammenhang. Achte darauf, was du hier ausdrücken sollst.",
    targetReview:
      "Vergleiche die unterstrichene Form in der Musterlösung und lies die Erklärung.",
    whyLabel: "Warum? · Erklärung auf Englisch",
    otherLabel: "Weitere akzeptierte Antworten",
    targetHint:
      "Prüfe den Lernschwerpunkt dieser Aufgabe. Unter „Warum?“ findest du eine Hilfe.",
  },
};
Object.assign(M.en,{"packageTitle": "Learning packages", "packageLabel": "Learning package", "allCards": "All cards", "newCards": "Newly added · unpractised", "practised": "practised", "packageBtn": "Import new learning cards", "catalogBtn": "Export card catalogue", "confirmPackage": "Add cards", "newCount": "new", "duplicates": "duplicates", "conflicts": "conflicts", "invalidPackage": "Invalid package.", "packageSaved": "Cards added.", "minor": "✓ Learning goal met.", "unchecked": "Unchecked", "skips": "Solution only", "minorCount": "With a form note", "contextCount": "Different context", "targetCount": "Confirmed target errors", "unseen": "Unpractised", "legacy": "Earlier error counts are preserved separately.", "backupTitle": "Full personal backup", "importBtn": "Import progress backup", "exportBtn": "Export full backup", "importConfirm": "Restore this backup and replace the saved progress? A full backup also replaces your learning packages."});
Object.assign(M.de,{"packageTitle": "Lernpakete", "packageLabel": "Lernpaket", "allCards": "Alle Karten", "newCards": "Neu hinzugefügt · unbearbeitet", "practised": "bearbeitet", "packageBtn": "Neue Lernkarten importieren", "catalogBtn": "Kartenbestand exportieren", "confirmPackage": "Karten hinzufügen", "newCount": "neu", "duplicates": "Duplikate", "conflicts": "Konflikte", "invalidPackage": "Ungültiges Lernpaket.", "packageSaved": "Karten hinzugefügt.", "minor": "✓ Lernziel erreicht.", "unchecked": "Ungeprüft", "skips": "Nur Lösung", "minorCount": "Mit Formhinweis", "contextCount": "Anderer Kontext", "targetCount": "Bestätigte Lernzielfehler", "unseen": "Unbearbeitet", "legacy": "Frühere Fehlerzählungen bleiben separat erhalten.", "backupTitle": "Persönliche Komplettsicherung", "importBtn": "Fortschrittssicherung importieren", "exportBtn": "Komplettsicherung exportieren", "importConfirm": "Sicherung wiederherstellen und den Fortschritt ersetzen? Eine Komplettsicherung ersetzt auch deine Lernpakete."});
let lastSaved=null;
let unreadableStore=false;
let state = {
  packages: [],
  records: {},
  days: {},
  settings: { lang: "en", goal: 10, category: "all" },
  active: null,
};
let toastTimeout = null;
function t(k) {
  return M[state.settings.lang]?.[k] ?? M.en[k] ?? k;
}
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function dateAdd(days) {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function cleanState(src, packages = verifyPackages(src?.packages ?? [])) {
  const obj = (v) => v && typeof v === "object" && !Array.isArray(v);
  if (!obj(src) || !obj(src.records) || !obj(src.days))
    throw Error("Invalid backup");
  const integer = (v) => (Number.isSafeInteger(v) && v >= 0 ? v : 0);
  const date = (v) =>
    typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : "";
  const settings = src.settings || {};
  const catalog=catalogFor(packages);
  const restored = {
    packages,
    records: {},
    days: {},
    active: null,
    settings: {
      package: ["all","new","original",...packages.map(p=>p.id)].includes(settings.package)?settings.package:"all",
      lang: settings.lang === "de" ? "de" : "en",
      goal: [10, 15, 20, 30].includes(settings.goal) ? settings.goal : 10,
      category: CATEGORIES.includes(settings.category)
        ? settings.category
        : "all",
    },
  };
  for (const q of catalog) {
    const r = src.records[q.id];
    if (!obj(r)) continue;
    const clean = {
      box: Math.min(5, integer(r.box)),
      last: date(r.last),
      due: date(r.due),
    };
    for (const key of ["seen", "correct", "wrong", "alternatives", "confirmed", "unchecked", "minor", "skips", "contexts"])
      clean[key] = integer(r[key]);
    clean.selfEntries = (Array.isArray(r.selfEntries) ? r.selfEntries : [])
      .filter((e) => typeof e?.answer === "string")
      .slice(-15)
      .map((e) => ({ answer: e.answer, date: date(e.date) }));
    restored.records[q.id] = clean;
  }
  for (const [key, value] of Object.entries(src.days))
    if (date(key)) restored.days[key] = integer(value);
  const a = src.active;
  if (
    !obj(a) ||
    !Array.isArray(a.ids) ||
    !a.ids.every((id) => catalog.some((q) => q.id === id)) ||
    new Set(a.ids).size !== a.ids.length ||
    !Number.isInteger(a.idx) ||
    a.idx < 0 ||
    a.idx >= a.ids.length
  )
    return restored;
  const ui = a.ui || {};
  const results = [];
  for (const entry of Array.isArray(a.results) ? a.results : []) {
    if (
      entry &&
      a.ids.slice(0, a.idx + 1).includes(entry.id) &&
      ["first", "second", "reveal", "self"].includes(entry.kind) &&
      !results.some((e) => e.id === entry.id)
    )
      results.push({ id: entry.id, kind: entry.kind, detail: ["minor","match","target","context","unknown","skips"].includes(entry.detail)?entry.detail:null, date: date(entry.date) });
  }
  restored.active = {
    ids: a.ids,
    idx: a.idx,
    results,
    mode: a.mode === "hard" ? "hard" : "normal",
    ui: {
      attempts: Math.min(2, integer(ui.attempts)),
      answer: typeof ui.answer === "string" ? ui.answer : "",
      why: ui.why === true,
      lastInput: typeof ui.lastInput==="string"?ui.lastInput:ui.answer,
      hadTarget: ui.hadTarget===true || ui.lastVerdict==="target",
      hadUnknown: ui.hadUnknown===true || ui.lastVerdict==="unknown",
      hadContext: ui.hadContext===true || ui.lastVerdict==="context",
      lastVerdict: ["minor","unknown", "target", "match", "context"].includes(
        ui.lastVerdict,
      )
        ? ui.lastVerdict
        : null,
    },
  };
  return restored;
}
function load() {
  try {
    const raw = localStorage.getItem(STORE);
    lastSaved=raw;
    if (raw) {state = cleanState(JSON.parse(raw)); syncCatalog();}
  } catch {
    unreadableStore=true;
    EL("storageNote").hidden = false;
    EL("storageNote").textContent = t("savedWarning");
  }
}
function commitState(next, restoring=false) {
  if (unreadableStore && !restoring) throw Error("Restore a backup to replace unreadable data.");
  if (localStorage.getItem(STORE)!==lastSaved) throw Error("Data changed in another tab. Reload before continuing.");
  const raw=JSON.stringify(next);
  localStorage.setItem(STORE,raw); lastSaved=raw; unreadableStore=false;
  if(next!==state){state=next;syncCatalog();}
}
window.addEventListener("storage",event=>{if(event.key===STORE || event.key===null) location.reload();});
function save() {
  try {
    commitState(state);
    return true;
  } catch (e) {
    EL("storageNote").hidden = false;
    EL("storageNote").textContent = t("savedWarning");
    return false;
  }
}
function record(id) {
  return (
    state.records[id] || {
      box: 0,
      correct: 0,
      wrong: 0,
      seen: 0,
      due: "",
      last: "",
      alternatives: 0,
    }
  );
}
function categoryName(v) {
  if (v === "all") return t("allCategories");
  return CN[v]?.[state.settings.lang === "en" ? 0 : 1] || v;
}
function refreshLanguage() {
  packageOverview();
  document.documentElement.lang = state.settings.lang;
  document.querySelectorAll("[id]").forEach((el) => {
    if (M.en[el.id] && el.id !== "startBtn") el.textContent = t(el.id);
  });
  EL("inputLabel").textContent = t("inputLabel");
  EL("answer").placeholder = t("inputPlaceholder");
  EL("goal").value = String(state.settings.goal || 10);
  EL("lang").value = state.settings.lang;
  EL("category").innerHTML = "";
  const a = document.createElement("option");
  a.value = "all";
  a.textContent = t("allCategories");
  EL("category").append(a);
  CATEGORIES.forEach((c) => {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = categoryName(c);
    EL("category").append(o);
  });
  EL("category").value = state.settings.category || "all";
  EL("startBtn").textContent = t("startBtn").replace(
    "{n}",
    String(state.settings.goal || 10),
  );
  EL("footerText").textContent=DATA.length+" "+t("count")+" · Beta 3.0.1";
  if (!EL("practice").hidden) showCard();
  if (!EL("stats").hidden) renderStats();
  if (!EL("home").hidden) renderHome();
}
function nav(view) {
  ["home", "practice", "stats", "settings", "results"].forEach(
    (id) => (EL(id).hidden = id !== view),
  );
  document
    .querySelectorAll(".nav button")
    .forEach((b) =>
      b.classList.toggle(
        "selected",
        b.dataset.view ===
          (view === "practice" || view === "results" ? "home" : view),
      ),
    );
  if (view === "home") renderHome();
  if(view==="settings") packageOverview();
  if (view === "stats") renderStats();
  window.scrollTo(0, 0);
}
function toast(message) {
  let n = EL("toast");
  n.textContent = message;
  n.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => (n.hidden = true), 2700);
}
function counts() {
  let r = Object.values(state.records);
  return {
    seen: r.filter((x) => (x.seen || 0) > 0).length,
    due: r.filter((x) => x.due && x.due <= today()).length,
    today: state.days[today()] || 0,
    mastered: r.filter((x) => (x.box || 0) >= 3).length,
  };
}
function renderHome() {
  const c = counts();
  const pool=filteredPool(state.settings.category);
  EL("startBtn").textContent=t("startBtn").replace("{n}",Math.min(pool.length,state.settings.goal));
  EL("startBtn").disabled=!pool.length;
  EL("repeatBtn").disabled=!pool.some(x=>isDifficult(record(x.id)));
  EL("todayStat").textContent = c.today + " / 10";
  EL("dueStat").textContent = c.due;
  EL("trainedStat").textContent = c.seen;
  EL("resumeBtn").hidden = !(
    state.active && state.active.idx < state.active.ids.length
  );
}
function shuffled(arr) {
  return arr
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((x) => x.x);
}
function isDifficult(r) { return r.wrong || r.alternatives || r.unchecked || r.contexts || r.skips; }
function selectCards(size, category = "all", mode = "normal") {
  let pool = filteredPool(category);
  const due = shuffled(
    pool.filter(
      (x) =>
        record(x.id).seen > 0 &&
        (!record(x.id).due || record(x.id).due <= today()),
    ),
  ).sort((a, b) => (record(b.id).wrong || 0) - (record(a.id).wrong || 0));
  const fresh = shuffled(pool.filter((x) => !record(x.id).seen));
  const future = shuffled(
    pool.filter((x) => record(x.id).seen > 0 && record(x.id).due > today()),
  );
  let cards = [];
  if (mode === "hard") {
    const hard = shuffled(
      pool.filter(
        (x) => isDifficult(record(x.id)),
      ),
    ).sort((a, b) => (record(b.id).wrong || 0) - (record(a.id).wrong || 0));
    cards = hard.slice(0, size);
  } else {
    while (cards.length < size && (due.length || fresh.length)) {
      if (due.length) cards.push(due.shift());
      if (cards.length < size && fresh.length) cards.push(fresh.shift());
    }
    if (cards.length < size)
      cards.push(...future.slice(0, size - cards.length));
  }
  return [...new Set(cards.map((x) => x.id))].slice(0, size);
}
function start(mode = "normal") {
  const goal = Number(state.settings.goal) || 10;
  let ids = selectCards(goal, state.settings.category || "all", mode);
  if (mode === "hard" && !ids.length) {
    toast(t("noDifficult"));
    ids = selectCards(goal, state.settings.category || "all", "normal");
  }
  if (!ids.length) {
    toast(t("noCards"));
    return;
  }
  state.active = { ids, idx: 0, results: [], mode };
  save();
  nav("practice");
  showCard();
}
function current() {
  if (!state.active) return null;
  return DATA.find((x) => x.id === state.active.ids[state.active.idx]) || null;
}
function freshUI() {
  return { attempts: 0, answer: "", lastVerdict: null, why: false };
}

function showReference(q) {
  const target = EL("referenceText");
  const index = q.answer
    .toLocaleLowerCase("de")
    .indexOf(q.focus.toLocaleLowerCase("de"));
  const mark = document.createElement("mark");
  mark.textContent = q.answer.slice(index, index + q.focus.length);
  target.replaceChildren(
    q.answer.slice(0, index),
    mark,
    q.answer.slice(index + q.focus.length),
  );
  EL("variants").replaceChildren(
    ...q.variants.map((value) => {
      const item = document.createElement("li");
      item.textContent = value;
      return item;
    }),
  );
  EL("otherLabel").textContent =
    t("otherLabel") + " (" + q.variants.length + ")";
  EL("others").hidden = !q.variants.length;
}

function showCard() {
  const q = current();
  if (!q) return finish();
  const session = state.active;
  const ui = (session.ui ||= freshUI());
  // Alpha saved results before advancing. Its result is authoritative on resume.
  const result = session.results.find((entry) => entry.id === q.id);
  const ended = Boolean(result);
  EL("pos").textContent = session.idx + 1 + " / " + session.ids.length;
  const completed = session.idx + Number(ended);
  EL("progressFill").style.width = (100 * completed) / session.ids.length + "%";
  const bar = EL("progressFill").parentElement;
  bar.setAttribute("aria-valuenow", completed);
  bar.setAttribute("aria-valuemax", session.ids.length);
  EL("topicName").textContent = categoryName(q.category);
  EL("wrongLabel").textContent = q.task;
  EL("wrongLabel").lang = "de";
  const draft = EL("wrongSentence");
  draft.textContent = q.wrong;
  const highlight = ended && q.originalFocus;
  EL("draftLabel").textContent = t(highlight ? "draftFocus" : "draftLabel");
  if (highlight) {
    const start = q.wrong.indexOf(q.originalFocus);
    const mark = document.createElement("mark");
    mark.textContent = q.originalFocus;
    draft.replaceChildren(
      q.wrong.slice(0, start),
      mark,
      q.wrong.slice(start + q.originalFocus.length),
    );
  }
  EL("context").textContent = q.context;
  EL("rule").textContent = q.rule;
  EL("example").textContent = q.example;
  EL("why").open = ui.why;
  EL("sessionMini").textContent = "#" + q.id;
  EL("answer").value = ui.answer;
  EL("answer").disabled = ended;
  EL("answer").autocapitalize = "off";
  EL("primaryActions").hidden = ended;
  EL("finishedActions").hidden = !ended;
  EL("referenceBox").hidden = !ended;
  EL("alternateBtn").hidden =
    result?.kind !== "reveal" ||
    !ui.answer.trim() ||
    ["target", "context"].includes(ui.lastVerdict);
  EL("noteAboutAlt").hidden = EL("alternateBtn").hidden;
  EL("feedback").hidden = true;
  EL("comparison").hidden=true;
  if (ended) {
    showReference(q);
    const key = {
      first: "correct",
      second: "secondTry",
      self: "altResult",
      reveal: "answerRevealed",
    }[result.kind];
    feedback(
      ["first", "second"].includes(result.kind) ? "good" : "warn",
      result.kind === "reveal" && ui.lastVerdict === "target"
        ? t("targetReview")
        : ui.lastVerdict === "context" && result.kind === "reveal"
          ? t("contextHint")
          : t(key),
    );
  } else if (ui.attempts && ui.answer===ui.lastInput) {
    feedback(
      "warn",
      t(
        ui.lastVerdict === "context"
          ? "contextHint"
          : ui.lastVerdict === "target"
            ? "targetHint"
            : "tryAgain",
      ),
    );
  }
  if (ended || (ui.attempts && ui.answer===ui.lastInput)) {
    const detail=assess(ui.answer,q), key=detail.verdict;
    if (key==="minor" && ended) feedback("good",t("minor")+" "+detail.hint+" "+detail.form);
    if (key==="target") feedback("warn",t("targetHint")+" "+(detail.hint||q.rule));
    if (key==="unknown" || !ui.answer.trim()) EL("feedback").className="feedback neutral";
    const box=EL("comparison"); box.replaceChildren();
    if (ui.answer.trim()) {
      box.hidden=false;box.append(t("inputLabel")+" · ");
      const index=detail.span ? ui.answer.indexOf(detail.span) : -1;
      if (["target","minor"].includes(key) && index>=0) {
        const mark=document.createElement("mark");mark.textContent=detail.span;
        box.append(ui.answer.slice(0,index),mark,ui.answer.slice(index+detail.span.length));
      } else box.append(ui.answer);
    }
  }
}
function feedback(type, message) {
  const el = EL("feedback");
  el.className = "feedback " + type;
  el.textContent = message;
  el.hidden = false;
}
function finalize(kind) {
  const session = state.active,
    q = current();
  if (!q || session.results.some((entry) => entry.id === q.id)) return;
  const r = { ...record(q.id) };
  const ui=session.ui;
  const detail=ui.answer.trim()?ui.lastVerdict:"skips";
  const inc=k=>r[k]=(r[k]||0)+1;
  if(ui.hadTarget || detail==="target"){inc("confirmed");inc("wrong");}
  if(ui.hadUnknown || detail==="unknown") inc("unchecked");
  if(ui.hadContext || detail==="context") inc("contexts");
  if(detail==="minor") inc("minor");
  if(detail==="skips") inc("skips");
  r.seen++;
  r.last = today();
  if (kind === "first") {
    r.correct++;
    r.box = Math.min(5, r.box + 1);
    r.due = dateAdd([0, 1, 3, 7, 14, 30][r.box]);
  } else {
    if (kind === "second") r.correct++;

    r.box = kind === "second" ? 1 : 0;
    r.due = dateAdd(1);
  }
  state.records[q.id] = r;
  session.results.push({ id: q.id, kind, detail, date: today() });
  state.days[today()] = (state.days[today()] || 0) + 1;
  save();
  showCard();
  EL("answer").blur();
  EL("nextBtn").focus({ preventScroll: true });
}
function submitAnswer() {
  if (!current() || state.active.results.some((e) => e.id === current().id))
    return;
  const ui = state.active.ui;
  ui.answer = EL("answer").value;
  if (!ui.answer.trim()) return toast(t("noAnswer"));
  ui.lastInput=ui.answer;
  ui.lastVerdict = classify(ui.answer, current());
  if(ui.lastVerdict==="target") ui.hadTarget=true;
  if(ui.lastVerdict==="unknown") ui.hadUnknown=true;
  if(ui.lastVerdict==="context") ui.hadContext=true;
  if (["match","minor"].includes(ui.lastVerdict))
    return finalize(ui.attempts ? "second" : "first");
  ui.attempts++;
  if (ui.attempts >= 2) {
    ui.why = true;
    finalize("reveal");
  } else {
    save();
    showCard();
    EL("answer").focus();
  }
}
function showSolution() {
  if (!current()) return;
  state.active.ui.answer = EL("answer").value;
  state.active.ui.lastVerdict = classify(state.active.ui.answer, current());
  if (["match","minor"].includes(state.active.ui.lastVerdict)) return finalize(state.active.ui.attempts?"second":"first");
  finalize("reveal");
}
function selfAssess() {
  const q = current();
  if (!q) return;
  const session = state.active,
    result = session.results.find((e) => e.id === q.id);
  if (
    result?.kind !== "reveal" ||
    !session.ui.answer.trim() ||
    ["target", "context"].includes(session.ui.lastVerdict)
  )
    return;
  const r = state.records[q.id];
  r.alternatives++;

  r.selfEntries = [
    ...(r.selfEntries || []),
    { answer: session.ui.answer, date: today() },
  ].slice(-15);
  result.kind = "self";
  save();
  showCard();
}
function nextCard() {
  if (!current() || !state.active.results.some((e) => e.id === current().id))
    return;
  state.active.idx++;
  state.active.ui = freshUI();
  EL("others").open = false;
  if (!current()) return finish();
  save();
  showCard();
  window.scrollTo(0, 0);
}
function finish() {
  const results = state.active?.results || [];
  EL("resultFirst").textContent = results.filter(
    (x) => x.kind === "first",
  ).length;
  EL("resultSecond").textContent = results.filter(
    (x) => x.kind === "second",
  ).length;
  EL("resultAgain").textContent = results.filter(
    (x) => x.kind === "reveal",
  ).length;
  EL("resultAlternate").textContent = results.filter(
    (x) => x.kind === "self",
  ).length;
  EL("sessionDetails").textContent=[["minor","minorCount"],["unknown","unchecked"],["target","targetCount"],["context","contextCount"],["skips","skips"]].map(([key,label])=>t(label)+" "+results.filter(r=>r.detail===key && r.kind!=="self").length).join(" · ");
  state.active = null;
  save();
  nav("results");
}
function streak() {
  let n = 0;
  let d = new Date();
  d.setHours(12, 0, 0, 0);
  const stamp = (x) =>
    `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`;
  if (!state.days[stamp(d)]) d.setDate(d.getDate() - 1);
  while (state.days[stamp(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
function renderStats() {
  const c = counts();
  EL("statsSeen").textContent = c.seen + "/" + DATA.length;
  EL("statsMastered").textContent = c.mastered;
  EL("statsStreak").textContent = streak();
  const sum=k=>Object.values(state.records).reduce((n,r)=>n+(r[k]||0),0);
  EL("assessmentStats").textContent=[t("unseen")+" "+(DATA.length-c.seen),t("targetCount")+" "+sum("confirmed"),t("unchecked")+" "+sum("unchecked"),t("contextCount")+" "+sum("contexts"),t("minorCount")+" "+sum("minor"),t("skips")+" "+sum("skips"),t("resultAlternateLabel")+" "+sum("alternatives"),t("legacy")+" "+(sum("wrong")-sum("confirmed"))].join(" · ");
  const target = EL("topicBreakdown");
  target.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const total = DATA.filter((x) => x.category === cat).length;
    const done = DATA.filter(
      (x) => x.category === cat && record(x.id).seen > 0,
    ).length;
    const row = document.createElement("div");
    row.className = "history-row";
    const left = document.createElement("span");
    left.textContent = categoryName(cat);
    const right = document.createElement("strong");
    right.textContent = done + " / " + total;
    row.append(left, right);
    target.append(row);
  });
}
function exportProgress() {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          app: "hasyin-b1-trainer",
          version: 2,
          exported: new Date().toISOString(),
          state,
        },
        null,
        2,
      ),
    ],
    { type: "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Hasyin_B1_Fortschritt_" + today() + ".json";
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  toast(t("exportSuccess"));
}
async function importProgress(f) {
  try {
    const backup = JSON.parse(await f.text());
    if (backup.app !== "hasyin-b1-trainer") throw Error("Invalid backup");
    if (![1,2].includes(backup.version)) throw Error("Unsupported backup");
    if(backup.version===2 && !Array.isArray(backup.state?.packages)) throw Error("Missing packages");
    const restoredPackages=backup.version===2?verifyPackages(backup.state.packages):state.packages;
    if (backup.version===2) {
      const source=backup.state;
      const ids=new Set(catalogFor(restoredPackages).map(c=>String(c.id)));
      if (!source.settings || !source.days || !source.records) throw Error("Incomplete backup");
      for (const [id,r] of Object.entries(source.records)) {
        if (!ids.has(id) || !r || !["seen","wrong","correct","box","alternatives"].every(k=>Number.isSafeInteger(r[k]) && r[k]>=0))
          throw Error("Invalid card record");
      }
      for(const [day,count] of Object.entries(source.days))
        if(!/^\d{4}-\d{2}-\d{2}$/.test(day) || !Number.isSafeInteger(count) || count<0) throw Error("Invalid history");
    }
    const next = cleanState(backup.state,restoredPackages);
    if(backup.version===2 && backup.state.active && !next.active) throw Error("Invalid active session");
    if(backup.version===1) for(const c of DATA) if(typeof c.id==="string" && state.records[c.id]) next.records[c.id]=state.records[c.id];
    if (!confirm(t("importConfirm"))) return;
    commitState(next,true);
    const stored = true;
    nav("home");
    refreshLanguage();
    toast(t(stored ? "importSuccess" : "storageError"));
  } catch {
    toast(t("importFailed"));
  }
}
EL("answer").addEventListener("input", () => {
  if (!current() || EL("answer").disabled) return;
  state.active.ui.answer = EL("answer").value;
  EL("comparison").hidden=true;
  EL("feedback").hidden=true;
  save();
});
EL("why").addEventListener("toggle", () => {
  if (!current() || EL("practice").hidden) return;
  state.active.ui.why = EL("why").open;
  save();
});
load();
refreshLanguage();
nav("home");
try {
  const key = "__hasyin_storage_test";
  localStorage.setItem(key, "1");
  localStorage.removeItem(key);
} catch (e) {
  EL("storageNote").hidden = false;
  EL("storageNote").textContent = t("savedWarning");
}
document
  .querySelectorAll(".nav button")
  .forEach((b) => b.addEventListener("click", () => nav(b.dataset.view)));
EL("packageFilter").onchange=e=>{state.settings.package=e.target.value;save();renderHome();};
EL("packageBtn").onclick=()=>EL("packageFile").click();
EL("packageFile").onchange=async e=>{const f=e.target.files[0];if(f) await previewPackage(f);e.target.value="";};
EL("confirmPackage").onclick=acceptPackage;
EL("catalogBtn").onclick=()=>downloadJSON({type:"card-catalogue",version:1,packages:[{id:ORIGINAL_ID,name:"Original mistakes – November 2026",created:ORIGINAL_DATE,cards:ORIGINAL},...state.packages]},"B1_Card_Catalogue.json");
EL("category").addEventListener("change", (e) => {
  state.settings.category = e.target.value;renderHome();
  save();
});
EL("goal").addEventListener("change", (e) => {
  state.settings.goal = Number(e.target.value);
  renderHome();
  save();
});
EL("startBtn").addEventListener("click", () => start("normal"));
EL("repeatBtn").addEventListener("click", () => start("hard"));
EL("resumeBtn").addEventListener("click", () => {
  if (state.active) {
    nav("practice");
    showCard();
  }
});
EL("answerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  submitAnswer();
});
EL("showBtn").addEventListener("click", showSolution);
EL("nextBtn").addEventListener("click", nextCard);
EL("alternateBtn").addEventListener("click", selfAssess);
EL("quitBtn").addEventListener("click", () => nav("home"));
EL("moreBtn").addEventListener("click", () => {
  state.settings.goal = 10;
  EL("goal").value = "10";
  start("normal");
});
EL("resultsHomeBtn").addEventListener("click", () => nav("home"));
EL("lang").addEventListener("change", (e) => {
  state.settings.lang = e.target.value;
  save();
  refreshLanguage();
});
EL("exportBtn").addEventListener("click", exportProgress);
EL("importBtn").addEventListener("click", () => EL("importFile").click());
EL("importFile").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (file) await importProgress(file);
  e.target.value = "";
});
EL("resetBtn").addEventListener("click", () => {
  if (!confirm(t("resetConfirm"))) return;
  state.records = {};
  state.days = {};
  state.active = null;
  save();
  nav("home");
  toast("✓");
});
if ("serviceWorker" in navigator && window.isSecureContext)
  navigator.serviceWorker.register("./sw.js").catch(() => {});
