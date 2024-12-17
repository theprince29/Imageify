import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { HfInference } from '@huggingface/inference';
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dpitkojhg"|| process.env.CLOUDINARY_CLOUD_NAME,
  api_key: 911458163234269,
  api_secret: "h0iCXGqKFpvzevqtdm8jBU3RR4U" || process.env.CLOUDINARY_API_SECRET,
});
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

    const tempImagePath = path.join(__dirname, `../temp/${uuidv4()}.jpeg`);

    // Ensure the directory exists and save the image temporarily
    await fs.ensureDir(path.dirname(tempImagePath));
    await fs.writeFile(tempImagePath, Buffer.from(await blobImage.arrayBuffer()));

    // Upload the image to Cloudinary
    const uploadResponse = await cloudinary.v2.uploader.upload(tempImagePath, {
      folder: 'generated_images', // Optional: specify folder in Cloudinary
      use_filename: true,
      unique_filename: false,
    });

    // Delete the temporary file after uploading
    await fs.remove(tempImagePath);

    // Send the Cloudinary URL back in the response
    res.status(200).json({ url: uploadResponse.secure_url });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'An error occurred while generating the image.' });
  }
};
