const DATA = [
  {
    "id": 1,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "After a long time apart.",
    "answer": "Nach langer Zeit waren wir wieder alle zusammen.",
    "variants": [
      "Nach langer Zeit waren wir alle wieder zusammen.",
      "Nach langer Zeit waren alle wieder zusammen.",
      "Wir waren nach langer Zeit wieder alle zusammen."
    ],
    "rule": "Nach takes the dative. Without an article, use langer Zeit. The whole time phrase fills position one, so waren comes next. Alle means all the people.",
    "example": "Nach einer Woche kam sie zurück.",
    "focus": "waren",
    "mode": "sentence",
    "negative": "Nach langer Zeit wir waren wieder alle zusammen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir waren",
    "wrong": "Nach der lange Zeit, wir waren alles zusammen.",
    "target": "Verbzweitstellung nach einer Zeitangabe und Dativ nach nach",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Nach takes the dative. Without an article, use langer Zeit. The whole time phrase fills position one, so waren comes next. Alle means all the people."
  },
  {
    "id": 2,
    "category": "Satzstellung & Nebensätze",
    "task": "Sag, was dir wichtig ist oder unter welcher Bedingung es dir wichtig ist.",
    "context": "Practice context: nearby shops and services matter to you.",
    "answer": "Für mich ist es wichtig, dass alles in der Nähe ist.",
    "variants": [
      "Es ist mir wichtig, dass alles in der Nähe ist.",
      "Mir ist wichtig, dass alles in der Nähe ist.",
      "Für mich ist wichtig, dass alles in der Nähe ist.",
      "Für mich ist es wichtig, wenn alles in der Nähe ist."
    ],
    "rule": "Dass introduces what matters. Wenn describes a condition: it matters to you when everything is nearby. After Für mich, put ist before es. Both subordinate clauses end in ist.",
    "example": "Mir ist wichtig, dass du Zeit hast.",
    "focus": "dass",
    "mode": "sentence",
    "negative": "Für mich es ist wichtig, dass alles in der Nähe ist.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "es wichtig",
    "wrong": "Für mich es wichtig, wenn alles in der nähe ist.",
    "target": "Es ist wichtig, dass … und Großschreibung von Nähe",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [
      {
        "form": "Für mich ist es wichtig, dass alles ist in der Nähe.",
        "span": "ist in der Nähe",
        "hint": "In a dass clause, put the finite verb at the end."
      }
    ],
    "hint": "Dass introduces what matters. Wenn describes a condition: it matters to you when everything is nearby. After Für mich, put ist before es. Both subordinate clauses end in ist."
  },
  {
    "id": 3,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Apologise for being late.",
    "answer": "Es tut mir leid, dass ich zu spät bin.",
    "variants": [
      "Entschuldigung, dass ich zu spät gekommen bin.",
      "Es tut mir leid, dass ich zu spät gekommen bin.",
      "Es tut mir leid, dass ich spät dran bin."
    ],
    "rule": "The apology and the dass clause need a comma. Dass introduces the reason for your apology. Compare Ich bin zu spät with …, dass ich zu spät bin.",
    "example": "Es tut mir leid, dass ich warten musste.",
    "focus": "dass",
    "mode": "sentence",
    "negative": "Es tut mir leid, das ich zu spät bin.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "das",
    "wrong": "Es tut mir leid das ich spät bin.",
    "target": "Entschuldigung mit Komma und dass-Satz",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "The apology and the dass clause need a comma. Dass introduces the reason for your apology. Compare Ich bin zu spät with …, dass ich zu spät bin."
  },
  {
    "id": 4,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Give your opinion about grammar.",
    "answer": "Ich finde, dass die Grammatik beim Deutschlernen schwierig ist.",
    "variants": [
      "Ich finde die Grammatik beim Deutschlernen schwierig.",
      "Ich finde, die deutsche Grammatik ist schwierig.",
      "Ich finde, Grammatik ist beim Deutschlernen schwierig."
    ],
    "rule": "Put the comma before dass. Grammatik is feminine. The verb of the dass clause comes last, as in Ich finde, dass Deutsch schwierig ist.",
    "example": "Ich finde, dass die Übung leicht ist.",
    "focus": "schwierig",
    "mode": "sentence",
    "negative": "Ich finde, dass der Grammatik schwierig ist.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "schwerig",
    "wrong": "Ich finde das, der Grammatik beim Deutschlernen ist schwerig.",
    "target": "Meinung mit finden und Verbendstellung",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Put the comma before dass. Grammatik is feminine. The verb of the dass clause comes last, as in Ich finde, dass Deutsch schwierig ist."
  },
  {
    "id": 5,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "You are meeting each other.",
    "answer": "Wir treffen uns am Samstag im Café.",
    "variants": [
      "Am Samstag treffen wir uns im Café.",
      "Wir treffen uns im Café am Samstag.",
      "Im Café treffen wir uns am Samstag."
    ],
    "rule": "Wir treffen jemanden means we meet someone. When we meet each other, say wir treffen uns. Time and place can both come first.",
    "example": "Wir treffen uns vor der Schule.",
    "focus": "uns",
    "mode": "sentence",
    "negative": "Am Samstag treffen uns im Café.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Wir treffen",
    "wrong": "Wir treffen im Café am Samstag.",
    "target": "Reziprokes sich treffen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [
      {
        "form": "Wir treffen am Samstag im Café.",
        "hint": "When you mean “meet each other”, add uns after treffen."
      }
    ],
    "hint": "Wir treffen jemanden means we meet someone. When we meet each other, say wir treffen uns. Time and place can both come first."
  },
  {
    "id": 6,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Start with the reason word or put it inside the sentence.",
    "answer": "Deshalb helfe ich dir gerne.",
    "variants": [
      "Deshalb helfe ich dir gern.",
      "Ich helfe dir deshalb gerne."
    ],
    "rule": "Deshalb connects two ideas but does not introduce a subordinate clause. If it comes first, the verb follows immediately. Deshalb komme ich.",
    "example": "Deshalb bleibe ich heute zu Hause.",
    "focus": "helfe",
    "mode": "sentence",
    "negative": "Deshalb ich helfe dir gern.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ich helfe",
    "wrong": "Deshalb ich helfe dir gerne.",
    "target": "Verbzweitstellung nach deshalb",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Deshalb connects two ideas but does not introduce a subordinate clause. If it comes first, the verb follows immediately. Deshalb komme ich."
  },
  {
    "id": 7,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete the clause after Ich glaube, …",
    "answer": "dass es besser ist",
    "variants": [
      "dass es so besser ist"
    ],
    "rule": "Dass sends the finite verb to the end. Compare Es ist einfacher with dass es einfacher ist.",
    "example": "Ich hoffe, dass es warm ist.",
    "focus": "ist",
    "mode": "sentence",
    "negative": "dass ist es besser",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ist besser",
    "wrong": "dass es ist besser",
    "target": "Verbendstellung nach dass",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Dass sends the finite verb to the end. Compare Es ist einfacher with dass es einfacher ist."
  },
  {
    "id": 8,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Suggest a buffet where everyone brings food.",
    "answer": "Meine Idee ist, dass wir ein Mitbringbuffet machen können.",
    "variants": [
      "Ich habe die Idee, dass wir ein Mitbringbuffet machen können.",
      "Ich schlage vor, dass wir ein Mitbringbuffet organisieren.",
      "Meine Idee ist, dass wir ein Mitbringbuffet machen könnten."
    ],
    "rule": "In a dass clause, the verb that changes with the subject comes last. With a modal, say machen können. Könnten makes the suggestion softer.",
    "example": "Ich glaube, dass er etwas mitbringen kann.",
    "focus": "können",
    "mode": "sentence",
    "negative": "Meine Idee ist, dass wir können ein Mitbringbuffet machen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "dast",
    "wrong": "Meine Idee ist dast wir können ein Mitbringenbuffet machen.",
    "target": "Modalverb im dass-Satz und Zusammensetzung Mitbringbuffet",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "In a dass clause, the verb that changes with the subject comes last. With a modal, say machen können. Könnten makes the suggestion softer."
  },
  {
    "id": 9,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Suggest baking pizza together.",
    "answer": "Meine Idee ist, dass wir zusammen Pizza backen können.",
    "variants": [
      "Ich schlage vor, dass wir zusammen Pizza backen.",
      "Meine Idee ist, dass wir zusammen Pizza backen könnten."
    ],
    "rule": "After dass, put wir before the verbs. Backen names the activity. Können or the softer könnten comes last.",
    "example": "Sie sagt, dass wir Brot backen können.",
    "focus": "können",
    "mode": "sentence",
    "negative": "Meine Idee ist, dass wir können zusammen Pizza backen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "können wir",
    "wrong": "Meine Idee ist, dass können wir zusammen Pizza backen.",
    "target": "Gemeinsamen Vorschlag mit Pizza backen formulieren",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "After dass, put wir before the verbs. Backen names the activity. Können or the softer könnten comes last."
  },
  {
    "id": 10,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Suggest cooking together.",
    "answer": "Ich schlage vor, dass wir zusammen kochen.",
    "variants": [
      "Meine Idee ist, dass wir zusammen kochen können.",
      "Wir könnten zusammen kochen.",
      "Meine Idee ist, dass wir zusammen kochen könnten."
    ],
    "rule": "With two verbs, say kochen könnten: the activity first, the modal last. Without a modal, kochen is the verb for wir: Ich schlage vor, dass wir zusammen kochen.",
    "example": "Meine Idee ist, dass wir gemeinsam essen.",
    "focus": "kochen",
    "mode": "sentence",
    "negative": "Meine Idee ist, dass können wir kochen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "können wir",
    "wrong": "Meine Idee ist, dass können wir zusammen kochen.",
    "target": "Gemeinsames Kochen vorschlagen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "With two verbs, say kochen könnten: the activity first, the modal last. Without a modal, kochen is the verb for wir: Ich schlage vor, dass wir zusammen kochen."
  },
  {
    "id": 11,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "You have tomorrow off and offer help as a result.",
    "answer": "Ich bin morgen frei. Deshalb helfe ich dir.",
    "variants": [
      "Ich bin morgen frei. Deshalb kann ich dir helfen.",
      "Ich bin morgen frei, deshalb helfe ich dir.",
      "Morgen habe ich frei. Deshalb helfe ich dir.",
      "Ich habe morgen frei, deshalb helfe ich dir."
    ],
    "rule": "Give the reason first. Start the result with deshalb and the finite verb: Deshalb helfe ich. Frei haben is natural for time off work.",
    "example": "Ich bin krank. Deshalb bleibe ich zu Hause.",
    "focus": "Deshalb",
    "mode": "sentence",
    "negative": "Ich habe morgen frei. Deshalb ich helfe dir.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Deshlab",
    "wrong": "Deshlab bin ich morgen frei, helfe ich dir.",
    "target": "Grund und Folge mit deshalb verbinden",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Give the reason first. Start the result with deshalb and the finite verb: Deshalb helfe ich. Frei haben is natural for time off work."
  },
  {
    "id": 12,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Explain why comfortable shoes will be useful on a planned outing.",
    "answer": "weil wir viel zu Fuß gehen",
    "variants": [
      "weil wir viel zu Fuß gehen werden",
      "weil wir viel zu Fuß laufen",
      "weil wir viel zu Fuß laufen werden",
      "weil wir viel zu Fuß unterwegs sein werden"
    ],
    "rule": "Future plans can use the present tense. With weil, place gehen last. If you choose werden, use …, weil wir viel laufen werden, without sein.",
    "example": "Wir nehmen Wasser mit, weil wir lange wandern.",
    "focus": "gehen",
    "mode": "sentence",
    "negative": "weil wir werden viel zu Fuß gehen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "laufen sein",
    "wrong": "weil wir werden viel zu Fuß laufen sein",
    "target": "Zukunftsbezug und Verbklammer im weil-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Future plans can use the present tense. With weil, place gehen last. If you choose werden, use …, weil wir viel laufen werden, without sein."
  },
  {
    "id": 13,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "You will see each other again after almost two years.",
    "answer": "weil wir uns nach fast zwei Jahren wiedersehen",
    "variants": [
      "weil wir uns nach fast zwei Jahren treffen",
      "weil wir uns nach fast zwei Jahren wieder treffen"
    ],
    "rule": "Nach fast zwei Jahren means after almost two years. Weil puts the verb last. Wiedersehen joins up there: weil wir uns wiedersehen.",
    "example": "Ich freue mich, weil wir uns bald wiedersehen.",
    "focus": "wiedersehen",
    "mode": "sentence",
    "negative": "weil wir treffen uns nach fast zwei Jahren",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "treffen wir",
    "wrong": "weil treffen wir uns fast nach zwei Jahren",
    "target": "Zeitspanne und Wiedersehen im weil-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Nach fast zwei Jahren means after almost two years. Weil puts the verb last. Wiedersehen joins up there: weil wir uns wiedersehen."
  },
  {
    "id": 14,
    "category": "Satzstellung & Nebensätze",
    "task": "Beschreibe ein Buffet in einem Nebensatz.",
    "context": "Describe ein Buffet, … where each guest brings something.",
    "answer": "bei dem jeder etwas mitbringt",
    "variants": [
      "wobei jeder etwas mitbringt",
      "bei dem alle etwas mitbringen"
    ],
    "rule": "Use bei dem for a buffet at which this happens. Wobei also sends the verb to the end. Mitbringen stays together in the subordinate clause.",
    "example": "Das ist ein Fest, bei dem alle helfen.",
    "focus": "mitbringt",
    "mode": "sentence",
    "negative": "bei dem jeder bringt etwas mit",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "wobei jeder bringt was mit",
    "target": "Relativsatz zu einem Buffet",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Use bei dem for a buffet at which this happens. Wobei also sends the verb to the end. Mitbringen stays together in the subordinate clause."
  },
  {
    "id": 15,
    "category": "Satzstellung & Nebensätze",
    "task": "Sag, dass manche Leute beide Gerichte mögen.",
    "context": "Say that some people like both dishes.",
    "answer": "Ich glaube, dass manche Leute beide Gerichte mögen.",
    "variants": [
      "Ich glaube, manche Leute mögen beide Gerichte.",
      "Ich glaube, beide Gerichte mögen manche Leute.",
      "Ich glaube, dass manche Leute beide Gerichte lieber mögen."
    ],
    "rule": "Mögen agrees with the plural subject, Leute. After dass, mögen goes last. Use beide Gerichte for both dishes and manche Leute for some people.",
    "example": "Ich glaube, dass manche Kinder beide Spiele mögen.",
    "focus": "mögen",
    "mode": "sentence",
    "negative": "Ich glaube, dass manche Leute beide Gerichte mögt.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "beide essen",
    "wrong": "Ich glaube beide essen mögen manche leute mehr.",
    "target": "Mengenangabe und Verbkongruenz bei mögen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Mögen agrees with the plural subject, Leute. After dass, mögen goes last. Use beide Gerichte for both dishes and manche Leute for some people."
  },
  {
    "id": 16,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "You are unsure about Sunday's weather.",
    "answer": "Vielleicht regnet es am Sonntag.",
    "variants": [
      "Am Sonntag regnet es vielleicht.",
      "Es könnte am Sonntag regnen.",
      "Wahrscheinlich könnte es am Sonntag regnen.",
      "Vielleicht könnte es am Sonntag regnen."
    ],
    "rule": "Vielleicht or a modal can express uncertainty. If wahrscheinlich comes first, the finite verb still comes second: Wahrscheinlich regnet es.",
    "example": "Vielleicht scheint morgen die Sonne.",
    "focus": "regnet",
    "mode": "sentence",
    "negative": "Vielleicht es regnet am Sonntag.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Wahrscheinlich es könnte am Sonntag regnen.",
    "target": "Unsicherheit ausdrücken und Hauptsatz ordnen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Vielleicht or a modal can express uncertainty. If wahrscheinlich comes first, the finite verb still comes second: Wahrscheinlich regnet es."
  },
  {
    "id": 17,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Accept an invitation for next Saturday evening.",
    "answer": "Ich habe nächsten Samstagabend Zeit und komme sehr gern zur Feier.",
    "variants": [
      "Nächsten Samstagabend habe ich Zeit und komme sehr gern zur Feier.",
      "Ich habe nächsten Samstagabend Zeit und komme gerne zur Feier.",
      "Ich habe nächsten Samstagabend frei und komme sehr gern zur Feier."
    ],
    "rule": "With one shared subject, join the actions with und komme. Zur Feier uses the noun Feier. Zum Feiern uses the activity noun Feiern.",
    "example": "Ich habe Zeit und komme gern zum Essen.",
    "focus": "zur Feier",
    "mode": "sentence",
    "negative": "Ich habe nächsten Samstagabend frei und komme ich zur Feier.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "komme ich",
    "wrong": "Ich bin nächsten Samstagabend frei und komme ich sehr gern zur feiern.",
    "target": "Gemeinsames Subjekt bei koordinierten Verben und zur Feier",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "With one shared subject, join the actions with und komme. Zur Feier uses the noun Feier. Zum Feiern uses the activity noun Feiern."
  },
  {
    "id": 18,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Accept an invitation for this Sunday at midday.",
    "answer": "Ich habe am Sonntagmittag Zeit und komme gerne.",
    "variants": [
      "Am Sonntagmittag habe ich Zeit und komme gerne.",
      "Ich habe Sonntagmittag Zeit und komme gern.",
      "Am Sonntagmittag habe ich frei und komme gerne."
    ],
    "rule": "Am Sonntagmittag names a specific time. When both actions share ich, write und komme gerne. A second main clause can instead start und ich komme gerne.",
    "example": "Am Freitagabend habe ich frei und komme mit.",
    "focus": "komme",
    "mode": "sentence",
    "negative": "Am Sonntagmittag habe ich frei und komme ich gerne.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "komme ich",
    "wrong": "Ich habe am Sonntag mittags frei und komme ich gerne.",
    "target": "Gemeinsames Subjekt und Zeitangabe Sonntagmittag",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Am Sonntagmittag names a specific time. When both actions share ich, write und komme gerne. A second main clause can instead start und ich komme gerne."
  },
  {
    "id": 19,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Decline a proposed time if it does not suit the other person.",
    "answer": "wenn dir das nicht passt",
    "variants": [
      "wenn es dir nicht passt"
    ],
    "rule": "Nicht negates passen. Nichts means nothing. Use dir for the person affected: Der Termin passt dir nicht.",
    "example": "Wir können später anfangen, wenn dir die Zeit nicht passt.",
    "focus": "nicht",
    "mode": "sentence",
    "negative": "wenn dir das nichts passt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "wenn es passt nichts",
    "target": "Nicht und nichts bei passen unterscheiden",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Nicht negates passen. Nichts means nothing. Use dir for the person affected: Der Termin passt dir nicht."
  },
  {
    "id": 20,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Explain that every person may bring something.",
    "answer": "Das bedeutet, dass jeder etwas mitbringen kann.",
    "variants": [
      "Das heißt, dass jeder etwas mitbringen kann.",
      "Das bedeutet, jeder Mensch kann etwas mitbringen.",
      "Das bedeutet, dass jeder Mensch etwas mitbringen kann."
    ],
    "rule": "Jeder Mensch is the subject, so it uses nominative. In a dass clause the modal comes last: dass jeder etwas mitbringen kann.",
    "example": "Das bedeutet, dass jeder Gast etwas mitbringen darf.",
    "focus": "jeder",
    "mode": "sentence",
    "negative": "Das bedeutet, dass jeden Mensch etwas mitbringen kann.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "jeden Mensch",
    "wrong": "das bedeutet jeden Mensch kann was mitbringen",
    "target": "Jeder als Subjekt und Modalverb im Nebensatz",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Jeder Mensch is the subject, so it uses nominative. In a dass clause the modal comes last: dass jeder etwas mitbringen kann."
  },
  {
    "id": 21,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete an indirect yes/no question.",
    "answer": "ob er helfen kann",
    "variants": [
      "ob er mithelfen kann"
    ],
    "rule": "Ob introduces an indirect question. Er needs kann, not können. The infinitive helfen comes before kann.",
    "example": "Ich weiß nicht, ob er kommen kann.",
    "focus": "kann",
    "mode": "sentence",
    "negative": "ob er helfen könnt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "können",
    "wrong": "ob er helfen können",
    "target": "Ob-Satz mit helfen können",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Ob introduces an indirect question. Er needs kann, not können. The infinitive helfen comes before kann."
  },
  {
    "id": 22,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Express an opinion about where Julia lives.",
    "answer": "Ich finde, dass Julia in einer Stadt wohnt.",
    "variants": [
      "Ich denke, dass Julia in einer Stadt wohnt.",
      "Ich finde, Julia wohnt in einer Stadt."
    ],
    "rule": "Wohnen describes a location. Use in einer Stadt, and put wohnt last after dass. Compare Sie wohnt in Berlin.",
    "example": "Sie erzählt, dass sie in einem Dorf wohnt.",
    "focus": "in einer Stadt",
    "mode": "sentence",
    "negative": "Ich finde, dass Julia in eine Stadt wohnt.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "in ein Stadt",
    "wrong": "ich finde, dass Julia wohnt in ein Stadt",
    "target": "Ortsdativ und Verbendstellung bei wohnen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Wohnen describes a location. Use in einer Stadt, and put wohnt last after dass. Compare Sie wohnt in Berlin."
  },
  {
    "id": 23,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere eine Aussage über die Stadt.",
    "context": "Write a statement about the city. A direct question would have a different meaning.",
    "answer": "In der Stadt gibt es viele Geschäfte und Restaurants.",
    "variants": [
      "Es gibt in der Stadt viele Geschäfte und Restaurants.",
      "In der Stadt gibt es viele Restaurants und Geschäfte."
    ],
    "rule": "Es gibt introduces things that exist. After In der Stadt, put gibt before es. In a relative clause the order would be wo es viele Geschäfte gibt.",
    "example": "Im Zentrum gibt es einen Markt.",
    "focus": "gibt es",
    "mode": "sentence",
    "negative": "In der Stadt es gibt viele Geschäfte und Restaurants.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "wo gibt’s viele Geschäfte, Restaurants …",
    "target": "Es gibt im Hauptsatz",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Es gibt introduces things that exist. After In der Stadt, put gibt before es. In a relative clause the order would be wo es viele Geschäfte gibt."
  },
  {
    "id": 24,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete the condition about living in a large city.",
    "answer": "wenn du in einer Großstadt lebst",
    "variants": [
      "wenn du in einer großen Stadt lebst"
    ],
    "rule": "Du takes lebst. A stationary location uses the dative: in einer Großstadt. The finite verb comes last after wenn.",
    "example": "Ruf mich an, wenn du in Berlin bist.",
    "focus": "lebst",
    "mode": "sentence",
    "negative": "wenn du in einer Großstadt lebt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "lebt",
    "wrong": "wenn du in ein Großstadt lebt",
    "target": "Ortsdativ und du-Form im wenn-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Du takes lebst. A stationary location uses the dative: in einer Großstadt. The finite verb comes last after wenn."
  },
  {
    "id": 25,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Compare the noise level with someone's expectation.",
    "answer": "Normalerweise ist es nicht so laut, wie du denkst.",
    "variants": [
      "Es ist normalerweise nicht so laut, wie du denkst.",
      "Normalerweise ist es nicht so laut, wie du glaubst."
    ],
    "rule": "Use so … wie for a comparison of equality. The first clause also needs a subject: Es ist laut. The comparison is so laut, wie du denkst.",
    "example": "Der Weg ist nicht so lang, wie ich dachte.",
    "focus": "wie",
    "mode": "sentence",
    "negative": "Normalerweise ist nicht so laut, wie du denkst.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "was",
    "wrong": "Normalerweise ist nicht so laut, was du denkst.",
    "target": "Vergleich mit so … wie und unpersönlichem es",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use so … wie for a comparison of equality. The first clause also needs a subject: Es ist laut. The comparison is so laut, wie du denkst."
  },
  {
    "id": 26,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Make two statements about the weather and the snacks.",
    "answer": "Das Wetter wird schön, und wir bringen ein paar Snacks mit.",
    "variants": [
      "Das Wetter wird schön. Wir bringen ein paar Snacks mit.",
      "Das Wetter wird schön und wir bringen ein paar Snacks mit."
    ],
    "rule": "After und, a new statement can start with wir bringen. Bringen wir would normally start a yes/no question. A comma between the two full clauses is optional here.",
    "example": "Es wird kalt und ich nehme eine Jacke mit.",
    "focus": "wir bringen",
    "mode": "sentence",
    "negative": "Das Wetter wird schön und bringen wir Snacks mit.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "bringen wir",
    "wrong": "Das Wetter wird schön und bringen wir ein paar Snacks mit.",
    "target": "Aussagesätze mit und verknüpfen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "After und, a new statement can start with wir bringen. Bringen wir would normally start a yes/no question. A comma between the two full clauses is optional here."
  },
  {
    "id": 27,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask whether a friend knows about the teacher's birthday.",
    "answer": "Weißt du, dass unsere Deutschlehrerin Hannah nächsten Dienstag Geburtstag hat?",
    "variants": [
      "Weißt du, dass Hannah nächsten Dienstag Geburtstag hat?",
      "Weißt du, dass unsere Deutschlehrerin Hannah nächste Woche am Dienstag Geburtstag hat?"
    ],
    "rule": "The main question starts with Weißt du. In the dass clause, hat comes last. Nächsten Dienstag and nächste Woche am Dienstag can name the same day.",
    "example": "Weißt du, dass Anna morgen frei hat?",
    "focus": "hat",
    "mode": "sentence",
    "negative": "Weißt du, dass Hannah hat nächsten Dienstag Geburtstag?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "hat Geburtstag",
    "wrong": "Weißt du, dass nächste Woche am Dienstag unsere Deutschlehrerin Hannah hat Geburtstag?",
    "target": "Geburtstag haben im dass-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The main question starts with Weißt du. In the dass clause, hat comes last. Nächsten Dienstag and nächste Woche am Dienstag can name the same day."
  },
  {
    "id": 28,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Suggest a small celebration after class.",
    "answer": "Vielleicht können wir nach dem Unterricht eine kleine Feier machen.",
    "variants": [
      "Wir können vielleicht nach dem Unterricht eine kleine Feier machen.",
      "Vielleicht können wir nach dem Unterricht eine kleine Feier organisieren.",
      "Nach dem Unterricht könnten wir eine kleine Feier machen."
    ],
    "rule": "Vielleicht can fill the first position by itself. The finite modal comes next and the activity verb goes at the end: Vielleicht können wir feiern.",
    "example": "Vielleicht können wir einen Tisch reservieren.",
    "focus": "können wir",
    "mode": "sentence",
    "negative": "Vielleicht wir können nach dem Unterricht feiern.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir können",
    "wrong": "vielleicht wir können nach dem Unterricht ... eine kleine Feier machen",
    "target": "Verbzweitstellung nach vielleicht",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Vielleicht can fill the first position by itself. The finite modal comes next and the activity verb goes at the end: Vielleicht können wir feiern."
  },
  {
    "id": 29,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete the question Ich weiß noch nicht, …",
    "answer": "wo wir eine kleine Party machen können",
    "variants": [
      "wo wir eine kleine Feier organisieren können",
      "wo wir eine kleine Party feiern können"
    ],
    "rule": "Inside an indirect question, wo does not trigger question order. Use wo wir feiern können. The modal closes the clause.",
    "example": "Ich frage mich, wo wir essen können.",
    "focus": "machen können",
    "mode": "sentence",
    "negative": "wo können wir eine kleine Party machen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir können",
    "wrong": "wo wir können eine kleine Party machen",
    "target": "Indirekter Fragesatz mit wo und Modalverb",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Inside an indirect question, wo does not trigger question order. Use wo wir feiern können. The modal closes the clause."
  },
  {
    "id": 30,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Suggest bringing one small cake.",
    "answer": "Vielleicht können wir einen kleinen Kuchen mitbringen.",
    "variants": [
      "Wir können vielleicht einen kleinen Kuchen mitbringen.",
      "Vielleicht bringen wir einen kleinen Kuchen mit."
    ],
    "rule": "Kuchen is masculine. As the object of mitbringen it needs einen kleinen Kuchen. After Vielleicht comes können.",
    "example": "Vielleicht kaufe ich einen kleinen Salat.",
    "focus": "einen kleinen Kuchen",
    "mode": "sentence",
    "negative": "Vielleicht können wir ein kleiner Kuchen mitbringen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "eine kleine Kuchen",
    "wrong": "Vielleicht wir können eine kleine Kuchen mitbringen.",
    "target": "Vielleicht und maskulines Akkusativobjekt",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Kuchen is masculine. As the object of mitbringen it needs einen kleinen Kuchen. After Vielleicht comes können."
  },
  {
    "id": 31,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Recall one specific past excursion.",
    "answer": "als wir auf einer Exkursion waren",
    "variants": [
      "als wir einen Ausflug gemacht haben"
    ],
    "rule": "Als introduces a single past occasion. Wir needs waren. Auf einer Exkursion describes being on an excursion.",
    "example": "Als wir im Museum waren, hat es geregnet.",
    "focus": "als",
    "mode": "sentence",
    "negative": "als wir auf einer Exkursion war",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir in einem Exkursion war",
    "wrong": "wenn wir in einem Exkursion war",
    "target": "Einmaliges vergangenes Ereignis mit als",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Als introduces a single past occasion. Wir needs waren. Auf einer Exkursion describes being on an excursion."
  },
  {
    "id": 32,
    "category": "Satzstellung & Nebensätze",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say what you can organise next week.",
    "answer": "Dann können wir nächste Woche alles organisieren.",
    "variants": [
      "Nächste Woche können wir dann alles organisieren.",
      "Wir können dann nächste Woche alles organisieren."
    ],
    "rule": "Dann takes the first position and können the second. Nächste Woche works without an article as a time expression.",
    "example": "Dann können wir den Termin festlegen.",
    "focus": "können wir",
    "mode": "sentence",
    "negative": "Dann wir können nächste Woche alles organisieren.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir können",
    "wrong": "dann wir können die nächste Woche alles organisieren",
    "target": "Verbzweitstellung nach dann",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Dann takes the first position and können the second. Nächste Woche works without an article as a time expression."
  },
  {
    "id": 33,
    "category": "Satzstellung & Nebensätze",
    "task": "Ordne die Wörter im wenn-Satz.",
    "context": "Use neutral written word order. The price must suit everyone.",
    "answer": "wenn es für alle nicht so teuer ist",
    "variants": [
      "wenn es für alle nicht zu teuer ist"
    ],
    "rule": "Place für alle inside the wenn clause before the final verb. A phrase added after ist can sound like a spoken afterthought.",
    "example": "Ich komme mit, wenn das für dich in Ordnung ist.",
    "focus": "für alle",
    "mode": "sentence",
    "negative": "wenn es für alle nicht so teuer sind",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "wenn ... nicht so teuer ist für alle",
    "target": "Neutrale Wortstellung im wenn-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Place für alle inside the wenn clause before the final verb. A phrase added after ist can sound like a spoken afterthought."
  },
  {
    "id": 34,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Erzähle im Perfekt.",
    "context": "Tell a friend what happened yesterday. Use the conversational perfect.",
    "answer": "Gestern haben wir eine Grillparty gemacht.",
    "variants": [
      "Gestern haben wir eine Grillfeier gemacht.",
      "Gestern haben wir gegrillt.",
      "Gestern haben wir eine Grillparty veranstaltet."
    ],
    "rule": "The perfect of machen uses haben: Wir haben eine Feier gemacht. Hatten gemacht puts the event before another past event. Party needs an article here.",
    "example": "Gestern haben wir ein Fest organisiert.",
    "focus": "haben",
    "mode": "sentence",
    "negative": "Gestern sind wir eine Grillparty gemacht.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Gestern hatten wir Grillparty gemacht.",
    "target": "Abgeschlossenes Ereignis im Perfekt",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "The perfect of machen uses haben: Wir haben eine Feier gemacht. Hatten gemacht puts the event before another past event. Party needs an article here."
  },
  {
    "id": 35,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Tell a friend about playing cards and enjoying it.",
    "answer": "Wir haben Kartenspiele gespielt. Das hat viel Spaß gemacht.",
    "variants": [
      "Wir haben zusammen Kartenspiele gespielt. Das hat viel Spaß gemacht.",
      "Wir haben Karten gespielt. Das hat Spaß gemacht."
    ],
    "rule": "Spielen forms the perfect with haben. The expression Spaß machen needs a subject: Das hat Spaß gemacht. Name the game as Karten or Kartenspiele.",
    "example": "Wir haben Schach gespielt. Das hat Spaß gemacht.",
    "focus": "Spaß",
    "mode": "sentence",
    "negative": "Wir haben Karten gespielt. Das haben Spaß gemacht.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "spiel spaß",
    "wrong": "spiel spaß gemacht über Kartenspiele gespielt",
    "target": "Kartenspielen und Spaß haben beschreiben",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Spielen forms the perfect with haben. The expression Spaß machen needs a subject: Das hat Spaß gemacht. Name the game as Karten or Kartenspiele."
  },
  {
    "id": 36,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Explain why you learn German.",
    "answer": "Ich lerne gern Deutsch, weil ich in Deutschland leben möchte.",
    "variants": [
      "Ich lerne gerne Deutsch, weil ich in Deutschland leben möchte.",
      "Ich lerne gern Deutsch, weil ich in Deutschland wohnen möchte."
    ],
    "rule": "With ich, use möchte. Leben stays in the infinitive before möchte at the end of the weil clause. Compare weil wir hier leben möchten.",
    "example": "Ich übe, weil ich die Prüfung bestehen möchte.",
    "focus": "möchte",
    "mode": "sentence",
    "negative": "Ich lerne gern Deutsch, weil ich in Deutschland leben möchtest.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "möchten",
    "wrong": "Ich lerne gerne Deutsch, weil ich in Deutschland leben möchten.",
    "target": "Ich-Form möchte im Begründungssatz",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "With ich, use möchte. Leben stays in the infinitive before möchte at the end of the weil clause. Compare weil wir hier leben möchten."
  },
  {
    "id": 37,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Sage für morgen ab.",
    "context": "Tomorrow you must work. Decline an invitation for tomorrow.",
    "answer": "Leider habe ich morgen keine Zeit, weil ich arbeiten muss.",
    "variants": [
      "Morgen habe ich leider keine Zeit, weil ich arbeiten muss.",
      "Leider habe ich keine Zeit, weil ich morgen arbeiten muss.",
      "Leider habe ich keine Zeit, weil ich arbeiten muss."
    ],
    "rule": "For a future appointment, present-tense habe and muss work with morgen. Hatte describes past availability instead. A past reason can use weil ich arbeiten musste.",
    "example": "Morgen kann ich nicht, weil ich Dienst habe.",
    "focus": "habe",
    "mode": "sentence",
    "negative": "Leider ich habe morgen keine Zeit, weil ich arbeiten muss.",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Leider hatte ich keine Zeit, weil ich arbeiten muss.",
    "target": "Fehlende Zeit für eine bevorstehende Einladung",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "For a future appointment, present-tense habe and muss work with morgen. Hatte describes past availability instead. A past reason can use weil ich arbeiten musste."
  },
  {
    "id": 38,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Congratulate one friend on finding a flat.",
    "answer": "dass du endlich eine neue Wohnung gefunden hast",
    "variants": [],
    "rule": "Du needs hast. In this perfect-tense dass clause, gefunden comes before hast. Compare Du hast eine Wohnung gefunden.",
    "example": "Ich freue mich, dass du Zeit gefunden hast.",
    "focus": "hast",
    "mode": "sentence",
    "negative": "dass du endlich eine neue Wohnung gefunden habt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "gefunden hat",
    "wrong": "dass du endlich eine neue Wohnung gefunden hat",
    "target": "Du-Form des Hilfsverbs im Perfekt",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Du needs hast. In this perfect-tense dass clause, gefunden comes before hast. Compare Du hast eine Wohnung gefunden."
  },
  {
    "id": 39,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Schreibe den Satzanfang richtig.",
    "context": "Begin a message to one friend. Stop after the time phrase.",
    "answer": "Du möchtest nächsten Monat",
    "variants": [
      "Du möchtest nächsten Monat …",
      "Du möchtest nächsten Monat ..."
    ],
    "rule": "The du form is möchtest. Möchtet belongs to ihr. Compare Du möchtest verreisen and Ihr möchtet verreisen.",
    "example": "Du möchtest helfen. Ihr möchtet helfen.",
    "focus": "möchtest",
    "mode": "sentence",
    "negative": "Du möchtet kommenden Monat",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Du möchtet nächsten Monat ...",
    "target": "Du möchtest gegenüber ihr möchtet",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [
      {
        "form": "Du möchte nächsten Monat",
        "span": "möchte",
        "hint": "With du, use möchtest."
      }
    ],
    "hint": "The du form is möchtest. Möchtet belongs to ihr. Compare Du möchtest verreisen and Ihr möchtet verreisen."
  },
  {
    "id": 40,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete an offer to one friend.",
    "answer": "falls du etwas brauchst",
    "variants": [
      "falls du etwas benötigst"
    ],
    "rule": "Falls introduces a condition. Brauchen must agree with du: falls du Hilfe brauchst. The verb goes last.",
    "example": "Melde dich, falls du Unterstützung brauchst.",
    "focus": "brauchst",
    "mode": "sentence",
    "negative": "falls du etwas braucht",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "du etwas brauchen",
    "wrong": "falls du etwas brauchen",
    "target": "Du-Form im Konditionalsatz mit falls",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Falls introduces a condition. Brauchen must agree with du: falls du Hilfe brauchst. The verb goes last."
  },
  {
    "id": 41,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Give a friend's birthday as a reason.",
    "answer": "weil du Geburtstag hast",
    "variants": [
      "weil du heute Geburtstag hast"
    ],
    "rule": "Say Geburtstag haben. With du, haben becomes hast. Weil puts it at the end: weil du Geburtstag hast.",
    "example": "Ich gratuliere dir, weil du heute Geburtstag hast.",
    "focus": "hast",
    "mode": "sentence",
    "negative": "weil du Geburtstag habt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "du haben",
    "wrong": "weil du haben Geburtstag",
    "target": "Geburtstag haben und du-Form im weil-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Say Geburtstag haben. With du, haben becomes hast. Weil puts it at the end: weil du Geburtstag hast."
  },
  {
    "id": 42,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask Alex if he can help.",
    "answer": "Ich frage Alex, ob er helfen kann.",
    "variants": [
      "Ich frage Alex, ob er mithelfen kann."
    ],
    "rule": "The question Kann er helfen? becomes ob er helfen kann inside another sentence. Use a comma before ob.",
    "example": "Ich frage sie, ob sie morgen kommen kann.",
    "focus": "helfen kann",
    "mode": "sentence",
    "negative": "Ich frage Alex, ob er kann helfen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "er helfen können",
    "wrong": "Ich frage Alex, ob er helfen können.",
    "target": "Indirekte Ja-Nein-Frage mit ob",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "The question Kann er helfen? becomes ob er helfen kann inside another sentence. Use a comma before ob."
  },
  {
    "id": 43,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe two museums.",
    "answer": "Es gibt zwei tolle Museen.",
    "variants": [
      "Es gibt zwei schöne Museen.",
      "Es gibt zwei besonders tolle Museen."
    ],
    "rule": "Use es gibt once, without an extra s. The plural of Museum is Museen. Before that plural without an article, use tolle.",
    "example": "In Berlin gibt es viele Museen.",
    "focus": "Museen",
    "mode": "sentence",
    "negative": "Es gibt zwei tolle Museums.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Museums",
    "wrong": "Es gibts zwei Tolle Museums.",
    "target": "Es gibt und Plural von Museum",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use es gibt once, without an extra s. The plural of Museum is Museen. Before that plural without an article, use tolle."
  },
  {
    "id": 44,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe sheltered places in the park.",
    "answer": "Im Park gibt es ein paar überdachte Plätze.",
    "variants": [
      "Es gibt im Park ein paar überdachte Plätze.",
      "Im Park gibt es ein paar Dächer."
    ],
    "rule": "Use es gibt, or gibt es after Im Park. Several roofs are Dächer. If you mean places with cover, say überdachte Plätze.",
    "example": "Unter den Dächern bleiben wir trocken.",
    "focus": "überdachte Plätze",
    "mode": "sentence",
    "negative": "Im Park gibts es ein paar überdachte Plätze.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "es gibts ein paar Dach im Park",
    "target": "Es gibt und Plural bei Orten mit Wetterschutz",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use es gibt, or gibt es after Im Park. Several roofs are Dächer. If you mean places with cover, say überdachte Plätze."
  },
  {
    "id": 45,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete a condition about rain.",
    "answer": "wenn es regnet",
    "variants": [
      "wenn es regnen sollte"
    ],
    "rule": "The weather verb needs es and the singular ending: Es regnet. In a wenn clause, keep the verb at the end.",
    "example": "Wir bleiben hier, wenn es schneit.",
    "focus": "regnet",
    "mode": "sentence",
    "negative": "wenn es regnen würde sein",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "es regnen",
    "wrong": "wenn es regnen",
    "target": "Unpersönliches regnen im wenn-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The weather verb needs es and the singular ending: Es regnet. In a wenn clause, keep the verb at the end."
  },
  {
    "id": 46,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Begründe die Absage im Präteritum.",
    "context": "Both the missed visit and the one-off work shift were yesterday.",
    "answer": "Gestern konnte ich nicht kommen, weil ich arbeiten musste.",
    "variants": [
      "Weil ich arbeiten musste, konnte ich gestern nicht kommen.",
      "Leider konnte ich gestern nicht kommen, weil ich arbeiten musste."
    ],
    "rule": "Konnte and musste both refer to yesterday here. Muss can describe an obligation that still holds, but this exercise describes a finished shift.",
    "example": "Ich habe gefehlt, weil ich zum Arzt musste.",
    "focus": "musste",
    "mode": "sentence",
    "negative": "Gestern konnte ich nicht kommen, weil ich arbeiten mussten.",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Gestern konnte ich nicht kommen, weil ich arbeiten muss.",
    "target": "Abgeschlossene Arbeitspflicht in der Vergangenheit",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Konnte and musste both refer to yesterday here. Muss can describe an obligation that still holds, but this exercise describes a finished shift."
  },
  {
    "id": 47,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Sage für morgen ab.",
    "context": "Reply to an invitation for tomorrow. Work prevents you from coming.",
    "answer": "Leider kann ich nicht kommen, weil ich arbeiten muss.",
    "variants": [
      "Ich kann leider nicht kommen, weil ich arbeiten muss.",
      "Leider kann ich morgen nicht kommen, weil ich arbeiten muss."
    ],
    "rule": "Use kann for your availability and muss for your obligation. Konnte fits a missed visit. A future time word can make the intended meaning explicit.",
    "example": "Leider kann ich morgen nicht mitfahren.",
    "focus": "kann",
    "mode": "sentence",
    "negative": "Leider kann ich nicht kommen, weil ich arbeiten müssen.",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Leider konnte ich nicht kommen, weil ich arbeiten muss.",
    "target": "Absage wegen einer bevorstehenden Arbeitspflicht",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use kann for your availability and muss for your obligation. Konnte fits a missed visit. A future time word can make the intended meaning explicit."
  },
  {
    "id": 48,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Tell someone that their proposed help would be valuable.",
    "answer": "Das wäre eine große Hilfe.",
    "variants": [
      "Es wäre eine große Hilfe.",
      "Das würde eine große Hilfe sein."
    ],
    "rule": "Use wäre for a hypothetical result. That would help is Das würde helfen. Das wäre eine große Hilfe uses the noun Hilfe.",
    "example": "Deine Hilfe wäre sehr nett.",
    "focus": "wäre",
    "mode": "sentence",
    "negative": "Es wären eine große Hilfe.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "werde",
    "wrong": "Es werde eine große Hilfe sein.",
    "target": "Hypothetische Hilfe mit wäre",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use wäre for a hypothetical result. That would help is Das würde helfen. Das wäre eine große Hilfe uses the noun Hilfe."
  },
  {
    "id": 49,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Greet an adult you address formally.",
    "answer": "Ich hoffe, es geht Ihnen gut.",
    "variants": [
      "Ich hoffe, dass es Ihnen gut geht.",
      "Ich hoffe, Ihnen geht es gut.",
      "Ich hoffe, Ihnen geht’s gut."
    ],
    "rule": "In Wie geht es Ihnen?, es is the subject and Ihnen is the formal dative. After Ich hoffe, use statement order or a dass clause.",
    "example": "Ich hoffe, es geht dir gut.",
    "focus": "Ihnen",
    "mode": "sentence",
    "negative": "Ich hoffe, es geht Sie gut.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "geht gut",
    "wrong": "Ich hoffe ihnen geht gut.",
    "target": "Formelle Anrede und Dativ bei es geht",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "In Wie geht es Ihnen?, es is the subject and Ihnen is the formal dative. After Ich hoffe, use statement order or a dass clause."
  },
  {
    "id": 50,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that you moved house.",
    "answer": "Ich bin umgezogen.",
    "variants": [
      "Ich bin in eine andere Wohnung umgezogen."
    ],
    "rule": "When umziehen means move house, use sein in the perfect: Wir sind umgezogen. Changing clothes instead is sich umziehen: Ich habe mich umgezogen.",
    "example": "Wir sind letztes Jahr nach Köln umgezogen.",
    "focus": "bin",
    "mode": "sentence",
    "negative": "Ich hat umgezogen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "habe",
    "wrong": "Ich habe umgezogen.",
    "target": "Perfekt von umziehen beim Wohnungswechsel",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "When umziehen means move house, use sein in the perfect: Wir sind umgezogen. Changing clothes instead is sich umziehen: Ich habe mich umgezogen."
  },
  {
    "id": 51,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say when you moved into your flat.",
    "answer": "Ich bin vor sechs Monaten in meine Wohnung umgezogen.",
    "variants": [
      "Vor sechs Monaten bin ich in meine Wohnung umgezogen.",
      "Vor 6 Monaten bin ich in meine Wohnung umgezogen."
    ],
    "rule": "The move has a destination, so use in meine Wohnung. In meiner Wohnung describes a location. The perfect is bin umgezogen.",
    "example": "Wir sind in ein neues Haus gezogen.",
    "focus": "in meine Wohnung",
    "mode": "sentence",
    "negative": "Ich bin vor sechs Monaten in meiner Wohnung umziehen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "habe",
    "wrong": "Ich habe vor 6 Monaten in meiner Wohnung umgezogen.",
    "target": "Zielakkusativ und Perfekt beim Wohnungswechsel",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "The move has a destination, so use in meine Wohnung. In meiner Wohnung describes a location. The perfect is bin umgezogen."
  },
  {
    "id": 52,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Report a visit to the doctor.",
    "answer": "Ich bin am Montag zum Arzt gegangen.",
    "variants": [
      "Am Montag bin ich zum Arzt gegangen."
    ],
    "rule": "Gehen takes sein in the perfect. Zu takes the dative: zum Arzt means zu dem Arzt. Spell the noun Arzt.",
    "example": "Sie ist gestern zur Ärztin gegangen.",
    "focus": "zum Arzt",
    "mode": "sentence",
    "negative": "Am Montag habe ich zum Arzt gegangen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Artz",
    "wrong": "Ich habe am Montag zur Artz gegangen.",
    "target": "Perfekt von gehen und zum Arzt",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Gehen takes sein in the perfect. Zu takes the dative: zum Arzt means zu dem Arzt. Spell the noun Arzt."
  },
  {
    "id": 53,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that you read Julia's opinion card.",
    "answer": "Ich habe die Meinungskarte von Julia gelesen.",
    "variants": [
      "Ich habe Julias Meinungskarte gelesen.",
      "Die Meinungskarte von Julia habe ich gelesen."
    ],
    "rule": "One perfect-tense clause has one finite auxiliary. Use Ich habe … gelesen. Julias can replace von Julia without an apostrophe.",
    "example": "Den Brief habe ich schon gelesen.",
    "focus": "gelesen",
    "mode": "sentence",
    "negative": "Ich habe Julias Meinungskarte gelesen hat.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "gelesen hat",
    "wrong": "ich habe die Meinungskarte von Julia gelesen hat",
    "target": "Perfekt ohne doppeltes Hilfsverb",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "One perfect-tense clause has one finite auxiliary. Use Ich habe … gelesen. Julias can replace von Julia without an apostrophe."
  },
  {
    "id": 54,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "One woman can reach nearly everywhere by public transport.",
    "answer": "weil sie fast überall mit dem Bus oder der Bahn hinkommt",
    "variants": [
      "weil sie mit dem Bus oder der Bahn fast überall hinkommt"
    ],
    "rule": "Sie meaning one woman needs hinkommt. Mit takes dative in both alternatives: mit dem Bus oder der Bahn.",
    "example": "Sie sagt, dass sie mit der Bahn nach Hause kommt.",
    "focus": "hinkommt",
    "mode": "sentence",
    "negative": "weil sie fast überall mit dem Bus oder die Bahn hinkommt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "oder Bahn",
    "wrong": "weil sie fast überall mit dem Bus oder Bahn hinkommen",
    "target": "Singuläres sie und Dativ bei Verkehrsmitteln",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Sie meaning one woman needs hinkommt. Mit takes dative in both alternatives: mit dem Bus oder der Bahn."
  },
  {
    "id": 55,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere einen vollständigen Aussagesatz.",
    "context": "Make a complete statement meaning “I read that”.",
    "answer": "Das habe ich gelesen.",
    "variants": [
      "Ich habe das gelesen."
    ],
    "rule": "Das can stand alone as the object. Use one finite auxiliary: Das habe ich gelesen. Was ich gelesen habe is a dependent phrase.",
    "example": "Das habe ich gestern gehört.",
    "focus": "gelesen",
    "mode": "sentence",
    "negative": "Das habe ich gelesen hat.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "das, was habe ich gelesen hat",
    "target": "Aussagesatz mit vorangestelltem das im Perfekt",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Das can stand alone as the object. Use one finite auxiliary: Das habe ich gelesen. Was ich gelesen habe is a dependent phrase."
  },
  {
    "id": 56,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "You moved here seven years ago and still live here.",
    "answer": "Ich lebe seit sieben Jahren in Deutschland.",
    "variants": [
      "Seit sieben Jahren lebe ich in Deutschland.",
      "Ich lebe schon seit sieben Jahren in Deutschland."
    ],
    "rule": "For a situation continuing until now, use the present with seit. Seit takes dative: seit einem Jahr, seit sieben Jahren.",
    "example": "Ich arbeite seit drei Monaten hier.",
    "focus": "lebe",
    "mode": "sentence",
    "negative": "Seit sieben Jahren ich lebe in Deutschland.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "ich habe in Deutschland seit sieben Jahren schon gelebt",
    "target": "Fortdauernde Situation mit seit und Präsens",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "For a situation continuing until now, use the present with seit. Seit takes dative: seit einem Jahr, seit sieben Jahren."
  },
  {
    "id": 57,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Use the perfect to summarise past places of residence: only big cities.",
    "answer": "Ich habe bisher nur in Großstädten gelebt.",
    "variants": [
      "Bisher habe ich nur in Großstädten gelebt.",
      "Ich habe nur in Großstädten gelebt."
    ],
    "rule": "Gelebt is the participle of leben. Use one auxiliary, habe. In Großstädten is dative plural for location.",
    "example": "Wir haben früher auf dem Land gelebt.",
    "focus": "gelebt",
    "mode": "sentence",
    "negative": "Ich habe bisher nur in Großstädten geleben.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "geleben",
    "wrong": "ich habe nur in Großstadt geleben hat",
    "target": "Perfekt von leben und Ortsdativ im Plural",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Gelebt is the participle of leben. Use one auxiliary, habe. In Großstädten is dative plural for location."
  },
  {
    "id": 58,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Sage, dass dir die Idee vorher nicht gekommen ist.",
    "context": "Say that an idea had not occurred to you before.",
    "answer": "Daran habe ich noch nicht gedacht.",
    "variants": [
      "Ich habe darüber noch nicht nachgedacht.",
      "Darüber habe ich noch nicht nachgedacht.",
      "Das ist mir noch nicht eingefallen."
    ],
    "rule": "Über etwas nachdenken means think about something. Darüber refers back to the idea. The perfect uses nachgedacht. Das habe ich nicht gedacht can instead express surprise.",
    "example": "An diese Möglichkeit habe ich noch nicht gedacht.",
    "focus": "gedacht",
    "mode": "sentence",
    "negative": "Darüber ich habe noch nicht nachgedacht.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "das hab ich nicht gedacht habe",
    "target": "Über etwas nachdenken oder an etwas denken",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Über etwas nachdenken means think about something. Darüber refers back to the idea. The perfect uses nachgedacht. Das habe ich nicht gedacht can instead express surprise."
  },
  {
    "id": 59,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Imagine your own old age.",
    "answer": "wenn ich alt bin",
    "variants": [
      "wenn ich einmal alt bin"
    ],
    "rule": "Sein changes with the subject. With ich use bin, with du use bist. After wenn the verb comes last.",
    "example": "Wenn ich älter bin, möchte ich mehr reisen.",
    "focus": "bin",
    "mode": "sentence",
    "negative": "wenn ich alt bist",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "bis",
    "wrong": "wenn ich alt bis",
    "target": "Ich-Form von sein im wenn-Satz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Sein changes with the subject. With ich use bin, with du use bist. After wenn the verb comes last."
  },
  {
    "id": 60,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Berichte von der Ankündigung.",
    "context": "One woman spoke last week or the week before. Her birthday is next week.",
    "answer": "Sie hat letzte oder vorletzte Woche gesagt, dass sie nächste Woche Geburtstag hat.",
    "variants": [
      "Letzte oder vorletzte Woche hat sie gesagt, dass sie nächste Woche Geburtstag hat."
    ],
    "rule": "For one woman, use sie hat. Vorletzte Woche means the week before last. In reported information with dass, hat goes last.",
    "example": "Sie hat gesagt, dass der Kurs bald beginnt.",
    "focus": "vorletzte",
    "mode": "sentence",
    "negative": "Sie hat letzte Woche gesagt, dass sie hat nächste Woche Geburtstag.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "sie hatten letzte oder überletzte Woche gesagt, dass sie hatten Geburtstag",
    "target": "Vergangene Mitteilung und künftigen Geburtstag trennen",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "For one woman, use sie hat. Vorletzte Woche means the week before last. In reported information with dass, hat goes last."
  },
  {
    "id": 61,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete a condition about the end of your class.",
    "answer": "wenn unser Unterricht vorbei ist",
    "variants": [
      "wenn wir mit dem Unterricht fertig sind"
    ],
    "rule": "Unterricht is singular and takes ist. If wir is the subject, use sind: wenn wir mit dem Unterricht fertig sind.",
    "example": "Wir gehen, wenn der Kurs zu Ende ist.",
    "focus": "Unterricht",
    "mode": "sentence",
    "negative": "wenn unser Unterricht vorbei sind",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die Unterricht",
    "wrong": "wenn wir die Unterricht fertig ist",
    "target": "Beendeten Unterricht als Bedingung formulieren",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Unterricht is singular and takes ist. If wir is the subject, use sind: wenn wir mit dem Unterricht fertig sind."
  },
  {
    "id": 62,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Schreibe den Satz im Präsens.",
    "context": "Say what you do now, in the present.",
    "answer": "wir gehen nach Hause",
    "variants": [
      "Jetzt gehen wir nach Hause."
    ],
    "rule": "Gehen can be the finite verb: wir gehen. For a completed journey use sind gegangen. Sind plus the bare infinitive does not form the perfect.",
    "example": "Jetzt fahre ich nach Hause.",
    "focus": "gehen",
    "mode": "sentence",
    "negative": "Wir sind jetzt nach Hause gehen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "wir sind nach Hause gehen",
    "target": "Nach Hause gehen im Präsens",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Gehen can be the finite verb: wir gehen. For a completed journey use sind gegangen. Sind plus the bare infinitive does not form the perfect."
  },
  {
    "id": 63,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Frage nach der Vorbereitung für morgen.",
    "context": "Rephrase the past question for a planning meeting about tomorrow.",
    "answer": "Was müssen wir vorbereiten?",
    "variants": [
      "Was sollen wir vorbereiten?",
      "Was müssen wir für morgen vorbereiten?",
      "Was müssen wir morgen vorbereiten?"
    ],
    "rule": "Mussten asks about a past duty and is correct for that meaning. For an upcoming task use müssen. For advice or instructions, sollen is also possible.",
    "example": "Was müssen wir morgen mitbringen?",
    "focus": "müssen",
    "mode": "sentence",
    "negative": "Was muss wir vorbereiten?",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Was mussten wir vorbereiten?",
    "target": "Eine Vergangenheitsfrage zur Planungsfrage umformen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Mussten asks about a past duty and is correct for that meaning. For an upcoming task use müssen. For advice or instructions, sollen is also possible."
  },
  {
    "id": 64,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Erzähle im Perfekt.",
    "context": "Tell someone about taking one selfie. Use the perfect.",
    "answer": "Wir haben ein Selfie gemacht.",
    "variants": [
      "Wir haben zusammen ein Selfie gemacht.",
      "Wir haben ein Selfie aufgenommen."
    ],
    "rule": "Selfie takes das, so say ein Selfie. In the perfect, machen uses haben. Hatten gemacht needs a past reference point.",
    "example": "Heute haben wir ein Foto gemacht.",
    "focus": "ein Selfie",
    "mode": "sentence",
    "negative": "Wir haben eine Selfie aufgenommen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Wir hatten eine Selfie gemacht.",
    "target": "Neutrum Selfie und Perfekt von machen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Selfie takes das, so say ein Selfie. In the perfect, machen uses haben. Hatten gemacht needs a past reference point."
  },
  {
    "id": 65,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask a friend about their duties in one new job.",
    "answer": "Was genau machst du in deinem neuen Job?",
    "variants": [
      "Was machst du genau in deinem neuen Job?",
      "Was machst du in deinem neuen Job genau?"
    ],
    "rule": "Job is masculine. Here in describes a setting, so use dative deinem. After deinem the adjective ends in -en: deinem neuen Job.",
    "example": "Was gefällt dir an deinem neuen Arbeitsplatz?",
    "focus": "deinem neuen Job",
    "mode": "sentence",
    "negative": "Was genau machst du in deinen neuen Job?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "deiner neuen Job",
    "wrong": "Was genau machst du in deiner neuen Job?",
    "target": "Dativ und Adjektivendung bei Job",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Job is masculine. Here in describes a setting, so use dative deinem. After deinem the adjective ends in -en: deinem neuen Job."
  },
  {
    "id": 66,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask how your friend found the job.",
    "answer": "Wie hast du den Job gefunden?",
    "variants": [
      "Wie hast du diese Stelle gefunden?"
    ],
    "rule": "Finden takes an accusative object. Der Job becomes den Job. Das Angebot would keep das.",
    "example": "Ich habe den Arbeitsplatz im Internet gefunden.",
    "focus": "den Job",
    "mode": "sentence",
    "negative": "Wie hast du der Job gefunden?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die Job",
    "wrong": "Wie hast du die Job gefunden?",
    "target": "Maskulines Akkusativobjekt nach finden",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Finden takes an accusative object. Der Job becomes den Job. Das Angebot would keep das."
  },
  {
    "id": 67,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "You still work at the same place and feel happy.",
    "answer": "Ich arbeite noch an meiner alten Arbeitsstelle und bin glücklich.",
    "variants": [
      "Ich arbeite noch an meiner bisherigen Arbeitsstelle und bin glücklich.",
      "Ich arbeite noch an meiner alten Arbeitsstelle und bin zufrieden."
    ],
    "rule": "An meiner alten Arbeitsstelle uses dative for a location. Glück is a noun. To describe how you feel use the adjective glücklich or zufrieden.",
    "example": "An meiner alten Schule war ich glücklich.",
    "focus": "glücklich",
    "mode": "sentence",
    "negative": "Ich arbeite noch an meiner alte Arbeitsstelle und bin glücklich.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "alte arbeitstelle",
    "wrong": "Ich bin noch in meinem alte arbeitstelle und bin glück.",
    "target": "Arbeitsstelle im Ortsdativ und prädikatives glücklich",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "An meiner alten Arbeitsstelle uses dative for a location. Glück is a noun. To describe how you feel use the adjective glücklich or zufrieden."
  },
  {
    "id": 68,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Name several leisure opportunities.",
    "answer": "viele Freizeitmöglichkeiten",
    "variants": [
      "viele Möglichkeiten für die Freizeit"
    ],
    "rule": "Viele needs a plural count noun. Möglichkeit becomes Möglichkeiten. The compound keeps that ending: Freizeitmöglichkeiten.",
    "example": "Die Stadt bietet viele Möglichkeiten.",
    "focus": "Freizeitmöglichkeiten",
    "mode": "sentence",
    "negative": "viele Freizeitmöglichkeite",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Freizeitmöglichkeit",
    "wrong": "viele Freizeitmöglichkeit",
    "target": "Plural von Freizeitmöglichkeit nach viele",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Viele needs a plural count noun. Möglichkeit becomes Möglichkeiten. The compound keeps that ending: Freizeitmöglichkeiten."
  },
  {
    "id": 69,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Ergänze: Das ist …",
    "context": "Complete Das ist … with one restaurant.",
    "answer": "ein Restaurant",
    "variants": [
      "Das ist ein Restaurant."
    ],
    "rule": "Restaurant is neuter. In Das ist ein Restaurant, use ein. Einen belongs to masculine accusative nouns such as einen Tisch.",
    "example": "Das ist ein kleines Café.",
    "focus": "ein Restaurant",
    "mode": "sentence",
    "negative": "eine Restaurant",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "einen Restaurant",
    "target": "Genus von Restaurant im Nominativ",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [
      {
        "form": "einen Restaurant",
        "span": "einen",
        "hint": "Das ist names the place. Restaurant takes das, so say ein Restaurant."
      },
      {
        "form": "Das ist einen Restaurant.",
        "span": "einen",
        "hint": "After Das ist, use ein with Restaurant."
      }
    ],
    "hint": "Restaurant is neuter. In Das ist ein Restaurant, use ein. Einen belongs to masculine accusative nouns such as einen Tisch."
  },
  {
    "id": 70,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Dort steht … with one large car.",
    "answer": "ein großes Auto",
    "variants": [],
    "rule": "Auto is neuter. After ein the adjective shows the gender: ein großes Auto. Capitalise Auto.",
    "example": "Ein blaues Auto steht vor der Tür.",
    "focus": "großes Auto",
    "mode": "sentence",
    "negative": "ein große Auto",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "große auto",
    "wrong": "eine große auto",
    "target": "Adjektivendung nach ein bei Auto",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [
      {
        "form": "ein große Auto",
        "span": "große",
        "hint": "Auto takes das. After ein, the adjective ends in -es."
      }
    ],
    "hint": "Auto is neuter. After ein the adjective shows the gender: ein großes Auto. Capitalise Auto."
  },
  {
    "id": 71,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Ich bestelle … with a choice of foods.",
    "answer": "eine Pizza oder einen Döner",
    "variants": [
      "einen Döner oder eine Pizza"
    ],
    "rule": "Bestellen takes accusative. Pizza is feminine and Döner is masculine, so say eine Pizza oder einen Döner.",
    "example": "Ich nehme eine Suppe und einen Salat.",
    "focus": "einen Döner",
    "mode": "sentence",
    "negative": "eine Pizza oder einem Döner",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ein Pizza",
    "wrong": "ein Pizza oder Döner",
    "target": "Artikel im Akkusativ bei Pizza und Döner",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Bestellen takes accusative. Pizza is feminine and Döner is masculine, so say eine Pizza oder einen Döner."
  },
  {
    "id": 72,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that each person can contribute.",
    "answer": "jeder Mensch kann etwas mitbringen",
    "variants": [
      "Jeder Mensch kann was mitbringen.",
      "Jeder kann etwas mitbringen."
    ],
    "rule": "The person doing the action is nominative: jeder Mensch. Compare Ich frage jeden Menschen, where the person is the object. Was can mean etwas in speech.",
    "example": "Jeder Gast darf etwas mitnehmen.",
    "focus": "jeder",
    "mode": "sentence",
    "negative": "Jeden Menschen kann etwas mitbringen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "jeden Mensch",
    "wrong": "jeden Mensch kann was mitbringen",
    "target": "Nominativ jeder Mensch",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The person doing the action is nominative: jeder Mensch. Compare Ich frage jeden Menschen, where the person is the object. Was can mean etwas in speech."
  },
  {
    "id": 73,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that each person can bring one item.",
    "answer": "Dann kann jeder eine Sache mitbringen.",
    "variants": [
      "Jeder kann eine Sache mitbringen."
    ],
    "rule": "Jeder is singular, so use kann. A modal takes an infinitive without zu: kann eine Sache mitbringen.",
    "example": "Jeder kann einen Beitrag leisten.",
    "focus": "kann",
    "mode": "sentence",
    "negative": "Dann kann jeder eine Sache mitzubringen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ein sachen",
    "wrong": "können jeden Mensch ein sachen mitzubringen",
    "target": "Jeder mit Singularverb und Infinitiv ohne zu",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Jeder is singular, so use kann. A modal takes an infinitive without zu: kann eine Sache mitbringen."
  },
  {
    "id": 74,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Ich möchte … with one cake and an action.",
    "answer": "einen Kuchen backen",
    "variants": [],
    "rule": "Backen takes an object. Masculine ein Kuchen becomes einen Kuchen. Compare Ein Kuchen ist fertig with Ich backe einen Kuchen.",
    "example": "Ich möchte einen Apfel essen.",
    "focus": "einen Kuchen",
    "mode": "sentence",
    "negative": "einem Kuchen backen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "ein Kuchen backen",
    "target": "Maskuliner Akkusativ bei Kuchen backen",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Backen takes an object. Masculine ein Kuchen becomes einen Kuchen. Compare Ein Kuchen ist fertig with Ich backe einen Kuchen."
  },
  {
    "id": 75,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Ergänze: Ich bringe … mit.",
    "context": "Complete Ich bringe … mit. Give only the missing words for one salad.",
    "answer": "einen Salat",
    "variants": [
      "Ich bringe einen Salat mit."
    ],
    "rule": "Ein Salat is a correct subject, as in Ein Salat steht bereit. Here it is the object of mitbringen, so use einen Salat.",
    "example": "Ich bringe einen Nachtisch mit.",
    "focus": "einen Salat",
    "mode": "sentence",
    "negative": "einem Salat",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "ein Salat",
    "target": "Akkusativ statt Nominativ in einer Objektlücke",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [
      {
        "form": "einem Salat",
        "span": "einem",
        "hint": "As the object of mitbringen, use einen Salat."
      }
    ],
    "hint": "Ein Salat is a correct subject, as in Ein Salat steht bereit. Here it is the object of mitbringen, so use einen Salat."
  },
  {
    "id": 76,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Wir ziehen … with a destination: a new flat.",
    "answer": "in eine neue Wohnung",
    "variants": [],
    "rule": "With a destination, in takes accusative. Wohnung is feminine: in eine neue Wohnung. For a location say in einer neuen Wohnung.",
    "example": "Wir ziehen in eine andere Stadt.",
    "focus": "eine neue Wohnung",
    "mode": "sentence",
    "negative": "in einer neue Wohnung",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "einen neuen Wohnung",
    "wrong": "in einen neuen Wohnung",
    "target": "Richtungsangabe mit in bei Wohnung",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "With a destination, in takes accusative. Wohnung is feminine: in eine neue Wohnung. For a location say in einer neuen Wohnung."
  },
  {
    "id": 77,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that you helped a female friend move.",
    "answer": "Ich habe meiner Freundin beim Umzug geholfen.",
    "variants": [
      "Beim Umzug habe ich meiner Freundin geholfen.",
      "Ich habe meiner Freundin geholfen, umzuziehen."
    ],
    "rule": "Helfen takes dative for the person: meiner Freundin. Beim Umzug names the occasion. Compare Ich unterstütze meine Freundin with Ich helfe meiner Freundin.",
    "example": "Ich habe meinem Bruder beim Tragen geholfen.",
    "focus": "meiner Freundin",
    "mode": "sentence",
    "negative": "Beim Umzug habe ich meine Freundin geholfen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "meine Freundin",
    "wrong": "Ich habe meine Freundin beim Umzug geholfen.",
    "target": "Person im Dativ nach helfen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Helfen takes dative for the person: meiner Freundin. Beim Umzug names the occasion. Compare Ich unterstütze meine Freundin with Ich helfe meiner Freundin."
  },
  {
    "id": 78,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Give the subject in … ist einfach.",
    "answer": "Mein Tipp",
    "variants": [],
    "rule": "Tipp is masculine. In the nominative, use mein without an ending: Mein Tipp hilft. Meiner is possible without the noun in other sentences.",
    "example": "Mein Vorschlag gefällt allen.",
    "focus": "Mein",
    "mode": "sentence",
    "negative": "Meinen Tipp",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Meiner",
    "wrong": "Meiner Tipp",
    "target": "Possessiv vor maskulinem Subjekt",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Tipp is masculine. In the nominative, use mein without an ending: Mein Tipp hilft. Meiner is possible without the noun in other sentences."
  },
  {
    "id": 79,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Ich lade … ein. You mean several other friends.",
    "answer": "ein paar andere Freunde",
    "variants": [
      "andere Freunde"
    ],
    "rule": "Einladen needs an accusative object. Use andere Freunde or ein paar andere Freunde. The plural does not take eine.",
    "example": "Ich möchte einige Freunde einladen.",
    "focus": "andere Freunde",
    "mode": "sentence",
    "negative": "ein paar anderen Freunden",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "eine anderen Freunden",
    "target": "Unbestimmte Personen im Akkusativ Plural",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Einladen needs an accusative object. Use andere Freunde or ein paar andere Freunde. The plural does not take eine."
  },
  {
    "id": 80,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "You are signing on someone else's behalf. Give the phrase for “in your name”.",
    "answer": "in deinem Namen",
    "variants": [],
    "rule": "The fixed phrase uses dative: in deinem Namen. Name is masculine and adds -n here. Compare in meinem Namen.",
    "example": "Er unterschreibt in meinem Namen.",
    "focus": "deinem Namen",
    "mode": "sentence",
    "negative": "in deinen Namen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "deine Namen",
    "wrong": "in deine Namen",
    "target": "Dativ in der Wendung in deinem Namen",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The fixed phrase uses dative: in deinem Namen. Name is masculine and adds -n here. Compare in meinem Namen."
  },
  {
    "id": 81,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Give the subject in … liegt im Zentrum.",
    "answer": "Der Schlossplatz",
    "variants": [
      "der Schlossplatz"
    ],
    "rule": "In compounds, the final noun determines gender. Platz is masculine, so use der Schlossplatz. Compare der Marktplatz.",
    "example": "Der Marktplatz ist groß.",
    "focus": "Der",
    "mode": "sentence",
    "negative": "Das Schlossplatz",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Die",
    "wrong": "Die Schlossplatz",
    "target": "Genus eines Kompositums mit Platz",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "In compounds, the final noun determines gender. Platz is masculine, so use der Schlossplatz. Compare der Marktplatz."
  },
  {
    "id": 82,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Meaning “the best season of the year”.",
    "answer": "die beste Jahreszeit",
    "variants": [
      "die beste Saison"
    ],
    "rule": "After die in this singular phrase, the adjective ends in -e and stays lowercase. Jahreszeit names a season of the year. Saison can fit other settings.",
    "example": "Der Frühling ist für mich die schönste Jahreszeit.",
    "focus": "beste",
    "mode": "sentence",
    "negative": "die Beste Jahreszeit",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Beste saison",
    "wrong": "die Beste saison",
    "target": "Adjektiv und Nomen bei beste Jahreszeit",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "After die in this singular phrase, the adjective ends in -e and stays lowercase. Jahreszeit names a season of the year. Saison can fit other settings."
  },
  {
    "id": 83,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Ich brauche … without an article.",
    "answer": "bequeme Schuhe",
    "variants": [],
    "rule": "Before a plural object without an article, the adjective ends in -e: bequeme Schuhe. Schuhe is a noun.",
    "example": "Ich suche warme Schuhe.",
    "focus": "bequeme",
    "mode": "sentence",
    "negative": "bequemen Schuhe",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "schuhe",
    "wrong": "bequemer schuhe",
    "target": "Adjektivendung ohne Artikel im Plural",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Before a plural object without an article, the adjective ends in -e: bequeme Schuhe. Schuhe is a noun."
  },
  {
    "id": 84,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Offer to ask your male friend.",
    "answer": "Ich kann auch meinen Freund fragen.",
    "variants": [
      "Ich kann meinen Freund auch fragen."
    ],
    "rule": "Fragen takes an accusative person: meinen Freund. Compare helfen, which takes dative: meinem Freund helfen.",
    "example": "Ich frage meinen Nachbarn.",
    "focus": "meinen Freund",
    "mode": "sentence",
    "negative": "Ich kann auch meinem Freund fragen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "mein Freund",
    "wrong": "Ich kann auch mein Freund fragen.",
    "target": "Person im Akkusativ nach fragen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Fragen takes an accusative person: meinen Freund. Compare helfen, which takes dative: meinem Freund helfen."
  },
  {
    "id": 85,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "You will bring a container of tiramisu. Name the container and the dessert.",
    "answer": "eine Schale Tiramisu",
    "variants": [
      "eine Packung Tiramisu",
      "eine Dose Tiramisu"
    ],
    "rule": "Choose an ordinary food container such as eine Schale or eine Dose. Kasten is masculine and often means a crate, as in ein Kasten Wasser. Tiramisu keeps its capital T.",
    "example": "Zum Nachtisch bringe ich eine Schale Obst mit.",
    "focus": "Schale",
    "mode": "sentence",
    "negative": "ein Schale Tiramisu",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "ein kaste Tiramisu",
    "target": "Natürliche Behälterangabe für Tiramisu",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Choose an ordinary food container such as eine Schale or eine Dose. Kasten is masculine and often means a crate, as in ein Kasten Wasser. Tiramisu keeps its capital T."
  },
  {
    "id": 86,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe Julia using Frau.",
    "answer": "Julia ist eine Frau.",
    "variants": [],
    "rule": "After sein the description stays nominative. Frau is feminine: eine Frau. Compare Julia ist eine Lehrerin.",
    "example": "Meine Nachbarin ist eine freundliche Frau.",
    "focus": "eine Frau",
    "mode": "sentence",
    "negative": "Julia ist einen Frau.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ein Frau",
    "wrong": "Julia ist ein Frau",
    "target": "Femininer Nominativ nach sein",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "After sein the description stays nominative. Frau is feminine: eine Frau. Compare Julia ist eine Lehrerin."
  },
  {
    "id": 87,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe the city as her place of residence.",
    "answer": "Sie wohnt in einer Stadt.",
    "variants": [
      "Sie lebt in einer Stadt."
    ],
    "rule": "Wohnen describes where someone lives. Use in einer Stadt, dative feminine. In eine Stadt ziehen would describe a destination.",
    "example": "Er lebt in einer kleinen Stadt.",
    "focus": "einer Stadt",
    "mode": "sentence",
    "negative": "Sie lebt in einem Stadt.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ein Stadt",
    "wrong": "sie wohnt in ein Stadt",
    "target": "Wohnort mit femininem Dativ",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Wohnen describes where someone lives. Use in einer Stadt, dative feminine. In eine Stadt ziehen would describe a destination."
  },
  {
    "id": 88,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe Heidelberg as a fairly large city.",
    "answer": "Heidelberg ist eine ziemlich große Stadt.",
    "variants": [
      "Heidelberg ist eine recht große Stadt."
    ],
    "rule": "Ziemlich modifies the adjective groß. After eine use große before Stadt. Großstadt is a separate noun: eine Großstadt.",
    "example": "Das ist eine ziemlich ruhige Stadt.",
    "focus": "große Stadt",
    "mode": "sentence",
    "negative": "Heidelberg ist ein ziemlich große Stadt.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ein ziemlich Großstadt",
    "wrong": "Heidelberg ist ein ziemlich Großstadt",
    "target": "Gradangabe ziemlich vor dem Adjektiv",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Ziemlich modifies the adjective groß. After eine use große before Stadt. Großstadt is a separate noun: eine Großstadt."
  },
  {
    "id": 89,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that you like something very much.",
    "answer": "Mir gefällt das sehr.",
    "variants": [
      "Das gefällt mir sehr.",
      "Das gefällt mir sehr gut."
    ],
    "rule": "With gefallen the thing you like is the subject. The person is dative: mir. Use sehr for the degree: Das gefällt mir sehr.",
    "example": "Der Film gefällt mir gut.",
    "focus": "Mir",
    "mode": "sentence",
    "negative": "Ich gefällt das sehr.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "ich gefällt",
    "wrong": "ich gefällt mir das viel",
    "target": "Dativ und Intensität bei gefallen",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "With gefallen the thing you like is the subject. The person is dative: mir. Use sehr for the degree: Das gefällt mir sehr."
  },
  {
    "id": 90,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that your cat can also live in your city flat.",
    "answer": "Meine Katze kann auch in meiner Wohnung in der Stadt wohnen.",
    "variants": [
      "Meine Katze kann auch in meiner Stadtwohnung wohnen."
    ],
    "rule": "The location needs dative: in meiner Wohnung, in der Stadt. The singular subject takes kann, followed by wohnen at the end.",
    "example": "Mein Hund schläft in meiner Wohnung.",
    "focus": "meiner Wohnung",
    "mode": "sentence",
    "negative": "Meine Katze können auch in meiner Wohnung wohnen.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "meine Katze … in meine Wohnung in der Stadt wohnen",
    "target": "Dativ für den Aufenthaltsort der Katze",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "The location needs dative: in meiner Wohnung, in der Stadt. The singular subject takes kann, followed by wohnen at the end."
  },
  {
    "id": 91,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Give the reason: both of you like it.",
    "answer": "weil es uns beiden gefällt",
    "variants": [
      "weil uns beiden das gefällt",
      "weil das uns beiden gefällt"
    ],
    "rule": "Gefallen takes a dative person: uns beiden. Es is singular, so use gefällt. Weil sends the verb to the end.",
    "example": "Wir kommen, weil uns das Fest gefällt.",
    "focus": "uns beiden",
    "mode": "sentence",
    "negative": "weil es wir beide gefällt",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir beiden",
    "wrong": "weil wir beiden gefällt es",
    "target": "Dativ uns beiden bei gefallen",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Gefallen takes a dative person: uns beiden. Es is singular, so use gefällt. Weil sends the verb to the end."
  },
  {
    "id": 92,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Mention a new Asian restaurant near you.",
    "answer": "Es gibt ein neues asiatisches Restaurant in der Nähe.",
    "variants": [
      "In der Nähe gibt es ein neues asiatisches Restaurant."
    ],
    "rule": "Es gibt takes accusative. Restaurant is neuter: ein neues asiatisches Restaurant. Both adjectives take -es after ein.",
    "example": "Hier gibt es ein gutes italienisches Restaurant.",
    "focus": "ein neues asiatisches Restaurant",
    "mode": "sentence",
    "negative": "Es gibt ein neue asiatisches Restaurant in der Nähe.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "eine neue Asiatisches",
    "wrong": "Es gibt eine neue Asiatisches Restaurant in der Nähe.",
    "target": "Zwei attributive Adjektive vor Restaurant",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Es gibt takes accusative. Restaurant is neuter: ein neues asiatisches Restaurant. Both adjectives take -es after ein."
  },
  {
    "id": 93,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete Wir planen … with one small celebration.",
    "answer": "eine kleine Feier",
    "variants": [],
    "rule": "Feier is feminine. Planen takes accusative, so say eine kleine Feier. Einen would go with masculine nouns.",
    "example": "Wir planen eine schöne Feier.",
    "focus": "eine kleine Feier",
    "mode": "sentence",
    "negative": "einen kleinen Feier",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "einen kleine",
    "wrong": "einen kleine Feier",
    "target": "Akkusativ und Genus von Feier",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Feier is feminine. Planen takes accusative, so say eine kleine Feier. Einen would go with masculine nouns."
  },
  {
    "id": 94,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Start a statement about a problem.",
    "answer": "das Problem ist",
    "variants": [
      "Das Problem ist"
    ],
    "rule": "The subject is das Problem, a neuter noun. Die Probleme is the plural and would need sind.",
    "example": "Das Problem lässt sich lösen.",
    "focus": "das Problem",
    "mode": "sentence",
    "negative": "Der Problem ist",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die Problem",
    "wrong": "die Problem ist",
    "target": "Genus von Problem im Singular",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The subject is das Problem, a neuter noun. Die Probleme is the plural and would need sind."
  },
  {
    "id": 95,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Name the gift and the action. You want to give a woman one small photo frame.",
    "answer": "ihr einen kleinen Bilderrahmen schenken",
    "variants": [
      "ihr einen kleinen Fotorahmen geben"
    ],
    "rule": "Geben and schenken take a dative recipient and an accusative gift. Rahmen is masculine: ihr einen kleinen Fotorahmen geben.",
    "example": "Ich schenke ihr einen kleinen Kalender.",
    "focus": "einen kleinen Bilderrahmen",
    "mode": "sentence",
    "negative": "ihr einem kleinen Bilderrahmen schenken",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "eine kleine Fotorahmen geben",
    "target": "Empfänger und Gegenstand bei einem Geschenk",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Geben and schenken take a dative recipient and an accusative gift. Rahmen is masculine: ihr einen kleinen Fotorahmen geben."
  },
  {
    "id": 96,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete ein Bilderrahmen … with your shared selfie inside.",
    "answer": "mit unserem Selfie",
    "variants": [],
    "rule": "Mit always takes dative. Selfie is neuter, so unser becomes unserem: mit unserem Selfie.",
    "example": "Wir machen eine Karte mit unserem Foto.",
    "focus": "unserem",
    "mode": "sentence",
    "negative": "mit unseren Selfie",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "unsere Selfie",
    "wrong": "mit unsere Selfie",
    "target": "Possessiv im Dativ nach mit",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Mit always takes dative. Selfie is neuter, so unser becomes unserem: mit unserem Selfie."
  },
  {
    "id": 97,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe the next step in planning with the other course participants.",
    "answer": "Dann müssen wir das mit den anderen Kursteilnehmern besprechen.",
    "variants": [
      "Dann müssen wir mit den anderen Kursteilnehmern darüber sprechen.",
      "Dann müssen wir das mit anderen Kursteilnehmern besprechen."
    ],
    "rule": "Dann comes before the finite verb müssen. Mit takes dative plural: mit den anderen Kursteilnehmern. Besprechen takes das as a direct object.",
    "example": "Wir sprechen mit den anderen Gästen.",
    "focus": "den anderen Kursteilnehmern",
    "mode": "sentence",
    "negative": "Dann wir müssen das mit den anderen Kursteilnehmern besprechen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir müssen",
    "wrong": "dann wir müssen das mit andere Kursteilnehmer besprechen",
    "target": "Mit plus Dativ Plural und Verbzweitstellung",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Dann comes before the finite verb müssen. Mit takes dative plural: mit den anderen Kursteilnehmern. Besprechen takes das as a direct object."
  },
  {
    "id": 98,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Biete an, einen einzelnen Kuchen zu backen.",
    "context": "Offer to bake one cake. The draft could also describe several cakes.",
    "answer": "Ich kann den Kuchen backen.",
    "variants": [
      "Ich kann einen Kuchen backen.",
      "Den Kuchen kann ich backen.",
      "Einen Kuchen kann ich backen."
    ],
    "rule": "Die Kuchen is correct for several cakes. For one cake, use den Kuchen if it is already known, or einen Kuchen when introducing it.",
    "example": "Ich backe den Kuchen. Ich backe die Kuchen.",
    "focus": "den Kuchen",
    "mode": "sentence",
    "negative": "Ich kann dem Kuchen backen.",
    "sourceVerdict": "context",
    "contextForms": [
      "Ich kann die Kuchen backen."
    ],
    "originalFocus": "",
    "wrong": "ich kann die Kuchen backen",
    "target": "Singular und Plural von Kuchen im Akkusativ",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Die Kuchen is correct for several cakes. For one cake, use den Kuchen if it is already known, or einen Kuchen when introducing it."
  },
  {
    "id": 99,
    "category": "Artikel, Fälle & Pronomen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Tell a friend to inform the other participants.",
    "answer": "Du kannst die anderen Kursteilnehmer informieren.",
    "variants": [
      "Die anderen Kursteilnehmer kannst du informieren."
    ],
    "rule": "Informieren takes an accusative object. The plural is die anderen Kursteilnehmer. The extra -n appears in the dative: mit den anderen Kursteilnehmern.",
    "example": "Bitte informiere die anderen Gäste.",
    "focus": "die anderen Kursteilnehmer",
    "mode": "sentence",
    "negative": "Du kannst den anderen Kursteilnehmern informieren.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Kursteilnehmern",
    "wrong": "du kannst die anderen Kursteilnehmern informieren",
    "target": "Personen im Akkusativ nach informieren",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Informieren takes an accusative object. The plural is die anderen Kursteilnehmer. The extra -n appears in the dative: mit den anderen Kursteilnehmern."
  },
  {
    "id": 100,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Offer help with both unpacking and cleaning.",
    "answer": "Ich kann dir gerne beim Auspacken und Putzen helfen.",
    "variants": [
      "Gerne kann ich dir beim Auspacken und Putzen helfen.",
      "Ich kann dir gerne helfen, auszupacken und zu putzen."
    ],
    "rule": "Beim means bei dem. Activities used as nouns take capitals: beim Auspacken und Putzen. Dir is the person receiving help.",
    "example": "Danke fürs Helfen beim Kochen und Aufräumen.",
    "focus": "beim Auspacken und Putzen",
    "mode": "sentence",
    "negative": "Ich kann dich gerne beim Auspacken und Putzen helfen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "auspacken",
    "wrong": "Ich kann dir gerne helfen zum auspacken und putzen.",
    "target": "Helfen bei einer Tätigkeit mit substantivierten Verben",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Beim means bei dem. Activities used as nouns take capitals: beim Auspacken und Putzen. Dir is the person receiving help."
  },
  {
    "id": 101,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Congratulate a friend on a new job.",
    "answer": "Herzlichen Glückwunsch zu deinem neuen Job!",
    "variants": [
      "Herzlichen Glückwunsch zum neuen Job!",
      "Herzlichen Glückwunsch zur neuen Stelle!"
    ],
    "rule": "Use Glückwunsch zu plus dative. For a friend, zu deinem neuen Job sounds natural. Zum means zu dem.",
    "example": "Alles Gute zu deiner neuen Stelle!",
    "focus": "zu deinem neuen Job",
    "mode": "sentence",
    "negative": "Herzlichen Glückwunsch zu deinen neuen Job!",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die neuen Job",
    "wrong": "Herzlichen Glückwunsch für die neuen Job.",
    "target": "Gratulation mit zu und Dativ",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Use Glückwunsch zu plus dative. For a friend, zu deinem neuen Job sounds natural. Zum means zu dem."
  },
  {
    "id": 102,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe traffic and congestion on the way.",
    "answer": "Es gibt viel Verkehr und Stau auf dem Weg.",
    "variants": [
      "Auf dem Weg gibt es viel Verkehr und Stau.",
      "Auf dem Weg gibt es viel Verkehr und einen Stau."
    ],
    "rule": "Verkehr refers to traffic as a whole, so use viel. Auf dem Weg describes the route. Write Verkehr, Stau and Weg as nouns.",
    "example": "Auf der Straße herrscht dichter Verkehr.",
    "focus": "viel Verkehr",
    "mode": "sentence",
    "negative": "Es gibt viele Verkehr und Stau auf dem Weg.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "viele verkehr",
    "wrong": "Es gibts viele verkehr und stau auf der weg.",
    "target": "Nicht zählbares Verkehr und Ort auf dem Weg",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Verkehr refers to traffic as a whole, so use viel. Auf dem Weg describes the route. Write Verkehr, Stau and Weg as nouns."
  },
  {
    "id": 103,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Suggest meeting each other on Saturday morning.",
    "answer": "Aber können wir uns am Samstagvormittag im Café treffen?",
    "variants": [
      "Können wir uns aber am Samstagvormittag im Café treffen?"
    ],
    "rule": "Use uns when wir meet each other. Am Samstagvormittag is one particular morning. Samstagvormittags without am can mean regularly on Saturdays.",
    "example": "Am Freitagvormittag treffen wir uns bei dir.",
    "focus": "uns",
    "mode": "sentence",
    "negative": "Können wir uns am Samstagvormittag im Café trifft?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "am Samstagvormittags",
    "wrong": "aber können wir am Samstagvormittags im Café treffen?",
    "target": "Reziprokes sich treffen und Samstagvormittag",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use uns when wir meet each other. Am Samstagvormittag is one particular morning. Samstagvormittags without am can mean regularly on Saturdays."
  },
  {
    "id": 104,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say where you are waiting: inside the bakery.",
    "answer": "in der Bäckerei",
    "variants": [],
    "rule": "Bäckerei is feminine. Inside the bakery is in der Bäckerei. At or by the bakery could instead be an der Bäckerei.",
    "example": "Ich kaufe das Brot in der Bäckerei.",
    "focus": "der Bäckerei",
    "mode": "sentence",
    "negative": "in dem Bäckerei",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "am backerei",
    "target": "Innenraum der Bäckerei mit in plus Dativ",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Bäckerei is feminine. Inside the bakery is in der Bäckerei. At or by the bakery could instead be an der Bäckerei."
  },
  {
    "id": 105,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say you cannot arrive earlier to help.",
    "answer": "Ich kann nicht vorher kommen und helfen.",
    "variants": [
      "Ich kann leider nicht früher kommen und helfen.",
      "Ich kann nicht früher kommen und helfen."
    ],
    "rule": "Vorkommen usually means occur or seem. Use früher kommen for arriving earlier. Vorbeikommen means come by, a different idea.",
    "example": "Kannst du heute etwas früher kommen?",
    "focus": "vorher",
    "mode": "sentence",
    "negative": "Ich kann nicht früher kommt und helfen.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Ich kann nicht vorkommen und helfen.",
    "target": "Früher kommen und vorkommen unterscheiden",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Vorkommen usually means occur or seem. Use früher kommen for arriving earlier. Vorbeikommen means come by, a different idea."
  },
  {
    "id": 106,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask a friend to let you know.",
    "answer": "Lass es mich wissen.",
    "variants": [
      "Sag mir Bescheid."
    ],
    "rule": "In jemanden etwas wissen lassen, the person is accusative: mich. Es stands for the information. Sag mir Bescheid uses dative instead.",
    "example": "Sag es mir bitte. Lass es mich wissen.",
    "focus": "mich",
    "mode": "sentence",
    "negative": "Lass es mir wissen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "mir",
    "wrong": "Lass mir wissen",
    "target": "Wissen lassen mit Akkusativ",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "In jemanden etwas wissen lassen, the person is accusative: mich. Es stands for the information. Sag mir Bescheid uses dative instead."
  },
  {
    "id": 107,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask a friend to tell you if anything is needed.",
    "answer": "Sag mir bitte Bescheid, falls du etwas brauchst.",
    "variants": [
      "Sag mir bitte Bescheid, wenn du etwas brauchst.",
      "Lass es mich wissen, falls du etwas brauchst."
    ],
    "rule": "Sag mir Bescheid names the action clearly. After falls, du needs brauchst. A second option is Lass es mich wissen, falls du etwas brauchst.",
    "example": "Ruf mich an, falls du Hilfe brauchst.",
    "focus": "Bescheid",
    "mode": "sentence",
    "negative": "Sag mir Bescheid, falls du etwas brauchen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "du etwas brauchen",
    "wrong": "Lass mich gerne, falls du etwas brauchen.",
    "target": "Um Nachricht bitten und Bedingung mit falls",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Sag mir Bescheid names the action clearly. After falls, du needs brauchst. A second option is Lass es mich wissen, falls du etwas brauchst."
  },
  {
    "id": 108,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Offer help with packing.",
    "answer": "Ich kann dir gerne beim Einpacken helfen.",
    "variants": [
      "Gerne kann ich dir beim Einpacken helfen.",
      "Beim Einpacken kann ich dir gerne helfen."
    ],
    "rule": "After kann, use helfen without zu. The activity is a noun after beim: beim Einpacken. The person helped is dir.",
    "example": "Kannst du mir beim Packen helfen?",
    "focus": "beim Einpacken",
    "mode": "sentence",
    "negative": "Ich kann dir beim Einpacken zu helfen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "zu helfen",
    "wrong": "Ich kann dir gerne zum einpacken zu helfen.",
    "target": "Beim Einpacken helfen mit Modalverb",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "After kann, use helfen without zu. The activity is a noun after beim: beim Einpacken. The person helped is dir."
  },
  {
    "id": 109,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask to meet on one Saturday afternoon.",
    "answer": "Können wir uns bitte am Samstagnachmittag treffen?",
    "variants": [
      "Können wir uns am Samstagnachmittag treffen?",
      "Können wir uns bitte am Samstag am Nachmittag treffen?",
      "Können wir uns am Samstagnachmittag bitte treffen?"
    ],
    "rule": "Use uns for each other. Combine the day and the part of the day in am Samstagnachmittag. Compare am Montagmorgen.",
    "example": "Wir treffen uns am Mittwochnachmittag.",
    "focus": "uns",
    "mode": "sentence",
    "negative": "Können wir uns am Samstag Nachmittag treffen?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Samstag Nachmittag",
    "wrong": "Können wir bitte am Samstag Nachmittag treffen?",
    "target": "Reziprokes Treffen und zusammengesetzte Zeitangabe",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use uns for each other. Combine the day and the part of the day in am Samstagnachmittag. Compare am Montagmorgen."
  },
  {
    "id": 110,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "A friend is coming to your home next weekend.",
    "answer": "Du kommst nächstes Wochenende zu mir.",
    "variants": [
      "Nächstes Wochenende kommst du zu mir.",
      "Du kommst am nächsten Wochenende zu mir."
    ],
    "rule": "A destination uses zu mir, while bei mir describes being at my place. Wochenende is neuter: nächstes Wochenende.",
    "example": "Morgen komme ich zu dir. Dann bin ich bei dir.",
    "focus": "zu mir",
    "mode": "sentence",
    "negative": "Du kommst nächstes Wochenende zu mich.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "nächsten Wochenende",
    "wrong": "Du kommst nächsten Wochenende bei mir.",
    "target": "Ziel zu mir und Zeitangabe nächstes Wochenende",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "A destination uses zu mir, while bei mir describes being at my place. Wochenende is neuter: nächstes Wochenende."
  },
  {
    "id": 111,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "End a friendly letter by saying you look forward to hearing from the reader.",
    "answer": "Ich freue mich, von dir zu hören!",
    "variants": [
      "Ich freue mich darauf, von dir zu hören!"
    ],
    "rule": "Von jemandem hören means hear from someone. Use von dir. Put a comma before the infinitive group in Ich freue mich, von dir zu hören.",
    "example": "Ich hoffe, bald von Ihnen zu hören.",
    "focus": "von dir",
    "mode": "sentence",
    "negative": "Ich freue mich, von dich zu hören!",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "dir zu hören",
    "wrong": "Ich freue mich dir zu hören!",
    "target": "Von jemandem hören und Infinitivgruppe",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Von jemandem hören means hear from someone. Use von dir. Put a comma before the infinitive group in Ich freue mich, von dir zu hören."
  },
  {
    "id": 112,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Refer to time for a previously mentioned activity.",
    "answer": "Zeit dafür",
    "variants": [],
    "rule": "For a thing or activity, für plus a pronoun often becomes dafür: Hast du Zeit dafür? For a person, say für ihn or für sie.",
    "example": "Hast du Zeit für den Kurs? Ja, dafür habe ich Zeit.",
    "focus": "dafür",
    "mode": "sentence",
    "negative": "Zeit da für",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "für es",
    "wrong": "Zeit für es",
    "target": "Pronominaladverb dafür für eine Aktivität",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "For a thing or activity, für plus a pronoun often becomes dafür: Hast du Zeit dafür? For a person, say für ihn or für sie."
  },
  {
    "id": 113,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say you will telephone a man tomorrow to arrange an appointment.",
    "answer": "Ich rufe ihn morgen an, um einen Termin zu vereinbaren.",
    "variants": [
      "Ich rufe ihn morgen an, um einen Termin zu machen."
    ],
    "rule": "Use anrufen for a telephone call. In a main clause an separates: Ich rufe ihn an. Um … zu introduces the purpose and takes a comma.",
    "example": "Ich rufe sie an, um den Termin zu bestätigen.",
    "focus": "an, um",
    "mode": "sentence",
    "negative": "Ich rufe ihn morgen an, um einen Termin vereinbaren.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "ihn morgen rufen einen Termin zu machen",
    "target": "Trennbares anrufen mit finalem um … zu",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Use anrufen for a telephone call. In a main clause an separates: Ich rufe ihn an. Um … zu introduces the purpose and takes a comma."
  },
  {
    "id": 114,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Tell a formal reader that you are giving them information.",
    "answer": "Ich informiere Sie darüber.",
    "variants": [
      "Darüber informiere ich Sie.",
      "Ich gebe Ihnen darüber Auskunft."
    ],
    "rule": "Jemanden informieren takes the person as its object: Ich informiere Sie. Darüber refers to the topic. Ich informiere mich means I get information myself.",
    "example": "Über den Termin informiere ich Sie morgen.",
    "focus": "darüber",
    "mode": "sentence",
    "negative": "Ich informiere Ihnen darüber.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "über es",
    "wrong": "Ich informiere mich Sie über es.",
    "target": "Jemanden über etwas informieren",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Jemanden informieren takes the person as its object: Ich informiere Sie. Darüber refers to the topic. Ich informiere mich means I get information myself."
  },
  {
    "id": 115,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask an adult formally to let you know.",
    "answer": "Geben Sie mir bitte Bescheid.",
    "variants": [
      "Lassen Sie es mich wissen."
    ],
    "rule": "In a formal request, use the verb followed by Sie: Geben Sie mir Bescheid. Bescheid is a noun. Lassen Sie es mich wissen also works.",
    "example": "Bitte geben Sie uns bis Freitag Bescheid.",
    "focus": "Bescheid",
    "mode": "sentence",
    "negative": "Geben Sie mich bitte Bescheid.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "bescheid",
    "wrong": "Lassen sich mir bescheid.",
    "target": "Formelle Bitte um Bescheid",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "In a formal request, use the verb followed by Sie: Geben Sie mir Bescheid. Bescheid is a noun. Lassen Sie es mich wissen also works."
  },
  {
    "id": 116,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Report what a letter says: the water meter must be replaced.",
    "answer": "In dem Brief steht, dass der Wasserzähler getauscht werden muss.",
    "variants": [
      "Im Brief steht, dass der Wasserzähler ausgetauscht werden muss."
    ],
    "rule": "A passive with a modal uses participle + werden + modal in a dass clause: …, dass er ersetzt werden muss. Wasserzähler names the meter.",
    "example": "Im Brief steht, dass die Tür repariert werden muss.",
    "focus": "getauscht werden muss",
    "mode": "sentence",
    "negative": "Im Brief steht, dass der Wasserzähler getauscht muss werden.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Wasserzähker",
    "wrong": "Das steht, dass Sie mussen der Wasserzähker tauschen werden.",
    "target": "Passiv mit Modalverb im dass-Satz",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "A passive with a modal uses participle + werden + modal in a dass clause: …, dass er ersetzt werden muss. Wasserzähler names the meter."
  },
  {
    "id": 117,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe the quiet after ten at night.",
    "answer": "Nach 22 Uhr ist es ganz ruhig.",
    "variants": [
      "Nach zehn Uhr abends ist es ganz ruhig."
    ],
    "rule": "A clock time after nach needs no article: nach 22 Uhr. The sentence still needs a subject, es: Nach zehn Uhr ist es ruhig.",
    "example": "Nach acht Uhr ist es hier leise.",
    "focus": "Nach 22 Uhr",
    "mode": "sentence",
    "negative": "Nach 22 Uhr ist ganz ruhig.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "nach der zweiundzwanzig Uhr ist ganz ruhig",
    "target": "Uhrzeit ohne Artikel und unpersönliches es",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "A clock time after nach needs no article: nach 22 Uhr. The sentence still needs a subject, es: Nach zehn Uhr ist es ruhig."
  },
  {
    "id": 118,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete a condition about people living in the countryside.",
    "answer": "wenn sie auf dem Land leben",
    "variants": [
      "wenn sie auf dem Land wohnen"
    ],
    "rule": "Auf dem Land means in the countryside. In einem Land means in a country. The plural subject sie takes leben.",
    "example": "Meine Großeltern leben auf dem Land.",
    "focus": "auf dem Land",
    "mode": "sentence",
    "negative": "wenn sie auf den Land leben",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "wenn sie in Land leben",
    "target": "Auf dem Land für ländlichen Wohnort",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Auf dem Land means in the countryside. In einem Land means in a country. The plural subject sie takes leben."
  },
  {
    "id": 119,
    "category": "Verben, Modalverben & Zeitformen",
    "task": "Formuliere passend zum Kontext.",
    "context": "Arrange to meet each other at your friend's place.",
    "answer": "Wir treffen uns am Samstag um 15 Uhr bei dir.",
    "variants": [
      "Am Samstag um 15 Uhr treffen wir uns bei dir.",
      "Wir treffen uns bei dir am Samstag um 15 Uhr."
    ],
    "rule": "Wir treffen uns needs the reflexive pronoun. Use um for the clock time and bei dir for a location: um drei Uhr bei dir.",
    "example": "Wir sehen uns um vier Uhr bei Anna.",
    "focus": "uns",
    "mode": "sentence",
    "negative": "Wir trifft uns am Samstag um 15 Uhr bei dir.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Wir treffen",
    "wrong": "Wir treffen am Samstag um 15 Uhr bei dir.",
    "target": "Treffpunkt mit bei und reziprokem uns",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Wir treffen uns needs the reflexive pronoun. Use um for the clock time and bei dir for a location: um drei Uhr bei dir."
  },
  {
    "id": 120,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Plan a hike through the vineyards.",
    "answer": "Wir gehen in den Weinbergen wandern.",
    "variants": [
      "Wir gehen in einem Weinberg wandern."
    ],
    "rule": "In den Weinbergen names the area where you hike. Gehen takes a bare infinitive for an activity: Wir gehen wandern. A single vineyard can be in einem Weinberg.",
    "example": "Wir gehen am Wochenende in den Bergen wandern.",
    "focus": "in den Weinbergen",
    "mode": "sentence",
    "negative": "Wir gehen in den Weinbergen zu wandern.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Wir gehen am einen Weinberg wandern.",
    "target": "Wandergebiet und gehen mit Infinitiv",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "In den Weinbergen names the area where you hike. Gehen takes a bare infinitive for an activity: Wir gehen wandern. A single vineyard can be in einem Weinberg."
  },
  {
    "id": 121,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Formuliere den Glückwunsch mit „zu“.",
    "context": "Rephrase a congratulation using zu and a noun phrase.",
    "answer": "Herzlichen Glückwunsch zu deinem neuen Job!",
    "variants": [
      "Herzlichen Glückwunsch zum neuen Job!",
      "Herzlichen Glückwunsch zu deiner neuen Arbeit!",
      "Glückwunsch zu deinem neuen Job!"
    ],
    "rule": "A congratulation can include a dass clause. The short conventional formula uses zu plus dative: Glückwunsch zur neuen Stelle. Zur means zu der.",
    "example": "Glückwunsch zur neuen Wohnung!",
    "focus": "zu deinem neuen Job",
    "mode": "sentence",
    "negative": "Herzlichen Glückwunsch zu deine neue Arbeit!",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Herzlichen Glückwunsch, dass du eine neue Arbeit gefunden hast.",
    "target": "Gratulation als Nominalgruppe mit zu formulieren",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "A congratulation can include a dass clause. The short conventional formula uses zu plus dative: Glückwunsch zur neuen Stelle. Zur means zu der."
  },
  {
    "id": 122,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Ergänze: Wir bleiben …",
    "context": "Complete Wir bleiben … . One classroom is meant.",
    "answer": "in unserem Klassenzimmer",
    "variants": [
      "in unserem Klassenraum",
      "Wir bleiben in unserem Klassenzimmer."
    ],
    "rule": "For staying in one room use dative: in unserem Klassenzimmer. In unsere Klassenzimmer can be correct for a destination in the plural.",
    "example": "Wir sitzen in einem Klassenzimmer.",
    "focus": "unserem",
    "mode": "sentence",
    "negative": "in unseren Klassenzimmer",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "in unsere Klassenzimmer",
    "target": "Ortsdativ im Singular gegenüber Richtungsakkusativ im Plural",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "For staying in one room use dative: in unserem Klassenzimmer. In unsere Klassenzimmer can be correct for a destination in the plural."
  },
  {
    "id": 123,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe Hannah going on her break.",
    "answer": "wenn Hannah in die Pause geht",
    "variants": [
      "wenn Hannah eine Pause macht"
    ],
    "rule": "The expression is in die Pause gehen. In der Pause describes something happening during the break. After wenn, geht comes last.",
    "example": "Sie geht in die Pause. In der Pause liest sie.",
    "focus": "in die Pause",
    "mode": "sentence",
    "negative": "wenn Hannah in der Pause gehen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "in Pause",
    "wrong": "wenn Hannah ... in Pause geht",
    "target": "In die Pause gehen als feste Verbindung",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The expression is in die Pause gehen. In der Pause describes something happening during the break. After wenn, geht comes last."
  },
  {
    "id": 124,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Sage, dass ihr gemeinsam über eine Idee sprecht.",
    "context": "You talk to each other about an idea. Rephrase to express that meaning.",
    "answer": "wir sprechen miteinander darüber",
    "variants": [
      "Wir sprechen ein bisschen miteinander darüber."
    ],
    "rule": "Miteinander means with each other. Übereinander means about each other and can be correct in a different conversation. Darüber refers to the idea.",
    "example": "Wir reden miteinander über das Angebot.",
    "focus": "miteinander",
    "mode": "sentence",
    "negative": "Wir sprechen mit einander dar über.",
    "sourceVerdict": "context",
    "contextForms": [
      "Wir sprechen ein bisschen übereinander."
    ],
    "originalFocus": "",
    "wrong": "wir sprechen ein bisschen übereinander",
    "target": "Miteinander und übereinander unterscheiden",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Miteinander means with each other. Übereinander means about each other and can be correct in a different conversation. Darüber refers to the idea."
  },
  {
    "id": 125,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say that you have not yet considered a gift.",
    "answer": "Über ein Geschenk habe ich noch nicht nachgedacht.",
    "variants": [
      "Ich habe über ein Geschenk noch nicht nachgedacht.",
      "Ich habe noch nicht über ein Geschenk nachgedacht."
    ],
    "rule": "Über etwas nachdenken means give something thought. Use the participle nachgedacht with habe. If the gift is already known, das Geschenk also works.",
    "example": "Hast du schon über meinen Vorschlag nachgedacht?",
    "focus": "nachgedacht",
    "mode": "sentence",
    "negative": "Über ein Geschenk bin ich noch nicht nachgedacht.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Über Geschenk",
    "wrong": "Über Geschenk hab ich nicht gedacht",
    "target": "Nachdenken über ein Geschenk im Perfekt",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Über etwas nachdenken means give something thought. Use the participle nachgedacht with habe. If the gift is already known, das Geschenk also works."
  },
  {
    "id": 126,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Suggest hiking and having a picnic.",
    "answer": "Wir können am Samstag wandern und ein Picknick machen.",
    "variants": [
      "Am Samstag können wir wandern und ein Picknick machen.",
      "Wir können am Samstag wandern gehen und ein Picknick machen."
    ],
    "rule": "The noun is Picknick. Notice both ck groups: Pick-nick. After können the verbs wandern and machen stay in the infinitive.",
    "example": "Für unser Picknick kaufe ich Brot.",
    "focus": "Picknick",
    "mode": "sentence",
    "negative": "Wir können am Samstag wandern und ein Picknik machen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Piknik",
    "wrong": "Wir können am Samstag wandern und ein Piknik machen.",
    "target": "Schreibung von Picknick",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "The noun is Picknick. Notice both ck groups: Pick-nick. After können the verbs wandern and machen stay in the infinitive."
  },
  {
    "id": 127,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Formuliere passend zum Kontext.",
    "context": "Report a good forecast and suggest spending time together.",
    "answer": "Das Wetter soll schön werden, und wir können Zeit miteinander verbringen.",
    "variants": [
      "Das Wetter soll schön werden. Wir können Zeit miteinander verbringen.",
      "Das Wetter soll schön werden und wir können Zeit zusammen verbringen."
    ],
    "rule": "Soll schön werden reports a forecast. Wäre schön describes a hypothetical situation. Wetter and Zeit are nouns. Miteinander makes the shared activity clear.",
    "example": "Laut Vorhersage soll es morgen sonnig werden.",
    "focus": "soll",
    "mode": "sentence",
    "negative": "Das wetter soll schön werden und wir können Zeit miteinander verbringen.",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Das wetter wäre schön und wir können gerne Zeit verbringen.",
    "target": "Eine Vorhersage und gemeinsame Zeit ausdrücken",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Soll schön werden reports a forecast. Wäre schön describes a hypothetical situation. Wetter and Zeit are nouns. Miteinander makes the shared activity clear."
  },
  {
    "id": 128,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Complete Dieses Ticket ist … with the comparative meaning “less expensive”.",
    "answer": "günstiger",
    "variants": [],
    "rule": "The base is günstig. Keep ü when adding the comparative ending -er: Dieser Tarif ist günstiger.",
    "example": "Diese Fahrkarte ist günstiger als die andere.",
    "focus": "günstiger",
    "mode": "exact",
    "negative": "günstieger",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "gunstiger",
    "wrong": "gunstiger",
    "target": "Umlaut im Komparativ günstiger",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "The base is günstig. Keep ü when adding the comparative ending -er: Dieser Tarif ist günstiger."
  },
  {
    "id": 129,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write a short thank-you at the beginning of a message.",
    "answer": "Vielen Dank",
    "variants": [
      "Vielen Dank!",
      "Vielen Dank."
    ],
    "rule": "Dank is a noun and needs a capital D. Vielen starts this message with a capital V. Compare Vielen Dank für die Hilfe.",
    "example": "Vielen Dank für deine Nachricht.",
    "focus": "Dank",
    "mode": "exact",
    "negative": "Vielen dank",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "dank",
    "wrong": "Vielen dank",
    "target": "Großschreibung von Dank",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [
      {
        "form": "Vielen dank",
        "span": "dank",
        "hint": "Dank is a noun. Write it with a capital D."
      }
    ],
    "hint": "Dank is a noun and needs a capital D. Vielen starts this message with a capital V. Compare Vielen Dank für die Hilfe."
  },
  {
    "id": 130,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write the conjunction in Ich weiß, … du kommst.",
    "answer": "dass",
    "variants": [],
    "rule": "Dass introduces a subordinate clause: Ich weiß, dass du kommst. Das with one s can be an article or a pronoun.",
    "example": "Sie sagt, dass sie kommt.",
    "focus": "dass",
    "mode": "exact",
    "negative": "das",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "dast",
    "wrong": "dast",
    "target": "Konjunktion dass gegenüber das",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Dass introduces a subordinate clause: Ich weiß, dass du kommst. Das with one s can be an article or a pronoun."
  },
  {
    "id": 131,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write the word meaning “together”.",
    "answer": "zusammen",
    "variants": [],
    "rule": "Zusammen has one s and two m letters. Compare Wir lernen zusammen.",
    "example": "Wir fahren zusammen nach Hause.",
    "focus": "zusammen",
    "mode": "exact",
    "negative": "zusamen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "zussammen",
    "wrong": "zussammen",
    "target": "Schreibung von zusammen",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Zusammen has one s and two m letters. Compare Wir lernen zusammen."
  },
  {
    "id": 132,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write the infinitive meaning “to be able to”.",
    "answer": "können",
    "variants": [],
    "rule": "Können uses ö and two n letters. Compare wir können with ich kann. The umlaut changes the spelling.",
    "example": "Können Sie mir helfen?",
    "focus": "können",
    "mode": "exact",
    "negative": "könen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "konnen",
    "wrong": "konnen",
    "target": "Umlaut und Doppelkonsonant in können",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Können uses ö and two n letters. Compare wir können with ich kann. The umlaut changes the spelling."
  },
  {
    "id": 133,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write the conjunction meaning “because”.",
    "answer": "weil",
    "variants": [],
    "rule": "Weil ends in one l. It introduces a reason: weil ich Zeit habe.",
    "example": "Ich gehe, weil der Bus kommt.",
    "focus": "weil",
    "mode": "exact",
    "negative": "weill",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "weill",
    "wrong": "weill",
    "target": "Einfaches l in weil",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Weil ends in one l. It introduces a reason: weil ich Zeit habe."
  },
  {
    "id": 134,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write the noun meaning “birthday”.",
    "answer": "Geburtstag",
    "variants": [],
    "rule": "Geburtstag joins Geburt and Tag with s. Geburt begins with Ge-burt. Like other nouns it starts with a capital: mein Geburtstag.",
    "example": "Wann hast du Geburtstag?",
    "focus": "Geburtstag",
    "mode": "exact",
    "negative": "Geburstag",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Gerburtstag",
    "wrong": "Gerburtstag",
    "target": "Schreibung des Kompositums Geburtstag",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Geburtstag joins Geburt and Tag with s. Geburt begins with Ge-burt. Like other nouns it starts with a capital: mein Geburtstag."
  },
  {
    "id": 135,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Start a sentence with the word meaning “for that reason”.",
    "answer": "Deshalb",
    "variants": [],
    "rule": "Deshalb is built from des and halb. In sentence-initial position use a capital: Deshalb komme ich.",
    "example": "Es schneit. Deshalb nehme ich den Bus.",
    "focus": "Deshalb",
    "mode": "exact",
    "negative": "Desshalb",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Deshlab",
    "wrong": "Deshlab",
    "target": "Buchstabenfolge und Satzanfang bei deshalb",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Deshalb is built from des and halb. In sentence-initial position use a capital: Deshalb komme ich."
  },
  {
    "id": 136,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Complete Ich war … dort with “yesterday”.",
    "answer": "gestern",
    "variants": [],
    "rule": "Gestern begins with g. Inside a sentence the time adverb stays lowercase: Ich kam gestern.",
    "example": "Ich war gestern im Büro.",
    "focus": "gestern",
    "mode": "exact",
    "negative": "gesterm",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "estern",
    "wrong": "estern",
    "target": "Schreibung von gestern im Satzinneren",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Gestern begins with g. Inside a sentence the time adverb stays lowercase: Ich kam gestern."
  },
  {
    "id": 137,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Write the name of a potato salad.",
    "answer": "Kartoffelsalat",
    "variants": [],
    "rule": "The compound uses Kartoffel in its singular form: Kartoffel + Salat becomes Kartoffelsalat. The whole noun takes one initial capital.",
    "example": "Zum Grillen bringe ich Kartoffelsalat mit.",
    "focus": "Kartoffelsalat",
    "mode": "exact",
    "negative": "Kartoffelsallat",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Kartoffelnsalat",
    "wrong": "Kartoffelnsalat",
    "target": "Erstglied in Kartoffelsalat",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "The compound uses Kartoffel in its singular form: Kartoffel + Salat becomes Kartoffelsalat. The whole noun takes one initial capital."
  },
  {
    "id": 138,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Name a potluck buffet after Das ist …",
    "answer": "ein Mitbringbuffet",
    "variants": [
      "ein Mitbring-Buffet"
    ],
    "rule": "Use the verb stem mitbring- and the noun Buffet, without an extra linking s. In a hyphenated spelling the noun after the hyphen keeps its capital: Mitbring-Buffet.",
    "example": "Jeder bringt etwas für unser Mitbringbuffet mit.",
    "focus": "Mitbringbuffet",
    "mode": "exact",
    "negative": "ein Mitbringsbuffet",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "mitbringsbuffet",
    "wrong": "ein mitbringsbuffet",
    "target": "Mitbringbuffet ohne Fugen-s",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Use the verb stem mitbring- and the noun Buffet, without an extra linking s. In a hyphenated spelling the noun after the hyphen keeps its capital: Mitbring-Buffet."
  },
  {
    "id": 139,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Name one Saturday afternoon after am.",
    "answer": "am Samstagnachmittag",
    "variants": [],
    "rule": "Combine Saturday and afternoon into a single noun: Samstagnachmittag. Compare am Freitagabend. The compound has one initial capital.",
    "example": "Am Sonntagnachmittag besuchen wir Freunde.",
    "focus": "Samstagnachmittag",
    "mode": "exact",
    "negative": "am SamstagNachmittag",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Samstag Nachmittag",
    "wrong": "am Samstag Nachmittag",
    "target": "Zusammenschreibung bei Samstagnachmittag",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Combine Saturday and afternoon into a single noun: Samstagnachmittag. Compare am Freitagabend. The compound has one initial capital."
  },
  {
    "id": 140,
    "category": "Präpositionen & feste Ausdrücke",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Give the destination in Ich gehe … . You mean a male doctor.",
    "answer": "zum Arzt",
    "variants": [
      "zu dem Arzt"
    ],
    "rule": "Zu always takes dative. Zu dem Arzt contracts to zum Arzt. Arzt ends in -rzt. Zur Ärztin is used for a female doctor.",
    "example": "Morgen gehe ich zum Arzt.",
    "focus": "Arzt",
    "mode": "sentence",
    "negative": "zum Artz",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Artz",
    "wrong": "zur Artz",
    "target": "Artikel und Schreibung in zum Arzt",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Zu always takes dative. Zu dem Arzt contracts to zum Arzt. Arzt ends in -rzt. Zur Ärztin is used for a female doctor."
  },
  {
    "id": 141,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Formuliere passend zum Kontext.",
    "context": "Describe your happy mood using an adjective.",
    "answer": "Ich bin sehr glücklich.",
    "variants": [
      "Ich bin sehr froh."
    ],
    "rule": "Glück names a thing or idea. Glücklich describes a person: Ich bin glücklich. Ich habe Glück means I am lucky.",
    "example": "Über die Einladung bin ich sehr glücklich.",
    "focus": "glücklich",
    "mode": "sentence",
    "negative": "Ich bin sehr glücklig.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "glück",
    "wrong": "Ich bin sehr glück.",
    "target": "Adjektiv glücklich gegenüber Nomen Glück",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "Glück names a thing or idea. Glücklich describes a person: Ich bin glücklich. Ich habe Glück means I am lucky."
  },
  {
    "id": 142,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Formuliere passend zum Kontext.",
    "context": "Complete …, weil … . Doing an activity together is fun.",
    "answer": "es Spaß macht, etwas zusammen zu machen",
    "variants": [
      "es Spaß macht, gemeinsam etwas zu tun"
    ],
    "rule": "The expression is Spaß machen. After weil, the finite verb comes after Spaß: weil es Spaß macht, gemeinsam zu kochen. The following infinitive group describes the activity.",
    "example": "Es macht mir Spaß, mit dir zu lernen.",
    "focus": "Spaß macht",
    "mode": "sentence",
    "negative": "es Spaß machen, etwas zusammen zu machen",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "es spaß ist gemeinsam zu tun",
    "target": "Spaß machen und Infinitivgruppe",
    "tolerance": {
      "initial": false,
      "final": true
    },
    "errors": [],
    "hint": "The expression is Spaß machen. After weil, the finite verb comes after Spaß: weil es Spaß macht, gemeinsam zu kochen. The following infinitive group describes the activity."
  },
  {
    "id": 143,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Bitte um einen persönlichen Bericht.",
    "context": "Invite a friend to share experiences from the new job.",
    "answer": "Du kannst mir mehr über deine neue Arbeit erzählen.",
    "variants": [
      "Du kannst mir beim Treffen mehr über deine neue Arbeit erzählen.",
      "Du kannst mir mehr von deiner neuen Arbeit erzählen.",
      "Erzähl mir mehr von deiner neuen Arbeit."
    ],
    "rule": "Erklären means explain how something works and can fit a different intention. Erzählen invites a personal account: Erzähl mir von deiner Arbeit.",
    "example": "Erzähl mir von deinem ersten Arbeitstag.",
    "focus": "erzählen",
    "mode": "sentence",
    "negative": "Du kannst mich mehr über deine neue Arbeit erzählen.",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Du kannst mir mehr über deine neue Arbeit erklären.",
    "target": "Erzählen für einen persönlichen Erfahrungsbericht",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Erklären means explain how something works and can fit a different intention. Erzählen invites a personal account: Erzähl mir von deiner Arbeit."
  },
  {
    "id": 144,
    "category": "Wortschatz & Rechtschreibung",
    "task": "Formuliere passend zum Kontext.",
    "context": "Ask informally how someone's German studies are going.",
    "answer": "Und wie läuft es mit deinem Deutschlernen?",
    "variants": [
      "Und wie läuft es bei dir mit dem Deutschlernen?"
    ],
    "rule": "Use Wie läuft es mit …? Mit takes dative: mit deinem Deutschlernen. A verb version is Wie läuft es bei dir mit dem Deutschlernen?",
    "example": "Wie läuft es mit deinem Sprachkurs?",
    "focus": "deinem Deutschlernen",
    "mode": "sentence",
    "negative": "Wie läuft es mit deinen Deutschlernen?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "deine Deutsch lernen",
    "wrong": "Und wie läuft deine Deutsch lernen?",
    "target": "Nach dem Verlauf des Deutschlernens fragen",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Use Wie läuft es mit …? Mit takes dative: mit deinem Deutschlernen. A verb version is Wie läuft es bei dir mit dem Deutschlernen?"
  },
  {
    "id": 145,
    "category": "Satzstellung & Nebensätze",
    "task": "Mach einen Vorschlag zur Besprechung einer Idee.",
    "context": "Practice context: someone has suggested an idea (die Idee). Suggest talking about it.",
    "answer": "Vielleicht können wir das besprechen.",
    "variants": [
      "Vielleicht besprechen wir das mit den anderen.",
      "Vielleicht können wir das mit den anderen besprechen.",
      "Vielleicht können wir die Idee diskutieren oder besprechen.",
      "Vielleicht können wir das diskutieren oder besprechen.",
      "Vielleicht können wir es diskutieren oder besprechen.",
      "Vielleicht besprechen wir das.",
      "Vielleicht können wir das diskutieren.",
      "Vielleicht können wir es besprechen.",
      "Vielleicht diskutieren wir das.",
      "Vielleicht können wir sie diskutieren oder besprechen.",
      "Vielleicht können wir darüber sprechen.",
      "Vielleicht können wir die Idee besprechen."
    ],
    "rule": "After Vielleicht, put können before wir, or put besprechen directly in second position. Sie can stand for die Idee. With sprechen use darüber. Diskutieren has one s before k. One verb is usually enough; diskutieren oder besprechen repeats the idea.",
    "example": "Vielleicht klären wir das morgen.",
    "focus": "können wir",
    "mode": "sentence",
    "negative": "Vielleicht wir können das besprechen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "wir können",
    "wrong": "Vielleicht wir können sie diskussieren oder besprechen.",
    "target": "Verbzweitstellung bei vielleicht und Schreibung diskutieren",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "After Vielleicht, put können before wir, or put besprechen directly in second position. Sie can stand for die Idee. With sprechen use darüber. Diskutieren has one s before k. One verb is usually enough; diskutieren oder besprechen repeats the idea."
  },
  {
    "id": 146,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Formuliere passend zum Kontext.",
    "context": "Say you personally enrolled in the course starting next week.",
    "answer": "Ich habe mich für den Deutschkurs angemeldet, der nächste Woche beginnt.",
    "variants": [
      "Ich habe mich für den Deutschkurs angemeldet, der nächste Woche anfängt.",
      "Ich habe mich für den Deutschkurs, der nächste Woche beginnt, angemeldet."
    ],
    "rule": "Sich für einen Kurs anmelden needs mich here. The relative pronoun der introduces the relative clause because Kurs is masculine and is the subject of beginnt: der nächste Woche beginnt.",
    "example": "Ich besuche einen Kurs, der am Montag anfängt.",
    "focus": "der",
    "mode": "sentence",
    "negative": "Ich habe mich für den Deutschkurs angemeldet, den nächste Woche beginnt.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die nächste Woche",
    "wrong": "Ich habe den Deutschkurs, die nächste Woche beginnt, angemeldet.",
    "target": "Sich anmelden und Relativpronomen im Nominativ",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "Sich für einen Kurs anmelden needs mich here. The relative pronoun der introduces the relative clause because Kurs is masculine and is the subject of beginnt: der nächste Woche beginnt."
  },
  {
    "id": 147,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Formuliere passend zum Kontext.",
    "context": "Explain your absence on the first day of class.",
    "answer": "Leider kann ich am ersten Kurstag nicht kommen.",
    "variants": [
      "Am ersten Kurstag kann ich leider nicht kommen.",
      "Ich kann leider am ersten Kurstag nicht kommen."
    ],
    "rule": "For a particular day use an + dative: am ersten Kurstag. The adjective after am ends in -en. Leider can go first or after ich kann.",
    "example": "Am zweiten Kurstag bin ich wieder dabei.",
    "focus": "am ersten Kurstag",
    "mode": "sentence",
    "negative": "Leider kann ich am erste Kurstag nicht kommen.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die ersten Kurstag",
    "wrong": "Leider kann ich die ersten Kurstag nicht kommen.",
    "target": "Zeitangabe am ersten Kurstag",
    "tolerance": {
      "initial": true,
      "final": true
    },
    "errors": [],
    "hint": "For a particular day use an + dative: am ersten Kurstag. The adjective after am ends in -en. Leider can go first or after ich kann."
  },
  {
    "id": 148,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Bitte deine Lehrkraft direkt und höflich um das Material.",
    "context": "Address your teacher directly and request the materials by email.",
    "answer": "Könnten Sie mir bitte die Unterrichtsmaterialien per E-Mail schicken?",
    "variants": [
      "Könnten Sie mir die Unterrichtsmaterialien bitte per E-Mail schicken?",
      "Könnten Sie mir bitte das Unterrichtsmaterial per E-Mail schicken?"
    ],
    "rule": "Use Könnten Sie …? for a polite request. Mir names the recipient. Material can be singular as a collective noun or plural as Materialien. Write E-Mail.",
    "example": "Könnten Sie mir bitte das Formular per E-Mail senden?",
    "focus": "E-Mail",
    "mode": "sentence",
    "negative": "Könnten Sie mich bitte die Unterrichtsmaterialien per E-Mail schicken?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die Unterrichtsmaterial",
    "wrong": "Könnten die Lehrer/in bitte die Unterrichtsmaterial per Email schicken?",
    "target": "Höfliche Bitte um Unterrichtsmaterial per E-Mail",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Use Könnten Sie …? for a polite request. Mir names the recipient. Material can be singular as a collective noun or plural as Materialien. Write E-Mail."
  },
  {
    "id": 149,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Frage nach den Materialien im Portal.",
    "context": "Ask whether the class materials are available in the student portal.",
    "answer": "Oder kann ich die Materialien im Lernportal finden?",
    "variants": [
      "Kann ich die Unterrichtsmaterialien alternativ im Lernportal finden?",
      "Oder kann ich das über das Studentenportal finden?"
    ],
    "rule": "Use im for a location in a portal. Über plus accusative can describe a way of accessing something: über das Portal. Portal is neuter.",
    "example": "Die Aufgaben stehen im Kursportal.",
    "focus": "im Lernportal",
    "mode": "sentence",
    "negative": "Kann ich die Materialien in der Lernportal finden?",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "die Studenten Portal",
    "wrong": "Oder kann ich das über die Studenten Portal finden?",
    "target": "Zugriff auf ein Lernportal formulieren",
    "tolerance": {
      "initial": true,
      "final": false
    },
    "errors": [],
    "hint": "Use im for a location in a portal. Über plus accusative can describe a way of accessing something: über das Portal. Portal is neuter."
  },
  {
    "id": 150,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Bitte um Erlaubnis.",
    "context": "Ask for permission to join from Tuesday. Change the statement into a question.",
    "answer": "Kann ich ab Dienstag am Unterricht teilnehmen?",
    "variants": [
      "Darf ich ab Dienstag am Unterricht teilnehmen?",
      "Dürfte ich ab Dienstag am Unterricht teilnehmen?"
    ],
    "rule": "The original is a correct statement of willingness. To ask permission, begin with Darf ich or Kann ich. With a modal, teilnehmen stays together at the end.",
    "example": "Darf ich nächste Woche mitmachen?",
    "focus": "Kann ich",
    "mode": "sentence",
    "negative": "Darf ich ab Dienstag am Unterricht teilnehme?",
    "sourceVerdict": "context",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Ich nehme gerne ab Dienstag am Unterricht teil.",
    "target": "Bereitschaft in eine Erlaubnisfrage umformen",
    "tolerance": {
      "initial": true,
      "final": false
    },
    "errors": [],
    "hint": "The original is a correct statement of willingness. To ask permission, begin with Darf ich or Kann ich. With a modal, teilnehmen stays together at the end."
  },
  {
    "id": 151,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Bitte höflich um Rückmeldung.",
    "context": "Ask a formal reader to tell you whether the plan suits them.",
    "answer": "Bitte teilen Sie mir mit, ob das möglich ist.",
    "variants": [
      "Bitte sagen Sie mir, ob das möglich ist.",
      "Bitte geben Sie mir Bescheid, ob das passt."
    ],
    "rule": "Ob asks for a yes or a no. Mitteilen separates in a main clause: Teilen Sie mir mit, ob … . Sich melden can also work: Melden Sie sich bitte bei mir.",
    "example": "Bitte sagen Sie mir, ob Ihnen der Termin passt.",
    "focus": "ob",
    "mode": "sentence",
    "negative": "Bitte teilen Sie mich mit, ob das passt.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "melden Sie mir",
    "wrong": "Bitte melden Sie mir gerne wenn das passt.",
    "target": "Formelle Rückfrage mit ob",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Ob asks for a yes or a no. Mitteilen separates in a main clause: Teilen Sie mir mit, ob … . Sich melden can also work: Melden Sie sich bitte bei mir."
  },
  {
    "id": 152,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Schreibe den Ausdruck richtig.",
    "context": "Thank a formal reader for their understanding.",
    "answer": "Vielen Dank für Ihr Verständnis.",
    "variants": [
      "Ich danke Ihnen für Ihr Verständnis.",
      "Vielen Dank für das Verständnis."
    ],
    "rule": "Dank and Verständnis are nouns. Verständnis is neuter, so use Ihr after für here. The formal possessive keeps its capital I.",
    "example": "Vielen Dank für Ihre Hilfe.",
    "focus": "Ihr Verständnis",
    "mode": "sentence",
    "negative": "Vielen Dank für Ihre Verständnis.",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "dank",
    "wrong": "Vielen dank für Ihre verständnis.",
    "target": "Formales Ihr und Genus von Verständnis",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Dank and Verständnis are nouns. Verständnis is neuter, so use Ihr after für here. The formal possessive keeps its capital I."
  },
  {
    "id": 153,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Schreibe nur die Grußformel.",
    "context": "Give only the conventional closing line of a formal letter.",
    "answer": "Mit freundlichen Grüßen",
    "variants": [],
    "rule": "Mit takes dative plural: freundlichen Grüßen. The noun keeps ü and ß. Leave the closing line without a final comma, then sign on the next line.",
    "example": "Freundliche Grüße",
    "focus": "Grüßen",
    "mode": "exact",
    "negative": "Mit freundlichen Grüßen,",
    "sourceVerdict": "target",
    "contextForms": [],
    "originalFocus": "Grüße,",
    "wrong": "Mit freundlichen Grüße,",
    "target": "Dativ Plural und Zeichensetzung der Schlussformel",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "Mit takes dative plural: freundlichen Grüßen. The noun keeps ü and ß. Leave the closing line without a final comma, then sign on the next line."
  },
  {
    "id": 154,
    "category": "E-Mail & Aufgabenstellung",
    "task": "Schreibe die Anrede und den ganzen Geburtstagswunsch auf zwei Zeilen.",
    "context": "Use Hallo Nina, on its own line. Continue with congratulations on a birthday.",
    "answer": "Hallo Nina,\nherzlichen Glückwunsch zum Geburtstag!",
    "variants": [
      "Hallo Nina,\nherzlichen Glückwunsch zu deinem Geburtstag!",
      "Hallo Nina,\nherzlichen Glückwunsch zum Geburtstag."
    ],
    "rule": "A greeting ending in a comma continues into the next line, so herzlichen starts lowercase. After an exclamation mark a new sentence would start with Herzlichen. Use the comma format here.",
    "example": "Liebe Anna,\nvielen Dank für deine Einladung!",
    "focus": "herzlichen",
    "mode": "letter",
    "negative": "Hallo Nina,\nHerzlichen Glückwunsch zum Geburtstag!",
    "sourceVerdict": "unknown",
    "contextForms": [],
    "originalFocus": "",
    "wrong": "Hallo Nina, Herzlichen Glückwunsch ...",
    "target": "Komma, Zeilenumbruch und Kleinschreibung nach Briefanrede",
    "tolerance": {
      "initial": false,
      "final": false
    },
    "errors": [],
    "hint": "A greeting ending in a comma continues into the next line, so herzlichen starts lowercase. After an exclamation mark a new sentence would start with Herzlichen. Use the comma format here."
  }
];
