# Changelog

Idiomas: **Português (Brasil)** | [English](CHANGELOG.en.md) | [Español](CHANGELOG.es.md) | [Français](CHANGELOG.fr.md)

## 0.1.3

- adiciona `validateMany` e `validateManyCNPJ`
- preserva a ordem de entrada e retorna `items` + `summary`
- expõe `reason` estável por item
- atualiza README, API e tipos para a validação em lote

## 0.1.2

- correção do banner do README para renderização correta no npm
- conversão dos links do README para URLs absolutas do GitHub e do ecossistema
- ajuste da descrição pública do pacote para `Author-led`

## 0.1.1

- publicação do pacote `@ascnpj/core` no npm
- migração do workflow de release para Trusted Publishing
- atualização das GitHub Actions para a linha compatível com Node 24
- ajuste do README com link e badge do npm

## 0.1.0

- primeira versão pública
- validação de CNPJ numérico e alfanumérico
- normalização, formatação e cálculo de dígitos verificadores
- validação em modo estrito
- cobertura de testes para o exemplo oficial da Receita e casos legados numéricos
