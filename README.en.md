# AS-CNPJ JS

Languages: [Português (Brasil)](README.md) | **English** | [Español](README.es.md) | [Français](README.fr.md)

Author-led AS-CNPJ library for JavaScript and TypeScript.

Repository: `https://github.com/as-cnpj/as-cnpj-js`

## What the library does

This library provides:

- numeric CNPJ validation;
- alphanumeric CNPJ validation;
- canonical normalization without mask;
- masked formatting;
- check digit calculation;
- permissive and strict validation modes.

## Key rules

- the first 12 characters accept `A-Z0-9`;
- the last 2 characters remain numeric;
- check digits use modulo 11;
- character conversion uses `ASCII - 48`;
- input is normalized to uppercase;
- masked and unmasked inputs are accepted;
- trivial repeated values are rejected.

## Status

- repository published;
- package still in early `0.x` stage;
- npm publication still pending.

## Maintenance

Maintainer: `@0moura`  
Security contact: `ascnpj@0moura.io`

