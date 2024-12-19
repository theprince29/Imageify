import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Loader2, Upload, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BackgroundRemover() {
  const [file, setFile] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = useCallback((event) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setOriginalImage(URL.createObjectURL(selectedFile));
      setProcessedImage(null);
      setError(null);
    }
  }, []);

  const handleRemoveBackground = useCallback(async () => {
    if (!file) {
      setError('Please select an image first.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);  // Make sure the form field name matches the Flask backend

    try {
      const baseURL = 'http://127.0.0.1:5000';  // Use Flask's URL directly
      const response = await axios.post(`${baseURL}/remove-background`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
      });

      // Check if the response is a valid image
      if (response.headers['content-type'].includes('image')) {
        const blob = new Blob([response.data], { type: 'image/png' });
        setProcessedImage(URL.createObjectURL(blob));
      } else {
        const data = new TextDecoder().decode(new Uint8Array(response.data));
        throw new Error(`Unexpected response: ${data}`);
      }
    } catch (err) {
      setError('Failed to process the image. Please try again.');
      console.error('Error details:', err.response ? err.response.data : err.message);
    } finally {
      setIsLoading(false);
    }
  }, [file]);

  const handleDownload = useCallback(() => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed-image.png'; // Filename for the download
      link.click();
    }
  }, [processedImage]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Background Remover</h1>
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <Label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
              Upload Image
            </Label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>
          <Button
            onClick={handleRemoveBackground}
            disabled={!file || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Remove Background
              </>
            )}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {originalImage && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Original Image</h2>
                <img src={originalImage} alt="Original" className="max-w-full h-auto rounded-lg" />
              </div>
            )}
            {processedImage && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Processed Image</h2>
                <img src={processedImage} alt="Processed" className="max-w-full h-auto rounded-lg" />
                <Button
                  onClick={handleDownload}
                  className="mt-4 w-full"
                  disabled={!processedImage}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Processed Image
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
