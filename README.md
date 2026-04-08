# AS-CNPJ JS

Idiomas: **Português (Brasil)** | [English](README.en.md) | [Español](README.es.md) | [Français](README.fr.md)

[![npm version](https://img.shields.io/npm/v/%40ascnpj%2Fcore)](https://www.npmjs.com/package/@ascnpj/core)
[![CI](https://github.com/as-cnpj/as-cnpj-js/actions/workflows/ci.yml/badge.svg)](https://github.com/as-cnpj/as-cnpj-js/actions/workflows/ci.yml)

Biblioteca autoral para validação de CNPJ numérico e alfanumérico em JavaScript e TypeScript.

Repositório: `https://github.com/as-cnpj/as-cnpj-js`

## Status

- repositório público e ativo;
- pacote em fase inicial `0.x`;
- pacote publicado no npm como [`@ascnpj/core`](https://www.npmjs.com/package/@ascnpj/core);
- algoritmo já validado com testes automatizados e vetores compartilhados do ecossistema.

## Instalação

```bash
npm install @ascnpj/core
```

## Comece por aqui

- [API da biblioteca](docs/api.md)
- [Estratégia de testes](test/README.md)
- [Checklist de release](docs/release-checklist.md)
- [Política de segurança](SECURITY.md)
- [Hub do ecossistema AS-CNPJ](https://github.com/as-cnpj/as-cnpj)

## O que esta biblioteca resolve

Esta biblioteca existe para cobrir, com uma única API, a coexistência entre:

- CNPJ legado numérico;
- CNPJ alfanumérico previsto pela Receita Federal para julho de 2026;
- entradas com máscara e sem máscara;
- fluxos permissivos e fluxos com validação estrita.

Ela implementa:

- validação;
- normalização;
- formatação;
- cálculo de dígitos verificadores;
- consistência com vetores compartilhados do ecossistema.

## Exemplos rápidos

Validação e normalização:

```js
import { isValid, normalize } from "@ascnpj/core";

isValid("12.ABC.345/01DE-35");
normalize("12.abc.345/01de-35");
```

Formatação para UI:

```js
import { format } from "@ascnpj/core";

format("12ABC34501DE35");
```

Borda estrita de API:

```js
import { isValidCNPJ } from "@ascnpj/core";

isValidCNPJ("12.ABC.345/01DE-35", { strict: true });
```

Geração de fixtures e testes:

```js
import { calculateCNPJCheckDigits } from "@ascnpj/core";

calculateCNPJCheckDigits("12ABC34501DE");
```

## Casos de uso

- formulários web e cadastros B2B que precisam aceitar o legado e o novo padrão;
- APIs Node.js que validam e normalizam CNPJ antes de persistir;
- integrações com ERP, faturamento, compliance e onboarding;
- suites de teste e homologação que precisam gerar e validar exemplos consistentes.

## Garantias centrais

- aceita `A-Z0-9` nos 12 primeiros caracteres;
- mantém os 2 dígitos verificadores como numéricos;
- usa módulo 11 com conversão `ASCII - 48`;
- normaliza entrada para caixa alta;
- rejeita repetições triviais inválidas;
- suporta modo permissivo e modo estrito;
- zero dependências de runtime no pacote.

## API pública

Funções principais:

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

## Testes

Execução direta:

```bash
node test/run.js
```

O conjunto de testes cobre:

- casos positivos numéricos;
- casos positivos alfanuméricos;
- casos negativos;
- modo estrito;
- consistência entre aliases;
- vetores compartilhados do hub.

## Publicação

- pacote npm: [`@ascnpj/core`](https://www.npmjs.com/package/@ascnpj/core);
- zero dependências de runtime;
- `.env` e `.npmrc` protegidos por `.gitignore`;
- CI preparada para checagem de sintaxe, testes e conteúdo do pacote;
- workflow de release alinhado a Trusted Publishing via GitHub Actions;
- provenance emitida automaticamente no fluxo de release.

## Vetores compartilhados

O `as-cnpj-js` não define a verdade sozinho.

O contrato do ecossistema também depende de:

- vetores compartilhados no hub;
- regras documentadas a partir das fontes oficiais;
- convergência entre implementações futuras em outras linguagens.

## Ecossistema

Org GitHub:

- `https://github.com/as-cnpj`

Hub do projeto:

- manifesto;
- documentação consolidada;
- vetores compartilhados;
- governança entre linguagens.

## Manutenção

Maintainer:

- `@0moura`

Contato institucional:

- `ascnpj@0moura.io`
