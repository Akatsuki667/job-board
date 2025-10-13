# Job Board

### Node.js

Environnement d'exécution `Javascript` côté serveur.

- Gestion des modules avec `require()` et `module.exports`.

### Express.js

__Framework__ web minimaliste pour `Node.js`.

- __Routing__ : Gestion des routes HTTP (GET, POST, PUT, DELETE)
- __Middlewares__ : Fonctions intermédiaires qui traitent les requêtes
- __req(request)__ : Objet contenant les données de la requête
- __res(response)__ : Objet pour envoyer la réponse au client

### PostgreSQL

Système de gestion de base de données relationnelle (SGBDR)

- __TABLES__ : Structure de données
- __Clé primaire__ : Identifiant unique
- __Clés étrangères__ : Lien entre tables
- __Relations__ : One-to-Many, Many-to-Many
- __Cascade__ : Suppression automatique des données liée

### pg (node-postgres)

Driver `PostgreSQL` pour `Node.js`.

- __Pool de connexion__ : Réutilisation des connexions pour optimiser les performances
- __Requêtes sql paramétrées__ : Protection contre les __injections SQL__ avec `$1`

### dotenv

Gestion des __variable d'environnement__.

- `.env` : Stockage configuration sensible
- `process.env` : Accès aux variables

### Bcrypt

Librairie de __hashage__ de mots de passe.

- __Hashage__ : Transformation irréversible
- __Salt rounds__ : Niveau de complexité

### express-session

Gestion session utilisateurs.

- __Session__ : Stockage temporaire de données côté serveur
- __Cookie__ : identifiant de session stocké côté client
- `req.session.userId` : Permet de savoir qui est connecté
- __Authentification__ persistante entre les requête

Configuration :

- `secret` : Clé de chiffrement des cookies
- `httpOnly` : Cookie non accessible en `JavaScript`
- `maxAge` : Durée de vie de la session

### validator

Validation des données utilisateur

- `validator.isEmail()` : Vérification format email
- Protection contre des données invalides
- Validation côté serveur

### CORS (Cross-Origin Ressource Sharing)

Gestion des requêtes cross-origin.

- Permet __appel API__ front-end sur un domaine différent
- __Sécurité__ : Contrôle qui peut acccéder à l'API
- __Middlewares Express__ : `app.user(cors())` 

### nodemon (DevDependency)

Outil de développement qui redémarre automatiquement le serveur.

- __Surveille__ les modifications de fichiers
- Redémarage automatique du serveur
- __Script__ : `npm run dev`

### Architecture MVC

- __Model__ : Communication avec la base de données, contient les __requête SQL__

- __Controller__ : Logique métier, traitement des données. R

eçoit la __requête__, puis appele le `model` enfin renvoie la __réponse__.

- __Routes__ : Définit les __endpoints de l'API__. Associe URL  à la __méthode HTTP__ au `controller`

### Flux

```
Client (Frontend)
    ↓
    ↓ Requête HTTP (GET/POST/PUT/DELETE)
    ↓
Server (server.js)
    ↓
    ↓ Middlewares (express.json, session, cors)
    ↓
Routes (authRoute, applicantRoute)
    ↓
Controller (authController, advertisementsController)
    ↓
Model (peopleModel, advertisementsModel)
    ↓
PostgreSQL Database
    ↓
    ↓ Résultat de la requête SQL
    ↓
Model → Controller → Routes → Client (Réponse JSON)
```

### Code status HTTP

- `200` : OK - Requête réussie
- `201` : Created - Ressource créée avec succès
- `400` : Bad Request - Données invalides
- `404` : Not Found - Ressource introuvable
- `500` : Internal Server Error - Erreur serveur