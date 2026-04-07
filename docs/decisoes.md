# Decisões

Idiomas: **Português (Brasil)** | [English](decisoes.en.md) | [Español](decisoes.es.md) | [Français](decisoes.fr.md)

## 1. JavaScript puro com ESM

Motivo:

- núcleo pequeno;
- zero dependência;
- boa portabilidade;
- fácil auditoria.

## 2. API curta com Aliases Genéricos e Explícitos

Motivo:

- `normalize`, `isValid` e `format` facilitam ergonomia;
- nomes com `CNPJ` reduzem ambiguidade em bases maiores.

## 3. Modo estrito opcional

Motivo:

- muitos fluxos recebem dado mascarado, sem máscara ou com ruído;
- o modo permissivo ajuda integração;
- o modo estrito ajuda contratos mais rígidos.

## 4. Vetores compartilhados no hub

Motivo:

- a biblioteca JS não vira dona exclusiva da verdade;
- os demais ports podem provar conformidade contra o mesmo conjunto.

## 5. Rejeição de Repetições Triviais

Motivo:

- evita falsos positivos comuns em validadores simplistas.
