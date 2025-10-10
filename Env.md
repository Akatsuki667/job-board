# ENV
Fichier de configuration qui stockes les variables d'environnement de l'application sous formes paires clé-valeur.

Ce fichier doit être mis dans un `.gitignore`. Ne dois jamais être exposé car possède des variables de sécurité importantes.

### DB_HOST=localhost
BDD tourne sur votre machine locale.

### DB_PORT=5432
Port par défaut de `PostgreSQL`

### DB_USER=postgres
Utilisateur superadmin

### DB_PASSWORD =
Mot de passe db pas obligatoire en local. Obligatoire en production

### DB_NAME = job_board
Nom de la base de données

### PORT=3000
Port par défaut pour serveur de développement `Node.js/Express`

### NODE_ENV=developpement
Indique environnement d'exécution avec valeurs courantes :
`developpment`,`production`,`test`