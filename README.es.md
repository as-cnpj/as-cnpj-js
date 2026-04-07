# AS-CNPJ JS

Idiomas: [Português (Brasil)](README.md) | [English](README.en.md) | **Español** | [Français](README.fr.md)

Biblioteca autoral para validación de CNPJ numérico y alfanumérico en JavaScript y TypeScript.

Repositorio: `https://github.com/as-cnpj/as-cnpj-js`

## Estado

- repositorio público y activo;
- paquete todavía en fase inicial `0.x`;
- publicación en registry aún pendiente;
- algoritmo ya validado con pruebas automatizadas y vectores compartidos del ecosistema.

## Listo para npm

- paquete definido como `@ascnpj/core`;
- cero dependencias de runtime;
- `.env` y `.npmrc` protegidos por `.gitignore`;
- CI preparada para revisión de sintaxis, pruebas y verificación del contenido del paquete;
- publicación con provenance recomendada en el próximo paso de release.

## Empieza por aquí

- [API de la biblioteca](docs/api.md)
- [Estrategia de pruebas](test/README.md)
- [Checklist de release](docs/release-checklist.md)
- [Política de seguridad](SECURITY.md)
- [Hub del ecosistema AS-CNPJ](https://github.com/as-cnpj/as-cnpj)

## Qué resuelve esta biblioteca

Esta biblioteca existe para cubrir, con una única API, la coexistencia entre:

- CNPJ legado numérico;
- CNPJ alfanumérico previsto por la Receita Federal para julio de 2026;
- entradas con máscara y sin máscara;
- flujos permisivos y flujos con validación estricta.

Implementa:

- validación;
- normalización;
- formateo;
- cálculo de dígitos verificadores;
- consistencia con vectores compartidos del ecosistema.

## Garantías centrales

- acepta `A-Z0-9` en los 12 primeros caracteres;
- mantiene los 2 dígitos verificadores como numéricos;
- usa módulo 11 con conversión `ASCII - 48`;
- normaliza la entrada a mayúsculas;
- rechaza repeticiones triviales inválidas;
- soporta modo permisivo y modo estricto.

## API pública

Funciones principales:

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

## Ejemplo mínimo

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

## Modo estricto

Cuando `strict` está activo, la entrada debe llegar en uno de los formatos canónicos:

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

Ejemplo:

```js
isValid("12.ABC.345/01DE-35", { strict: true });
```

## Pruebas

Ejecución directa:

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

La suite cubre:

- casos positivos numéricos;
- casos positivos alfanuméricos;
- casos negativos;
- modo estricto;
- consistencia entre aliases;
- vectores compartidos del hub.

## Vectores compartidos

`as-cnpj-js` no define la verdad por sí solo.

El contrato del ecosistema también depende de:

- vectores compartidos en el hub;
- reglas documentadas a partir de fuentes oficiales;
- convergencia con implementaciones futuras en otros lenguajes.

## Ecosistema

Org de GitHub:

- `https://github.com/as-cnpj`

Hub del proyecto:

- manifiesto;
- documentación consolidada;
- vectores compartidos;
- gobernanza entre lenguajes.

## Mantenimiento

Maintainer:

- `@0moura`

Contacto institucional:

- `ascnpj@0moura.io`
