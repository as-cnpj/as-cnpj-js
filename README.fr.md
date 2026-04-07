# AS-CNPJ JS

Langues : [Português (Brasil)](README.md) | [English](README.en.md) | [Español](README.es.md) | **Français**

Bibliothèque auteur pour la validation du CNPJ numérique et alphanumérique en JavaScript et TypeScript.

Dépôt : `https://github.com/as-cnpj/as-cnpj-js`

## Statut

- dépôt public et actif ;
- package encore en phase initiale `0.x` ;
- publication dans un registry encore en attente ;
- algorithme déjà validé par des tests automatisés et des vecteurs partagés de l'écosystème.

## Prêt pour npm

- package défini comme `@ascnpj/core` ;
- zéro dépendance de runtime ;
- `.env` et `.npmrc` protégés par `.gitignore` ;
- CI prête pour les vérifications de syntaxe, les tests et le contrôle du contenu du package ;
- workflow de release prêt pour une publication npm avec `provenance`.

## Commencez ici

- [API de la bibliothèque](docs/api.md)
- [Stratégie de tests](test/README.md)
- [Checklist de release](docs/release-checklist.md)
- [Politique de sécurité](SECURITY.md)
- [Hub de l'écosystème AS-CNPJ](https://github.com/as-cnpj/as-cnpj)

## Ce que cette bibliothèque résout

Cette bibliothèque existe pour couvrir, avec une API unique, la coexistence entre :

- le CNPJ historique numérique ;
- le CNPJ alphanumérique prévu par la Receita Federal pour juillet 2026 ;
- les entrées avec et sans masque ;
- les flux permissifs et les flux avec validation stricte.

Elle implémente :

- validation ;
- normalisation ;
- formatage ;
- calcul des chiffres de contrôle ;
- cohérence avec les vecteurs partagés de l'écosystème.

## Garanties centrales

- accepte `A-Z0-9` dans les 12 premiers caractères ;
- conserve les 2 chiffres de contrôle comme numériques ;
- utilise le modulo 11 avec conversion `ASCII - 48` ;
- normalise l'entrée en majuscules ;
- rejette les répétitions triviales invalides ;
- prend en charge les modes permissif et strict.

## API publique

Fonctions principales :

- `normalize(value)`
- `isValid(value, options?)`
- `format(value, options?)`
- `assertValid(value, options?)`
- `calculateCheckDigits(base12)`

Aliases explicites :

- `normalizeCNPJ(value)`
- `isValidCNPJ(value, options?)`
- `formatCNPJ(value, options?)`
- `assertValidCNPJ(value, options?)`
- `calculateCNPJCheckDigits(base12)`

## Exemple minimal

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

## Mode strict

Lorsque `strict` est actif, l'entrée doit arriver dans l'un des formats canoniques :

- `12ABC34501DE35`
- `12.ABC.345/01DE-35`

Exemple :

```js
isValid("12.ABC.345/01DE-35", { strict: true });
```

## Tests

Exécution directe :

```bash
node --test --experimental-test-isolation=none test/cnpj.test.js
```

La suite couvre :

- cas positifs numériques ;
- cas positifs alphanumériques ;
- cas négatifs ;
- mode strict ;
- cohérence entre aliases ;
- vecteurs partagés du hub.

## Vecteurs partagés

`as-cnpj-js` ne définit pas la vérité à lui seul.

Le contrat de l'écosystème dépend aussi de :

- vecteurs partagés dans le hub ;
- règles documentées à partir des sources officielles ;
- convergence avec les futures implémentations dans d'autres langages.

## Écosystème

Org GitHub :

- `https://github.com/as-cnpj`

Hub du projet :

- manifeste ;
- documentation consolidée ;
- vecteurs partagés ;
- gouvernance entre langages.

## Maintenance

Maintainer :

- `@0moura`

Contact institutionnel :

- `ascnpj@0moura.io`
