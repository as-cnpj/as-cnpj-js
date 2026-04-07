# Release Checklist

Idiomas: **Português (Brasil)** | [English](release-checklist.en.md) | [Español](release-checklist.es.md) | [Français](release-checklist.fr.md)

## Regra

Nenhum push publico deve acontecer sem revisar este checklist.

## Conteudo publico

- README revisado e coerente com o estado real do projeto.
- Sem texto residual de seed, extracao ou rascunho interno.
- Sem links quebrados para hub, issues, homepage ou repos inexistentes.
- Changelog coerente com o estado da release.
- Metadados do pacote consistentes com o repositorio publicado.

## Validacao tecnica

- `node --check src/cnpj.js`
- `node --check src/index.js`
- `node --check test/cnpj.test.js`
- `node --test --experimental-test-isolation=none test/cnpj.test.js`

## Publicacao

- `package.json` com `name`, `version`, `repository`, `bugs`, `homepage` e `publishConfig` corretos.
- Licenca definida.
- Vetores compartilhados presentes.
- API documentada em `docs/api.md`.
- Decisoes principais documentadas em `docs/decisoes.md`.

## Gate final

So publicar quando:

- o conteudo estiver apto para leitura publica;
- os testes estiverem verdes;
- o pacote estiver apto para distribuicao.
