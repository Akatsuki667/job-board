# Routes
Fichier __routeur__ (gestionnaire de routes).
- Définition des `URL`s disponible
- Associe chaque `URL` à une fonction du `controller`

### const router = express.Router();
Création mini-routeur `express`. __Sous-ensemble__ de routes qu'on peut brancher ailleurs.

### router.get('/', advertisementsController.getAll);
Définition de la route qui répond aux requête `GET`. Ce n'est pas le chemin complet, sera combiné avec le __préfixe__ défini dans le `server.js`