// Import of express module
const express = require('express');
// Create router
const router = express.Router();

const advertisementsController = require('../controllers/advertisementsController');
const userController = require('../controllers/peopleController');
const applicationController = require('../controllers/applicationController');

// Define road of GET request
router.get('/offers', advertisementsController.getAll);
router.get('/offer/:id', advertisementsController.findById);
router.get('/user/:id', userController.findById);


// Define road of POST request
router.post('/apply', applicationController.createNewApplication);

module.exports = router;