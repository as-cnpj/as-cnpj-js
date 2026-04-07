# AS-CNPJ JS

Idiomas: [Português (Brasil)](README.md) | [English](README.en.md) | **Español** | [Français](README.fr.md)

Biblioteca autoral AS-CNPJ para JavaScript y TypeScript.

Repositorio: `https://github.com/as-cnpj/as-cnpj-js`

## Qué hace la biblioteca

Esta biblioteca ofrece:

- validación de CNPJ numérico;
- validación de CNPJ alfanumérico;
- normalización canónica sin máscara;
- formateo con máscara;
- cálculo de dígitos verificadores;
- validación en modo permisivo y estricto.

## Reglas clave

- los primeros 12 caracteres aceptan `A-Z0-9`;
- los últimos 2 caracteres siguen siendo numéricos;
- los dígitos verificadores usan módulo 11;
- la conversión de caracteres usa `ASCII - 48`;
- la entrada se normaliza a mayúsculas;
- se aceptan entradas con y sin máscara;
- se rechazan repeticiones triviales.

## Estado

- repositorio publicado;
- paquete aún en fase inicial `0.x`;
- publicación en npm todavía pendiente.

## Mantenimiento

Maintainer: `@0moura`  
Contacto de seguridad: `ascnpj@0moura.io`

