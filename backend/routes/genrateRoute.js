const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Route to handle image generation
router.post('/generate-image', imageController.generateImage);

module.exports = router;