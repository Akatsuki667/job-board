# Controller
Son rôle est de recevoir un __requête HTTP__ --> Demander les données au `Model` --> Renvoyer une __réponse HTTP__.

### const getAll = async (req, res) => {
__Fonction asynchrone__, lors de son appel, quelqu'un visite : `http://localhost:3000/api/advertisements`

### const advertisements = await getAllAdvertisements();
Attend que `getAllAdvertisement()` se termine.
- `getAllAdvertisement()`: Va cherhcher les annonces dans la BDD
- `const advertisement` : Stockage du résultat

### .json()
Utilisation du JSON car on ne peut pas renvoyer du `JavaScript` au client. `JSON` transforme ces __objet__ `JavaScript` en texte.
