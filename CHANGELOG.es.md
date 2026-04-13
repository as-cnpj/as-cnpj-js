# Changelog

Idiomas: [Português (Brasil)](CHANGELOG.md) | [English](CHANGELOG.en.md) | **Español** | [Français](CHANGELOG.fr.md)

## 0.1.3

- añade `validateMany` y `validateManyCNPJ`
- preserva el orden de entrada y devuelve `items` + `summary`
- expone códigos `reason` estables por ítem
- actualiza README, API y tipos para la validación por lotes

## 0.1.2

- corrige la renderización del banner del README en npm
- convierte los enlaces del README a URLs absolutas de GitHub y del ecosistema
- ajusta la descripción pública del paquete a `Author-led`

## 0.1.1

- publicación del paquete `@ascnpj/core` en npm
- migración del workflow de release a Trusted Publishing
- actualización de GitHub Actions a la línea compatible con Node 24
- actualización del README con enlace y badge de npm

## 0.1.0

- primera versión pública
- validación de CNPJ numérico y alfanumérico
- normalización, formateo y cálculo de dígitos verificadores
- validación en modo estricto
- cobertura de pruebas para el ejemplo oficial de la Receita y casos legados numéricos
