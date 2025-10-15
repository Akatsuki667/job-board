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

## `showModal(id)`
### const ads = data[0];
Extraction des données envoyer par le serveur.

__Réponse serveur__ :
```json
[
    {
        "id": 1,
        "title": "Développeur Full Stack Node.js",
        "company_name": "TechCorp France",
        "long_description": "Nous recherchons un développeur...",
        "wages": "35000-45000€/an",
        "working_time": "Temps plein (35h)",
        "place": "Paris - Télétravail partiel"
    }
]
```

## `findUserId()`
```javascript
function findUserId() {
    return fetch('http://localhost:3000/api/auth/me', {
        method: 'GET',
        credentials: 'include'
    })
```
- Retourne la __promise__ pour exécution de la fonction
- `credentials: include` : Force l'envoie des cookies de session (permet au serveur de connaître l'identité de l'utilisateur)
