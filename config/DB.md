# Database.js
Fichier de connexion central à la BDD. Sert de pont unique entre `Node.js` et `PostgreSQL`.

Chaque __model__ peut simplement importer ce fichier et utiliser la conexion.

## Gestion pool de connexions
`PostgreSQL` fonctionne meiux avec un pool de connexions (plusieurs connexions réutilisables).

Ce fichier créer et gère ce pool pour optimisations des performances.

### const { Pool } = require('pg')
Extraction de la classe `Pool` du module `pg`.
- `Pool` : Création pool de connexions.

### dotenv.config()
- Fonction lecture fichier `.env`.
- `process.env` : Accès variables d'environnement

### client.release()
Libération de la connexion, la remet dans le pool pour quel __soit réutilisable__.

### process.exit(1)
Arrêt complet de l'application `Node.js`.
- `(1)` : Arrêt avec erreur.


## process ?
__Objet global__ de `Node.js` représentant processus en cours d'exécution de l'application. Donne accès aux informations et permet de contrôler le comportement du programme.