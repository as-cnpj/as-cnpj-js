<div align="center">
  <img src="https://raw.githubusercontent.com/as-cnpj/as-cnpj-js/main/assets/brand/as-cnpj-logo-dark.svg" alt="AS-CNPJ JS" width="860" />
</div>

<p align="center">
  Biblioteca autoral do ecossistema AS-CNPJ para validação, normalização, formatação e cálculo de dígitos verificadores de CNPJ numérico e alfanumérico em JavaScript e TypeScript.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ascnpj/core">npm</a> ·
  <a href="https://as-cnpj.org">Site</a> ·
  <a href="https://github.com/as-cnpj/as-cnpj">Hub do ecossistema</a> ·
  <a href="https://github.com/as-cnpj/as-cnpj-js/blob/main/docs/api.md">API</a> ·
  <a href="https://github.com/as-cnpj/as-cnpj-js/blob/main/test/README.md">Testes</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ascnpj/core"><img alt="npm @ascnpj/core" src="https://img.shields.io/npm/v/%40ascnpj%2Fcore?style=flat-square&label=npm&labelColor=1C1917&color=F97316"></a>
  <a href="https://github.com/as-cnpj/as-cnpj-js/actions/workflows/ci.yml"><img alt="CI as-cnpj-js" src="https://img.shields.io/github/actions/workflow/status/as-cnpj/as-cnpj-js/ci.yml?branch=main&style=flat-square&label=ci&labelColor=1C1917"></a>
  <a href="https://github.com/as-cnpj/as-cnpj-js/blob/main/LICENSE"><img alt="License MIT" src="https://img.shields.io/github/license/as-cnpj/as-cnpj-js?style=flat-square&label=license&labelColor=1C1917&color=84A870"></a>
  <a href="https://as-cnpj.org"><img alt="Site as-cnpj.org" src="https://img.shields.io/badge/as--cnpj.org-documentação-FB923C?style=flat-square&labelColor=1C1917"></a>
</p>

Idiomas: **Português (Brasil)** | [English](https://github.com/as-cnpj/as-cnpj-js/blob/main/README.en.md) | [Español](https://github.com/as-cnpj/as-cnpj-js/blob/main/README.es.md) | [Français](https://github.com/as-cnpj/as-cnpj-js/blob/main/README.fr.md)

## Status

- repositório público e ativo;
- pacote em fase inicial `0.x`;
- publicado no npm como [`@ascnpj/core`](https://www.npmjs.com/package/@ascnpj/core);
- Trusted Publishing configurado via GitHub Actions;
- algoritmo validado por testes automatizados e vetores compartilhados do ecossistema.

## Instalação

```bash
npm install @ascnpj/core
```

## Exemplo rápido

```js
import {
  assertValid,
  calculateCNPJCheckDigits,
  format,
  isValid,
  normalize
} from "@ascnpj/core";

isValid("12.ABC.345/01DE-35");
normalize("12.abc.345/01de-35");
format("12ABC34501DE35");
assertValid("12.ABC.345/01DE-35", { strict: true });
calculateCNPJCheckDigits("12ABC34501DE");
```

## Casos de uso

- formulários web e cadastros B2B que precisam aceitar o legado e o novo padrão;
- APIs Node.js que validam e normalizam CNPJ antes de persistir;
- integrações com ERP, faturamento, compliance e onboarding;
- suites de teste e homologação que precisam gerar e validar exemplos consistentes.

## O que esta biblioteca entrega

- validação de CNPJ numérico legado;
- validação de CNPJ alfanumérico previsto pela Receita Federal para julho de 2026;
- suporte a entradas com máscara e sem máscara;
- modo permissivo e modo estrito;
- zero dependências de runtime no pacote;
- consistência com vetores compartilhados do hub.

## API pública

Funções principais:

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`
- `validateMany(values, options?)`

Aliases explícitos:

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`
- `validateManyCNPJ(values, options?)`

## Validação em lote

Além da API unitária, a biblioteca expõe:

- `validateMany(values, options?)`
- `validateManyCNPJ(values, options?)`

O retorno preserva a ordem de entrada e entrega:

- `items`: resultado item a item com `index`, `input`, `normalized`, `formatted`, `valid`, `strictValid` e `reason`;
- `summary`: total, válidos, inválidos e contagem agregada por motivo.

```js
import { validateMany } from "@ascnpj/core";

const result = validateMany([
  "12.ABC.345/01DE-35",
  "12.ABC.345/01DE-36",
  null
]);

result.items[0].valid;
result.items[1].reason;
result.summary.reasons;
```

## Garantias centrais

- aceita `A-Z0-9` nos 12 primeiros caracteres;
- mantém os 2 dígitos verificadores como numéricos;
- usa módulo 11 com conversão `ASCII - 48`;
- normaliza entrada para caixa alta;
- rejeita repetições triviais inválidas;
- trata segurança de publicação e supply chain como parte do projeto.

## Documentação e referências

- [API da biblioteca](https://github.com/as-cnpj/as-cnpj-js/blob/main/docs/api.md)
- [Estratégia de testes](https://github.com/as-cnpj/as-cnpj-js/blob/main/test/README.md)
- [Checklist de release](https://github.com/as-cnpj/as-cnpj-js/blob/main/docs/release-checklist.md)
- [Política de segurança](https://github.com/as-cnpj/as-cnpj-js/blob/main/SECURITY.md)
- [Hub do ecossistema AS-CNPJ](https://github.com/as-cnpj/as-cnpj)

## Vetores compartilhados

O `as-cnpj-js` não define a verdade sozinho.

O contrato do ecossistema depende também de:

- vetores compartilhados no hub;
- regras documentadas a partir das fontes oficiais;
- convergência entre implementações futuras em outras linguagens.

## Manutenção

Maintainer: `@0moura`  
Contato institucional: `ascnpj@0moura.io`
