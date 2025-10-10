### DROP DATABASE
```
applications dépend de → advertisements et people
advertisements dépend de → companies
companies dépend de → people
people → indépendante
```

### SERIAL
Type spécial d'auto-incrémentation.

### CHECK (status IN (...))
Contraintes de validation.

### DEFAULT CURRENT_TIMESTAMP
Remplissage automatique date/heure lors de l'insertion.

### REFERENCES people(id)
Clé étrangère : lie cette colonne à la table `people`.

### ON DELETE CASCADE
Si suppression utilisateur, toutes entreprises sont automatiquement supprimées.

### Initialiser la base de données
1. Démarrer le service PostgreSQL.
`sudo systemctl start postgresql`

2. Vérifier que le service est actif.
`sudo systemctl status postgresql`

3. Rentrer dans postgre
`sudo -u postgres psql`

4. Changer son mot de passe postgreSQL
`ALTER USER postgres WITH PASSWORD '';`

3. Exécution script
Depuis votre répertoire database:
`sudo -u postgres psql -f init.sql`

### Visiualisation BDD
1. Connexion BDD :
`sudo -u postgres psql`
2. Lister bdd :
`postgres=# \list`
3. Connexion BDD
```
postgres=# \c job_board
You are now connected to database "job_board" as user "postgres".
```
3. Visualisation des tables
```
job_board=# \dt
             List of relations
 Schema |      Name      | Type  |  Owner   
--------+----------------+-------+----------
 public | advertisements | table | postgres
 public | applications   | table | postgres
 public | companies      | table | postgres
 public | people         | table | postgres
(4 rows)
```

### Arrêt PostgreSQL
1. Arrêter PostgreSQL immédiatement :
`sudo systemctl stop postgresql`

2. Vérifier que c'est bien arrêté :
`sudo systemctl status postgresql`