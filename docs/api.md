# API

## Funcoes principais

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

## Aliases explicitos

Tambem existem aliases nomeados com `CNPJ`:

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## `normalize(value)`

Converte para caixa alta e remove tudo que nao seja `A-Z0-9`.

## `isValid(value, options?)`

Retorna `true` ou `false`.

Opcoes:

- `strict: boolean`

Quando `strict` esta ativo, a entrada precisa estar em um dos formatos canonicos:

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

## `format(value, options?)`

Retorna o CNPJ mascarado quando valido.

Retorna `null` quando invalido.

## `assertValid(value, options?)`

Retorna o CNPJ normalizado quando valido.

Lanca `TypeError` quando invalido.

## `calculateCheckDigits(base12)`

Recebe os 12 caracteres-base e retorna os 2 digitos verificadores.

## Regras

- suporta CNPJ numerico e alfanumerico;
- DV continua numerico;
- calculo por modulo 11;
- conversao `ASCII - 48`;
- coexistencia entre formatos.
