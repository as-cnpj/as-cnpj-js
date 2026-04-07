# AS-CNPJ JS

Langues : [Português (Brasil)](README.md) | [English](README.en.md) | [Español](README.es.md) | **Français**

Bibliothèque auteur AS-CNPJ pour JavaScript et TypeScript.

Dépôt : `https://github.com/as-cnpj/as-cnpj-js`

## Ce que fait la bibliothèque

Cette bibliothèque fournit :

- la validation du CNPJ numérique ;
- la validation du CNPJ alphanumérique ;
- la normalisation canonique sans masque ;
- le formatage avec masque ;
- le calcul des chiffres de contrôle ;
- la validation en mode permissif et strict.

## Règles clés

- les 12 premiers caractères acceptent `A-Z0-9` ;
- les 2 derniers caractères restent numériques ;
- les chiffres de contrôle utilisent le modulo 11 ;
- la conversion des caractères utilise `ASCII - 48` ;
- l’entrée est normalisée en majuscules ;
- les entrées avec et sans masque sont acceptées ;
- les répétitions triviales sont rejetées.

## Statut

- dépôt publié ;
- paquet encore en phase initiale `0.x` ;
- publication npm encore en attente.

## Maintenance

Maintainer : `@0moura`  
Contact sécurité : `ascnpj@0moura.io`

