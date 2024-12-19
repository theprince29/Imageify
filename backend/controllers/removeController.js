import { readFileSync, unlinkSync } from 'fs';
import  post  from 'axios';

export async function removeBackground(req, res) {
    try {
        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No file provided' });
        }

        // Read the uploaded file
        const filePath = req.file.path;
        const fileData = readFileSync(filePath);

        // Send the file to the Flask service
        const response = await post('http://127.0.0.1:5000/remove-background', fileData, {
            headers: {
                'Content-Type': 'application/octet-stream',
            },
            responseType: 'arraybuffer', // Expect binary data in response
        });

        // Delete the temporary file after processing
        unlinkSync(filePath);

        // Return the processed image as the response
        res.setHeader('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to process the image', details: error.message });
    }
}