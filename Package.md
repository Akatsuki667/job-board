# Package-lock.json
Fichier description projet :

```json
{
  "name": "T-WEB-501-REN_1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^17.2.3",
        "express": "^5.1.0",
        "pg": "^8.16.3"
      },
      "devDependencies": {
        "nodemon": "^3.1.10"
      }
    }
    }
}
```

Liste les dépendances, contient les scripts `npm`.

__Verrouillage__ version des dépendances, package installer.

# Package.json
Configuration des scripts et dépendance. Changement manuel.

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

`npm start` : Lance le serveur en mode production.
`npm run dev` : Lance le serveur avec `nodedemon` (redémarage auto).

## Package
```bash
npm install express express-session pg connect-pg-simple brcypt dotenv nodemon validator
```
