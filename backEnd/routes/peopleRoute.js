// Import of express module
const express = require('express');
// Create router
const router = express.Router();

const userController = require('../controllers/peopleController');

// Define route of GET requesst
router.get('/', userController.getAll);
router.get('/:id', userController.findById);

// Define route of POST request
router.post('/', userController.createNewUser);

// Define route of PUT request
router.put('/:id', userController.updateUser);

// Define route of DELETE
router.delete('/:id', userController.deleteUser);

module.exports = router;