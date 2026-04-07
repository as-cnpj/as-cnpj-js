# AS-CNPJ JS

Idiomas: **Português (Brasil)** | [English](README.en.md) | [Español](README.es.md) | [Français](README.fr.md)

Biblioteca autoral para validação de CNPJ numérico e alfanumérico em JavaScript e TypeScript.

Repositório: `https://github.com/as-cnpj/as-cnpj-js`

## Status

- repositório público e ativo;
- pacote em fase inicial `0.x`;
- publicação em registry ainda pendente;
- algoritmo já validado com testes automatizados e vetores compartilhados do ecossistema.

## Pronto para npm

- pacote definido como `@ascnpj/core`;
- zero dependências de runtime;
- `.env` e `.npmrc` protegidos por `.gitignore`;
- CI preparada para checagem de sintaxe, testes e conteúdo do pacote;
- publicação com provenance recomendada no próximo passo de release.

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

## Garantias centrais

- aceita `A-Z0-9` nos 12 primeiros caracteres;
- mantém os 2 dígitos verificadores como numéricos;
- usa módulo 11 com conversão `ASCII - 48`;
- normaliza entrada para caixa alta;
- rejeita repetições triviais inválidas;
- suporta modo permissivo e modo estrito.

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

## Exemplo mínimo

```js
import {
  format,
  isValid,
  normalize
} from "@ascnpj/core";

isValid("12.ABC.345/01DE-35");
normalize("12.abc.345/01de-35");
format("12ABC34501DE35");
```

## Modo estrito

Quando `strict` está ativo, a entrada precisa chegar em um dos formatos canônicos:

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

Exemplo:

```js
isValid("12.ABC.345/01DE-35", { strict: true });
```

## Testes

Execução direta:

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

O conjunto de testes cobre:

- casos positivos numéricos;
- casos positivos alfanuméricos;
- casos negativos;
- modo estrito;
- consistência entre aliases;
- vetores compartilhados do hub.

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
