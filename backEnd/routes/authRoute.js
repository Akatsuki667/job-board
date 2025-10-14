// Import of express module
const express = require('express');
// Create router
const router = express.Router();

const authController = require('../controllers/authController');

// Define route POST request
router.post('/register', authController.register);
router.post('/login', authController.login);

// Define route GET request
router.get('/me', authController.getCurrentUser);

module.exports = router;



