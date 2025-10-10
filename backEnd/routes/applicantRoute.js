// Import of express module
const express = require('express');
// Create router
const router = express.Router();

const advertisementsController = require('../controllers/advertisementsController');

// Define road of GET requesst
router.get('/offers', advertisementsController.getAll);
router.get('/offer/:id', advertisementsController.findById);

module.exports = router;