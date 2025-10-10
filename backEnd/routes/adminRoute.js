// Import of express module
const express = require('express');
// Create router
const router = express.Router();

const advertisementsController = require('../controllers/advertisementsController');

// Define road of GET requesst
router.get('/offers', advertisementsController.getAll);
router.get('/offers/:id', advertisementsController.findById);

// Define road of POST request
router.post('/:id', advertisementsController.createAds);

// Define road of PUT request
router.put('/:id', advertisementsController.updateAds);

// Define road of DELETE request
router.delete('/:id', advertisementsController.deleteAdvertisement)

module.exports = router;