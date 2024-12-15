import express from 'express'
// const imageController = require('../controllers/imageController');
import { generateImage } from '../controllers/genrateController.js';
const router = express.Router();

// Route to handle image generation
// router.post('/generate-image', imageController.generateImage);
router.post('/generate-image', generateImage)

export default router;