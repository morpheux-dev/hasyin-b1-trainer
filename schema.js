const PACKAGE_SCHEMA = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "type": {
      "enum": [
        "learning-package"
      ]
    },
    "version": {
      "enum": [
        1
      ]
    },
    "id": {
      "type": "string",
      "pattern": "^pkg-[a-z0-9]+(?:-[a-z0-9]+)*$",
      "maxLength": 80
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "created": {
      "type": "string",
      "format": "date",
      "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
    },
    "description": {
      "type": "string",
      "minLength": 1,
      "maxLength": 500
    },
    "cards": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^pkg-[a-z0-9]+(?:-[a-z0-9]+)*:[0-9]{4}$",
            "maxLength": 85
          },
          "category": {
            "enum": [
              "Satzstellung & Nebensätze",
              "Verben, Modalverben & Zeitformen",
              "Artikel, Fälle & Pronomen",
              "Präpositionen & feste Ausdrücke",
              "E-Mail & Aufgabenstellung",
              "Wortschatz & Rechtschreibung"
            ]
          },
          "wrong": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "task": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "target": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "context": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "answer": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "variants": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 2000
            },
            "maxItems": 100
          },
          "rule": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "example": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "focus": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "mode": {
            "enum": [
              "sentence",
              "exact",
              "letter"
            ]
          },
          "negative": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "sourceVerdict": {
            "enum": [
              "target",
              "context",
              "unknown"
            ]
          },
          "contextForms": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 2000
            },
            "maxItems": 50
          },
          "originalFocus": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "tolerance": {
            "type": "object",
            "properties": {
              "initial": {
                "type": "boolean"
              },
              "final": {
                "type": "boolean"
              }
            },
            "required": [
              "initial",
              "final"
            ],
            "additionalProperties": false
          },
          "errors": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "form": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 2000
                },
                "span": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 2000
                },
                "hint": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 2000
                }
              },
              "required": [
                "form",
                "hint"
              ],
              "additionalProperties": false
            },
            "maxItems": 50
          },
          "hint": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "id",
          "category",
          "wrong",
          "task",
          "target",
          "answer",
          "rule",
          "example",
          "focus",
          "mode",
          "negative",
          "sourceVerdict",
          "tolerance",
          "hint"
        ],
        "additionalProperties": false
      },
      "maxItems": 1000,
      "minItems": 1
    }
  },
  "required": [
    "type",
    "version",
    "id",
    "name",
    "created",
    "cards"
  ],
  "additionalProperties": false
};
