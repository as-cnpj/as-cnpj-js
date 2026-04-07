# AS-CNPJ JS

Biblioteca oficial do ecossistema AS-CNPJ para JavaScript e TypeScript.

Repositorio: `https://github.com/as-cnpj/as-cnpj-js`

## O que a biblioteca faz

Esta biblioteca implementa:

- validacao de CNPJ numerico;
- validacao de CNPJ alfanumerico;
- normalizacao para formato canonico sem mascara;
- formatacao mascarada;
- calculo dos digitos verificadores;
- validacao em modo permissivo e em modo estrito.

## Escopo

Ela foi desenhada para lidar com a coexistencia entre:

- CNPJ legado, somente numerico;
- CNPJ alfanumerico, previsto pela Receita Federal para julho de 2026.

Os dois formatos sao suportados pela mesma API.

## Regras centrais

- os 12 primeiros caracteres aceitam `A-Z0-9`;
- os 2 ultimos caracteres continuam numericos;
- o DV usa modulo 11;
- a conversao de caracteres usa `ASCII - 48`;
- a entrada e normalizada para caixa alta;
- entradas mascaradas e sem mascara sao aceitas;
- repeticoes triviais invalidas sao rejeitadas.

## API

API curta:

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

Aliases explicitos:

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Exemplo

```js
import {
  calculateCheckDigits,
  format,
  isValid,
  normalize
} from "@as-cnpj/core";

isValid("12.ABC.345/01DE-35");
normalize("12.abc.345/01de-35");
format("12ABC34501DE35");
calculateCheckDigits("12ABC34501DE");
```

## Modo estrito

Quando `strict` esta ativo, a entrada precisa chegar em um formato canonico:

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

Exemplo:

```js
isValid("12.ABC.345/01DE-35", { strict: true });
```

## Desenvolvimento local

Executar testes:

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

## Vetores de teste

O projeto usa vetores compartilhados do ecossistema AS-CNPJ e inclui o exemplo oficial:

- `12.ABC.345/01DE-35`

## Status

Estado atual:

- biblioteca publicada em repositorio proprio;
- API principal definida;
- pacote ainda em fase inicial `0.x`.

## Ecossistema

O hub do projeto fica em:

- `https://github.com/as-cnpj/as-cnpj`

E centraliza:

- manifesto;
- documentacao oficial consolidada;
- vetores de teste compartilhados;
- governanca entre linguagens.

