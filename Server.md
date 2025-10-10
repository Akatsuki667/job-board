# Server
Fichier de __point d'entrée__ de l'application.
- Configuration serveur `Express`
- Définition middlewares
- Configuration des routes
- Démarrage serveur

### const path = require('path');
- Importation module `path` de `Node.js`
- Permet la manipualtion des chemins de fichiers sécurisée

### const app = express();
- Création d'une __instance__ de l'application `Express`.
- `app` : objet principal de gestion des requêtes

### app.use(express.json());
Active un __middlewares__ qui parse (analyse) les données `JSON`. Permet à `Express` de comprendre les données `JSON` envoyés dans les __requêtes HTTP__

- __middlewares__ : Fonctions qui peuvent accéder à l'objet __Request(req)__ et __Response(res)__, permet le traitement des __requêtes HTTP__.

Permet la lecture de `req.body`

### app.use(express.static(path.join(__dirname, 'frontEnd')));
- `express.static` : __Middlewares__ pour servir des fichiers statiques (`HTML`,`CSS`,`JS`,`Images`). Rend les fichiers accessible directement via `HTPP`
- `path.join(__dirname, 'frontEnd')` : 
    - `__dirname` : Chemin absolu du dossier où se trouve `server.js`
    - `path.join()` : Combine les chemins de manière sécurisée

### app.use('/api/advertisements', advertisementsRoutes);
Branche un routeur sur un __préfixe de chemin spécifique__.

Toutes les routes de `advertisementsRoutes` auront ce __préfixe__.

### res.sendFile(path.join(__dirname, 'frontEnd', 'candidate.html'));
- Envoie un fichier en réponse (`candidate.html`)
- `path.join(__dirname, 'frontEnd', 'candidate.html')` : Construction du chemin pour accéder au fichier
