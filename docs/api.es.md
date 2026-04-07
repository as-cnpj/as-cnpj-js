# API

Idiomas: [Português (Brasil)](api.md) | [English](api.en.md) | **Español** | [Français](api.fr.md)

## Funciones principales

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

## Alias explícitos

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Notas

- `normalize` sanea y convierte a mayúsculas, pero no valida;
- `isValid` devuelve `true` o `false`;
- `format` devuelve el CNPJ con máscara o `null`;
- `assertValid` devuelve el CNPJ normalizado o lanza `TypeError`;
- los dígitos verificadores usan módulo 11 con `ASCII - 48`.

