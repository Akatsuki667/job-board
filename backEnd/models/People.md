# CreateUser(objectUser)
```sql
INSERT INTO people (email, password_hash, name, phone, status) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, name, phone, status
```
Insertion des données envoyé par l'utilisateur, avec protection contre injection sql puis retourne des données dans le mot de passe.

###  if (isNaN(userId)) {throw new Error("Invalid userId")};
permet de verifier si `userID` est bien un chiffre avant de lancer une requête SQL inutile
 
### RETURNING *
sert retourner des infos à la fin des equetes SQL hors SELECT afin de les tester ou pour remonter le resultat obtenu.