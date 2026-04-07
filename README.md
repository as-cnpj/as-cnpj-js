# AS-CNPJ JS

Idiomas: **Português (Brasil)** | [English](README.en.md) | [Español](README.es.md) | [Français](README.fr.md)

Biblioteca autoral do ecossistema AS-CNPJ para JavaScript e TypeScript.

Repositório: `https://github.com/as-cnpj/as-cnpj-js`

Status atual:

- repositório publicado;
- pacote em fase inicial `0.x`;
- publicação no npm ainda pendente.

## O que a biblioteca faz

Esta biblioteca implementa:

- validação de CNPJ numérico;
- validação de CNPJ alfanumérico;
- normalização para formato canônico sem máscara;
- formatação mascarada;
- cálculo dos dígitos verificadores;
- validação em modo permissivo e em modo estrito.

## Escopo

Ela foi desenhada para lidar com a coexistência entre:

- CNPJ legado, somente numérico;
- CNPJ alfanumérico, previsto pela Receita Federal para julho de 2026.

Os dois formatos são suportados pela mesma API.

## Regras centrais

- os 12 primeiros caracteres aceitam `A-Z0-9`;
- os 2 últimos caracteres continuam numéricos;
- o DV usa módulo 11;
- a conversão de caracteres usa `ASCII - 48`;
- a entrada é normalizada para caixa alta;
- entradas mascaradas e sem máscara são aceitas;
- repetições triviais inválidas são rejeitadas.

## API

API curta:

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

Aliases explícitos:

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Instalação

Publicação em registry ainda não foi feita.

Até a primeira release de pacote, use o repositório como referência técnica e para integração local.

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

Quando `strict` está ativo, a entrada precisa chegar em um formato canônico:

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

## Ecossistema

O ecossistema fica na org:

- `https://github.com/as-cnpj`

E centraliza:

- manifesto;
- documentação oficial consolidada;
- vetores de teste compartilhados;
- governança entre linguagens.

## Maintenance

Maintainer:

- `@0moura`

Security contact:

- `ascnpj@0moura.io`
