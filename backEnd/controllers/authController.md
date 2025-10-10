### Import / Dépendances
- `validator` : Validation des données, bibliothèque `Node.js`
- `bcrypt` : Hashage du mot de passe, bibliothèque `Node.js`

### const email = req.body.email?.trim();
- Récupération de l'email et nettoyage de la données via `.trim()` (supprime les espaces)
- `?` : Vérification que l'email existe avant d'appeler `.trim()`, sinon rique de planter

### const hashedPassword = await bcrypt.hash(password, 10);
Hashage mot de passe.
- `10` : Salt rounds = niveau de complexité

### req.session.userId = newUser.id;
- `req.session` : Objet géré par `express-session`
    - Création de session dans `PostgreSQL`
    - Un cookie de session est envoyé au navigateur du client
    - Le cookie permet de savoir qui est l'utilisateur à chaque requête

### HTTP code status 400
- code `400` means that the request is bad (lack of data for example)
 
### HTTP code status 201
- code `201` means that the request is a success and something has been created (here an account)
 
### HTTP code status 500
- code `500` means that the server has a internal error