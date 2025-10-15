### const status = document.querySelector('input[name="status"]:checked').value;
Récupération du bouton radio qui est coché au moment de la soumission du formulaire via `:checked`

### const registerData[]
Prpéaration des données récupéré dans un objet `JavaSscript`

### Flux d'exécution
- `DOMContentLoaded` : Chargement de la page
- `getElementById` : Récupération du formulaire
- `addEventListener` : Écoute du submit du formulaire
- `preventDefaut()` : Empêche rechargement de la page
- Collection des données du formulaire
- Création de l'objet register Data
- `fetch` : Envoie de la __requête POST__ au serveur
- gestion message success ou error
- `.json()` : conversion de la réponse serveur
- gestion success ou error
- Si succes redirection vers login (page par défaut)