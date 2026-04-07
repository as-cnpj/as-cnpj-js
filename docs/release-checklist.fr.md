# Checklist de Release

Langues : [Português (Brasil)](release-checklist.md) | [English](release-checklist.en.md) | [Español](release-checklist.es.md) | **Français**

## Règle

Ne faites pas de publication publique sans relire cette checklist.

## Contenu public

- README relu et cohérent avec l'état réel du projet.
- Aucun texte résiduel de seed, d'extraction ou de brouillon interne.
- Aucun lien cassé vers le hub, les issues, la homepage ou des dépôts inexistants.
- Changelog cohérent avec l'état de la release.
- Métadonnées du package cohérentes avec le dépôt publié.

## Validation technique

- `node --check src/cnpj.js`
- `node --check src/index.js`
- `node --check test/cnpj.test.js`
- `node --test --experimental-test-isolation=none test/cnpj.test.js`

## Publication

- `package.json` avec `name`, `version`, `repository`, `bugs`, `homepage` et `publishConfig` corrects.
- Licence définie.
- Vecteurs partagés présents.
- API documentée dans `docs/api.md`.
- Décisions principales documentées dans `docs/decisoes.md`.
- Secret `NPM_TOKEN` configuré dans GitHub.
- Release GitHub créée avec un tag au format `vX.Y.Z`.
- Le tag de release correspond à la version présente dans `package.json`.
- Workflow [`.github/workflows/release.yml`](../.github/workflows/release.yml) prêt à publier avec `npm publish --access public --provenance`.

## Gate final

Publiez seulement quand :

- le contenu est prêt pour la lecture publique ;
- les tests sont verts ;
- le package est prêt pour la distribution ;
- `main` est protégée avec reviews et status checks obligatoires.
