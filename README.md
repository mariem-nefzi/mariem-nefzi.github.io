# Portfolio – Mariem Nefzi

Site statique bilingue (FR / EN), publié avec GitHub Pages.

## Structure

- `index.html` : page d'accueil (présentation + liste des projets)
- `projets/` : une page par projet
- `assets/style.css` : mise en forme
- `assets/lang.js` : bouton FR / EN
- `assets/img/` : images

Chaque texte existe en deux versions : `<span class="fr">…</span>` et `<span class="en">…</span>`.

## Mise en ligne (GitHub Pages)

1. Créer un compte sur github.com.
2. Créer un dépôt public nommé `<identifiant>.github.io`.
3. Déposer le contenu de ce dossier dans le dépôt (bouton « Add file » → « Upload files »).
4. Settings → Pages → Source : branche `main`, dossier `/ (root)`.
5. Le site est disponible à l'adresse `https://<identifiant>.github.io`.

## Ajouter un projet

1. Copier `projets/mastere-prevision-energie.html` sous un nouveau nom et modifier le contenu.
2. Mettre ses images dans `assets/img/<nom-du-projet>/`.
3. Ajouter une carte dans la section « Projets » de `index.html`.
