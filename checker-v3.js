// Check only locally curated forms. Preserve case, meaningful marks and umlauts.
function normalizedForm(value, card) {
  let text = String(value)
    .normalize("NFC")
    .trim()
    .replace(/\r\n?/g, "\n")
    .replace(/’/g, "'");
  if (card.mode === "letter") {
    return text
      .split("\n")
      .map((line) => line.trim().replace(/[^\S\n]+/gu, " "))
      .filter(Boolean)
      .join("\n");
  }
  text = text.replace(/\s+/gu, " ");
  if (card.mode === "sentence") text = text.replace(/\bgerne\b/gu, "gern");
  return text;
}

function matchesForm(actual, expected, card) {
  let reference = normalizedForm(expected, card);
  // A standalone response may start with a capital even when the missing
  // phrase belongs inside a longer sentence. Only allow this in grammar tasks.
  const fragment =
    card.mode === "sentence" &&
    /^[a-zäöü]/u.test(reference) &&
    !/[.!?…]$/u.test(reference);
  if (fragment && !/^(sie|ihr|ihnen)\b/u.test(reference) && actual[0] === reference[0].toLocaleUpperCase("de"))
    reference = reference[0].toLocaleUpperCase("de") + reference.slice(1);
  if (fragment && card.tolerance.final && actual === reference + ".") return true;
  if (actual === reference) return true;
  // A missing final mark is harmless in grammar tasks. Keep an explicitly
  // typed question mark distinct from a full stop, and preserve ellipses.
  return (
    card.tolerance.final &&
    /[^.!?][.!?]$/u.test(reference) &&
    actual === reference.slice(0, -1)
  );
}

// Lowercase only a curated initial word, never an internal noun or formal Sie.
const safeStarter = /^(Wir|Ich|Im|In|Am|Für|Mir|Nach|Es|Das|Die|Der|Ein|Eine|Gestern|Morgen|Vielleicht|Deshalb|Dann|Leider|Meine|Du|Wenn|Weil|Können|Kann|Was|Wie|Wo|Über|Vor|Mit|Bei|Seit|Auf|Normalerweise|Könntest|Wollen)(?=\s)/u;
function assess(input, card) {
  const actual = normalizedForm(input, card);
  const forms = [card.answer, ...card.variants];
  for (const form of forms) {
    if (matchesForm(actual, form, card)) return { verdict: "match", form };
  }
  for (const form of forms) {
    if (card.tolerance.initial && safeStarter.test(form) &&
        actual[0] === form[0].toLocaleLowerCase("de") &&
        matchesForm(form[0] + actual.slice(1), form, card))
      return {verdict:"minor", form, span: input.trim()[0],
        hint:"Start the sentence with a capital letter."};
  }
  for (const error of card.errors) {
    if (matchesForm(actual, error.form, card))
      return {verdict:"target", span:error.span, hint:error.hint};
  }
  if (matchesForm(actual, card.negative, card)) return {verdict:"target",hint:card.hint};
  if (card.mode === "exact" && forms.some(form =>
      normalizedForm(form, card).toLocaleLowerCase("de") === actual.toLocaleLowerCase("de")))
    return {verdict:"target",hint:card.hint};
  if (card.contextForms.some(form => matchesForm(actual, form, card))) return {verdict:"context"};
  if (matchesForm(actual, card.wrong, card))
    return {verdict:card.sourceVerdict, hint:card.hint, span:card.originalFocus};
  return {verdict:"unknown"};
}
function classify(input, card) { return assess(input, card).verdict; }
