import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { HfInference } from '@huggingface/inference';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required and must be a string.' });
    }

    // Initialize Hugging Face Inference API
    const model = new HfInference(process.env.HUGGINGFACE_API_KEY);

    // Request image generation from the model
    const blobImage = await model.request({
      model: process.env.MODEL_NAME,
      inputs: prompt,
    });

    if (!blobImage) {
      return res.status(500).json({ error: 'Failed to generate image.' });
    }

    // Generate a unique ID for the image and save it locally
    const imageId = uuidv4();
    const filePath = path.join(__dirname, `../images/${imageId}.jpeg`);

    // Ensure the directory exists and save the image
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, Buffer.from(await blobImage.arrayBuffer()));

    // Send the image back in the response
    res.set('Content-Type', 'image/jpeg');
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'An error occurred while generating the image.' });
  }
};
