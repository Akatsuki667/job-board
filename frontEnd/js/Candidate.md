# Candidate.js
Affichage __dynamique__ de toutes les offres en base de données sous formes de __card__ `HTML`.

### document.addEventListener('DOMContentLoaded', function()
Attends que tout le `HTML` soit chargé avant d'exécuter le code.

## Appel API
```javascript
fetch(request)
  .then((response) => response.json())
```
Envoie requête au server `Node.js/Express`
Conversion réponse en `JSON`

### Traitement de la donées
```javascript
.then((data) => {
  data.forEach((offers) => {
```
- `data` : Tableau de toutes les offres
- `forEach` : Pour chaque offre dans ce tableau => création de card

### .textContent = offers.title
Remplissage des éléments avec les données. Utilisation de `.textContent` pour éviter __injection XSS__
