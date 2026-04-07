# API

Langues : [Português (Brasil)](api.md) | [English](api.en.md) | [Español](api.es.md) | **Français**

## Fonctions principales

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

## Alias explicites

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Notes

- `normalize` nettoie et met en majuscules, mais ne valide pas ;
- `isValid` renvoie `true` ou `false` ;
- `format` renvoie le CNPJ masqué ou `null` ;
- `assertValid` renvoie le CNPJ normalisé ou lance `TypeError` ;
- les chiffres de contrôle utilisent le modulo 11 avec `ASCII - 48`.

