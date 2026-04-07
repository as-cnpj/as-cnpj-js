# API

Languages: [Português (Brasil)](api.md) | **English** | [Español](api.es.md) | [Français](api.fr.md)

## Main functions

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

## Explicit aliases

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Notes

- `normalize` sanitizes and uppercases but does not validate;
- `isValid` returns `true` or `false`;
- `format` returns masked CNPJ or `null`;
- `assertValid` returns normalized CNPJ or throws `TypeError`;
- check digits use modulo 11 with `ASCII - 48`.

