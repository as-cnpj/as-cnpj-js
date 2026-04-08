# Checklist de Release

Idiomas: [Português (Brasil)](release-checklist.md) | [English](release-checklist.en.md) | **Español** | [Français](release-checklist.fr.md)

## Regla

No hagas una publicación pública sin revisar este checklist.

## Contenido público

- README revisado y coherente con el estado real del proyecto.
- Sin texto residual de seed, extracción o borradores internos.
- Sin enlaces rotos hacia el hub, issues, homepage o repositorios inexistentes.
- Changelog coherente con el estado de la release.
- Metadatos del paquete consistentes con el repositorio publicado.

## Validación técnica

- `node --check src/cnpj.js`
- `node --check src/index.js`
- `node --check test/cnpj.test.js`
- `node test/run.js`

## Publicación

- `package.json` con `name`, `version`, `repository`, `bugs`, `homepage` y `publishConfig` correctos.
- Licencia definida.
- Vectores compartidos presentes.
- API documentada en `docs/api.md`.
- Decisiones principales documentadas en `docs/decisoes.md`.
- Trusted Publisher configurado en npm para el repositorio `as-cnpj/as-cnpj-js`.
- Release creada en GitHub con tag en formato `vX.Y.Z`.
- El tag de la release coincide con la versión presente en `package.json`.
- Workflow [`.github/workflows/release.yml`](../.github/workflows/release.yml) preparado para publicar con `npm publish --access public`.

## Gate final

Publica solo cuando:

- el contenido esté listo para lectura pública;
- las pruebas estén en verde;
- el paquete esté listo para distribución;
- `main` esté protegida con reviews y status checks obligatorios.
