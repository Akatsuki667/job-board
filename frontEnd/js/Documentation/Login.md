### const email = document.getElementById('email').value;
Récupération de l'élément `<input id="email">` et de sa valeur via `.value`

### headers: { 'Content-Type': 'application/json' }
Dit au serveur : "Je t'envoie du `JSON`".
Ce dernier pourra utiliser `express.json()` __middleware__ pour le _parser_ : `body: JSON.stringify(loginData)` (Convertit l'__objet `JavaScript`__ en chaîne `JSON`)
