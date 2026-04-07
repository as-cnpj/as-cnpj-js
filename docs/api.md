# API

Idiomas: **Português (Brasil)** | [English](api.en.md) | [Español](api.es.md) | [Français](api.fr.md)

## Funções Principais

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

## Aliases Explícitos

Também existem aliases nomeados com `CNPJ`:

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## `normalize(value)`

Converte para caixa alta e remove tudo que não seja `A-Z0-9`.

**Importante**: esta função não valida o CNPJ. O retorno pode não ser um CNPJ válido.
Use `isValid` após normalizar quando precisar de garantia de validade.

Lança `TypeError` se a entrada não for string.

## `isValid(value, options?)`

Retorna `true` ou `false`.

Opções:

- `strict: boolean`

Quando `strict` está ativo, a entrada precisa estar em um dos formatos canônicos:

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

## `format(value, options?)`

Retorna o CNPJ mascarado quando válido.

Retorna `null` quando inválido.

## `assertValid(value, options?)`

Retorna o CNPJ normalizado quando válido.

Lança `TypeError` quando inválido.

## `calculateCheckDigits(base12)`

Recebe os 12 caracteres-base e retorna os 2 dígitos verificadores.

## Regras

- suporta CNPJ numérico e alfanumérico;
- DV continua numérico;
- cálculo por módulo 11;
- conversão `ASCII - 48`;
- coexistência entre formatos.
