# Server
Fichier de __point d'entrée__ de l'application, configuration d'un serveur `Express.js`.

## Lancement
`npm run dev`

## Dépendances
- `express` : Framework `Node.js` pour création du serveur
- `cors` : Active les requpetes cross-origin (partage de ressource entre domaines)
- `path` : Gestion des chemins de fichiers
- `express-session` : Gestion des session utilisateur (authentification persistantes)
- `dotenv` : Charge les variables d'environnement depuis `.env`

## Configuration
__Variable d'environnement__
```
PORT=3000
SESSION_SECRET=mon_super_secret
```

__Initialisation__
```javascript
const app = express();
const PORT = process.env.PORT;
```

## Middlewares
__CORS__
```javascript
app.use(cors());
```
Permet aux clients (navigateurs) d'effectuer des requêtes depuis d'autres domaines.

__JSON Parser__
```javascript
app.use(express.json());
```
Lecture des données `JSON` envoyées dans le body des requêtes

__Fichiers stattiques__
```javascript
app.use(express.static(path.join(__dirname, 'frontEnd')));
```

__Sessions__
```javascript
app.use(session({
    secret: process.env.SESSION_SECRET || 'mon_super_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        httpOnly: true,    // Empêche l'accès JavaScript au cookie
        secure: false,     // true en production avec HTTPS
        maxAge: 24h        // Durée de vie: 24 heures
    }
}));
```
Gestion session utilisateur pour maintenir la connexion

