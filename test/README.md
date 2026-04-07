# Testes

## Objetivo

Esta pasta documenta a estrategia de testes da biblioteca `as-cnpj-js`.

Os testes existem para provar que a implementacao:

- valida CNPJ numerico legado;
- valida CNPJ alfanumerico;
- calcula corretamente os digitos verificadores;
- normaliza entrada com caixa baixa e caracteres de mascara;
- formata corretamente a saida mascarada;
- rejeita entradas invalidas e repeticoes triviais;
- preserva compatibilidade com os vetores compartilhados do ecossistema.

## Arquivo principal

- `cnpj.test.js`

## O que e validado

### 1. Normalizacao

Verifica que:

- letras minusculas sao convertidas para maiusculas;
- caracteres fora de `A-Z0-9` sao removidos;
- a saida canonica fica sem mascara.

### 2. Calculo de DV

Verifica que:

- o exemplo oficial `12ABC34501DE` gera DV `35`;
- a regra de modulo 11 com conversao `ASCII - 48` esta correta.

### 3. Validacao de casos positivos

Verifica que:

- CNPJ alfanumerico valido passa;
- CNPJ numerico legado valido passa;
- entradas mascaradas e sem mascara passam.

### 4. Validacao de casos negativos

Verifica que:

- DV incorreto falha;
- entradas curtas falham;
- entradas vazias falham;
- valores repetidos triviais falham;
- tipos invalidos falham.

### 5. Modo estrito

Verifica que:

- formatos canonicos sao aceitos;
- entradas com ruido adicional sao rejeitadas quando `strict` esta ativo.

### 6. Coerencia da API

Verifica que:

- aliases curtos e aliases explicitos com `CNPJ` apresentam o mesmo comportamento.

### 7. Vetores compartilhados

Verifica que:

- todos os casos validos em `vectors/cnpj.json` permanecem validos;
- todos os casos invalidos em `vectors/cnpj.json` permanecem invalidos;
- normalizacao e formatacao batem com o esperado.

## Saida esperada

Quando tudo esta correto, a suite deve terminar com todos os testes aprovados.

Exemplo resumido de saida esperada:

```text
1..11
# tests 11
# pass 11
# fail 0
```

## Como executar

Execucao direta:

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

Execucao recomendada antes de publicar:

```bash
npm run verify
```

