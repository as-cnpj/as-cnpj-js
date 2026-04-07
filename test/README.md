# Testes

Idiomas: **Português (Brasil)** | [English](README.en.md) | [Español](README.es.md) | [Français](README.fr.md)

## Objetivo

Esta pasta documenta a estratégia de testes da biblioteca `as-cnpj-js`.

Os testes existem para provar que a implementação:

- valida CNPJ numérico legado;
- valida CNPJ alfanumérico;
- calcula corretamente os dígitos verificadores;
- normaliza entrada com caixa baixa e caracteres de máscara;
- formata corretamente a saída mascarada;
- rejeita entradas inválidas e repetições triviais;
- preserva compatibilidade com os vetores compartilhados do ecossistema.

## Arquivo Principal

- `cnpj.test.js`

## O Que é Validado

### 1. Normalização

Verifica que:

- letras minúsculas são convertidas para maiúsculas;
- caracteres fora de `A-Z0-9` são removidos;
- a saída canônica fica sem máscara.

### 2. Cálculo de DV

Verifica que:

- o exemplo oficial `12ABC34501DE` gera DV `35`;
- a regra de módulo 11 com conversão `ASCII - 48` está correta.

### 3. Validação de Casos Positivos

Verifica que:

- CNPJ alfanumérico válido passa;
- CNPJ numérico legado válido passa;
- entradas mascaradas e sem máscara passam.

### 4. Validação de Casos Negativos

Verifica que:

- DV incorreto falha;
- entradas curtas falham;
- entradas vazias falham;
- valores repetidos triviais falham;
- tipos inválidos falham.

### 5. Modo Estrito

Verifica que:

- formatos canônicos são aceitos;
- entradas com ruído adicional são rejeitadas quando `strict` está ativo.

### 6. Coerência da API

Verifica que:

- aliases curtos e aliases explícitos com `CNPJ` apresentam o mesmo comportamento.

### 7. Vetores Compartilhados

Verifica que:

- todos os casos válidos em `vectors/cnpj.json` permanecem válidos;
- todos os casos inválidos em `vectors/cnpj.json` permanecem inválidos;
- normalização e formatação batem com o esperado.

## Saída Esperada

Quando tudo está correto, a suite deve terminar com todos os testes aprovados.

Exemplo resumido de saída esperada:

```text
1..11
# tests 11
# pass 11
# fail 0
```

## Como Executar

Execução direta:

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

Execução recomendada antes de publicar:

```bash
npm run verify
```
