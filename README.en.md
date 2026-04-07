# AS-CNPJ JS

Languages: [Português (Brasil)](README.md) | **English** | [Español](README.es.md) | [Français](README.fr.md)

Author library for numeric and alphanumeric CNPJ validation in JavaScript and TypeScript.

Repository: `https://github.com/as-cnpj/as-cnpj-js`

## Status

- public and active repository;
- package still in early `0.x` stage;
- registry publication still pending;
- algorithm already validated with automated tests and shared ecosystem vectors.

## Ready for npm

- package defined as `@ascnpj/core`;
- zero runtime dependencies;
- `.env` and `.npmrc` protected by `.gitignore`;
- CI prepared for syntax checks, tests, and package-content verification;
- release workflow prepared for npm publication with `provenance`.

## Start here

- [Library API](docs/api.md)
- [Test strategy](test/README.md)
- [Release checklist](docs/release-checklist.md)
- [Security policy](SECURITY.md)
- [AS-CNPJ ecosystem hub](https://github.com/as-cnpj/as-cnpj)

## What this library solves

This library exists to cover, through a single API, the coexistence between:

- legacy numeric CNPJ;
- alphanumeric CNPJ expected by Receita Federal for July 2026;
- masked and unmasked input;
- permissive and strict validation flows.

It implements:

- validation;
- normalization;
- formatting;
- check digit calculation;
- consistency with shared ecosystem vectors.

## Core guarantees

- accepts `A-Z0-9` in the first 12 characters;
- keeps the 2 check digits numeric;
- uses modulo 11 with `ASCII - 48` conversion;
- normalizes input to uppercase;
- rejects trivial invalid repetitions;
- supports permissive and strict modes.

## Public API

Main functions:

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

Explicit aliases:

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Minimal example

```js
import {
  format,
  isValid,
  normalize
} from "@ascnpj/core";

isValid("12.ABC.345/01DE-35");
normalize("12.abc.345/01de-35");
format("12ABC34501DE35");
```

## Strict mode

When `strict` is active, input must arrive in one of the canonical formats:

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

Example:

```js
isValid("12.ABC.345/01DE-35", { strict: true });
```

## Tests

Direct execution:

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

The test suite covers:

- positive numeric cases;
- positive alphanumeric cases;
- negative cases;
- strict mode;
- alias consistency;
- shared hub vectors.

## Shared vectors

`as-cnpj-js` does not define the truth by itself.

The ecosystem contract also depends on:

- shared vectors in the hub;
- documented rules derived from official sources;
- convergence with future implementations in other languages.

## Ecosystem

GitHub org:

- `https://github.com/as-cnpj`

Project hub:

- manifesto;
- consolidated documentation;
- shared vectors;
- cross-language governance.

## Maintenance

Maintainer:

- `@0moura`

Institutional contact:

- `ascnpj@0moura.io`
