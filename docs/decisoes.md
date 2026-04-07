# Decisoes

Idiomas: **Português (Brasil)** | [English](decisoes.en.md) | [Español](decisoes.es.md) | [Français](decisoes.fr.md)

## 1. JavaScript puro com ESM

Motivo:

- nucleo pequeno;
- zero dependencia;
- boa portabilidade;
- facil auditoria.

## 2. API curta com aliases genericos e explicitos

Motivo:

- `normalize`, `isValid` e `format` facilitam ergonomia;
- nomes com `CNPJ` reduzem ambiguidade em bases maiores.

## 3. Modo estrito opcional

Motivo:

- muitos fluxos recebem dado mascarado, sem mascara ou com ruido;
- o modo permissivo ajuda integracao;
- o modo estrito ajuda contratos mais rigidos.

## 4. Vetores compartilhados no hub

Motivo:

- a biblioteca JS nao vira dona exclusiva da verdade;
- os demais ports podem provar conformidade contra o mesmo conjunto.

## 5. Rejeicao de repeticoes triviais

Motivo:

- evita falsos positivos comuns em validadores simplistas.
