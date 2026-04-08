# Release Checklist

Languages: [Português (Brasil)](release-checklist.md) | **English** | [Español](release-checklist.es.md) | [Français](release-checklist.fr.md)

## Rule

Do not make a public release without reviewing this checklist.

## Public Content

- README reviewed and coherent with the actual project state.
- No residual seed, extraction, or internal draft wording.
- No broken links to hub, issues, homepage, or missing repositories.
- Changelog coherent with the release state.
- Package metadata consistent with the published repository.

## Technical Validation

- `node --check src/cnpj.js`
- `node --check src/index.js`
- `node --check test/cnpj.test.js`
- `node test/run.js`

## Publication

- `package.json` with correct `name`, `version`, `repository`, `bugs`, `homepage`, and `publishConfig`.
- License defined.
- Shared vectors present.
- API documented in `docs/api.md`.
- Main decisions documented in `docs/decisoes.md`.
- Trusted Publisher configured in npm for repository `as-cnpj/as-cnpj-js`.
- GitHub Release created with tag in `vX.Y.Z` format.
- Release tag matches the version in `package.json`.
- Workflow [`.github/workflows/release.yml`](../.github/workflows/release.yml) ready to publish with `npm publish --access public`.

## Final Gate

Publish only when:

- content is ready for public reading;
- tests are green;
- package is ready for distribution;
- `main` is protected with mandatory reviews and status checks.
