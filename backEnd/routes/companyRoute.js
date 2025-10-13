// Import of express module
const express = require('express');
// Create router
const router = express.Router();
 
const applicationController = require('../controllers/applicationController');
 
// Define road of GET request /id: match with the company's ID
router.get('/Message/:id', applicationController.getAllMess);
 
module.exports = router;