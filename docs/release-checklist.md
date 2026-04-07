# Release Checklist

Idiomas: **Português (Brasil)** | [English](release-checklist.en.md) | [Español](release-checklist.es.md) | [Français](release-checklist.fr.md)

## Regra

Nenhum push público deve acontecer sem revisar este checklist.

## Conteúdo Público

- README revisado e coerente com o estado real do projeto.
- Sem texto residual de seed, extração ou rascunho interno.
- Sem links quebrados para hub, issues, homepage ou repos inexistentes.
- Changelog coerente com o estado da release.
- Metadados do pacote consistentes com o repositório publicado.

## Validação Técnica

- `node --check src/cnpj.js`
- `node --check src/index.js`
- `node --check test/cnpj.test.js`
- `node --test --experimental-test-isolation=none test/cnpj.test.js`

## Publicação

- `package.json` com `name`, `version`, `repository`, `bugs`, `homepage` e `publishConfig` corretos.
- Licença definida.
- Vetores compartilhados presentes.
- API documentada em `docs/api.md`.
- Decisões principais documentadas em `docs/decisoes.md`.
- Secret `NPM_TOKEN` configurado no GitHub.
- Release criada no GitHub com tag no formato `vX.Y.Z`.
- Tag da release coerente com a versão presente em `package.json`.
- Workflow [`.github/workflows/release.yml`](../.github/workflows/release.yml) apto a publicar com `npm publish --access public --provenance`.

## Gate final

Só publicar quando:

- o conteúdo estiver apto para leitura pública;
- os testes estiverem verdes;
- o pacote estiver apto para distribuição.
- a branch `main` estiver protegida com review e status checks obrigatórios.
