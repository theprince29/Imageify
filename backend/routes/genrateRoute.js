import express from 'express'
// const imageController = require('../controllers/imageController');
import multer from 'multer';
import { generateImage } from '../controllers/genrateController.js';
const router = express.Router();

import createRateLimiter from '../middlewares/rateLimitMiddleware.js';
import { identifier } from '../middlewares/identification.js';
import {removeBackground} from '../controllers/removeController.js'


// Define rate limits for each plan
const freePlanLimiter = createRateLimiter(100); // 100 requests per hour
const premiumPlanLimiter = createRateLimiter(1000);



// Route to handle image generation
// router.post('/generate-image', imageController.generateImage);
router.post('/generate-image',identifier , generateImage)
// router.post('/generate-image', freePlanLimiter, apiKeyMiddleware, generateImage);
// router.post('/generate-image', apiKeyMiddleware, usageTracker, generateImage);
// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });
// Route to handle image upload and background removal
router.post('/remove-background', upload.single('file'), removeBackground);
export default router;