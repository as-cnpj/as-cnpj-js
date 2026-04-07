# AS-CNPJ JS Seed

Semente pronta para extracao do futuro repositorio `as-cnpj-js`.

## Posicionamento

Esta biblioteca implementa validacao, normalizacao, formatacao e calculo de DV para:

- CNPJ numerico legado;
- CNPJ alfanumerico;
- entradas com mascara e sem mascara.

O objetivo aqui nao e permanecer para sempre dentro do hub, e sim servir como base imediata do primeiro repo de runtime da org.

## Status

Estado atual: **ready for extraction**

Destino:

- `https://github.com/as-cnpj/as-cnpj-js`

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
  format,
  isValid,
  normalize
} from "./src/index.js";

isValid("12.ABC.345/01DE-35");
normalize("12.abc.345/01de-35");
format("12ABC34501DE35");
```

## Regras adotadas

- suporta CNPJ numerico e alfanumerico;
- normaliza entrada para caixa alta;
- aceita entrada mascarada e sem mascara;
- oferece modo `strict`;
- DV baseado em modulo 11 com conversao `ASCII - 48`;
- rejeita repeticoes triviais.

## Testes

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

## Relacao com o hub

Enquanto o repo dedicado nao for extraido:

- manifesto e governanca ficam no hub `as-cnpj`;
- vetores compartilhados ficam no hub `as-cnpj`;
- esta biblioteca prova conformidade contra esses vetores.
