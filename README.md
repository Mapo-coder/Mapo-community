# Duel 1V1 – Site communauté

Site statique (HTML/CSS/JS, aucune installation).

## Modifier
- `config.js` : tes liens (itch.io, Discord, YouTube, GitHub). Un lien vide = bouton masqué.
- `data.js` : guides, armes, cartes, modes. Pour un nouveau guide, copie un bloc dans `GUIDES`.

## Publier sur GitHub Pages
1. Crée un dépôt GitHub (ex. `duel1v1`), mets-y le contenu de ce dossier.
2. Settings → Pages → Source : `Deploy from a branch` → branche `main`, dossier `/ (root)`.
3. Le site sera sur `https://TON-PSEUDO.github.io/duel1v1/`.

## Crystal Keeper (page ajoutee)
- `crystal-keeper.html` : la page du jeu (heroes, tours, mondes, monstres, evenements, succes, guides, captures).
- `ck-data.js` : tous les textes et chiffres de la page, en francais et en anglais.
- `ck/` : les images de la page. `ck-page.js` : l'affichage.
- `config.js` : mets le lien itch.io de Crystal Keeper dans `crystalUrl` (vide = les boutons "Jouer" sont masques).
