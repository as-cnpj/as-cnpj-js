# Changelog

Langues: [Português (Brasil)](CHANGELOG.md) | [English](CHANGELOG.en.md) | [Español](CHANGELOG.es.md) | **Français**

## 0.1.3

- ajoute `validateMany` et `validateManyCNPJ`
- préserve l'ordre d'entrée et renvoie `items` + `summary`
- expose des codes `reason` stables par élément
- met à jour le README, l'API et les types pour la validation par lot

## 0.1.2

- corrige le rendu de la bannière du README sur npm
- convertit les liens du README en URLs absolues vers GitHub et l'écosystème
- ajuste la description publique du package à `Author-led`

## 0.1.1

- publication du package `@ascnpj/core` sur npm
- migration du workflow de release vers Trusted Publishing
- mise à jour des GitHub Actions vers la ligne compatible avec Node 24
- mise à jour du README avec lien et badge npm

## 0.1.0

- première version publique
- validation du CNPJ numérique et alphanumérique
- normalisation, formatage et calcul des chiffres de contrôle
- validation en mode strict
- couverture de tests pour l'exemple officiel de la Receita et les cas numériques historiques
