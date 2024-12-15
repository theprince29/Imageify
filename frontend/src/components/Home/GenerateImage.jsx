import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRef } from 'react';

export default function GenerateImage() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abortControllerRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error('Prompt is required.');
      return;
    }

    try {
      setIsSubmitting(true);
      setImage(null); // Reset the image state while generating a new one
      abortControllerRef.current = new AbortController()
      // Make the API call
      const response = await axios.post('http://localhost:3000/api/image/generate-image', { prompt }, {
        responseType: 'blob', // Receive image as a blob
        signal: abortControllerRef.current.signal
      });

      // Convert blob to a URL for display
      const imageUrl = URL.createObjectURL(response.data);
      setImage(imageUrl);

      toast.success('Image generated successfully!');
    } catch (error) {
        console.log(error)
      toast.error(error.response?.data?.error || 'Failed to generate image.');
    } finally {
      setIsSubmitting(false);
      abortControllerRef.current = null;
    }
  };

  function handleStop(){
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); 
      setIsSubmitting(false);
      toast.info('Image generation stopped.');
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Generate Image</CardTitle>
          <CardDescription>Enter a prompt to generate an AI image.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Input
                  id="prompt"
                  name="prompt"
                  type="text"
                  placeholder="Describe your image..."
                  required
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>
            <div className='flex mt-4 justify-evenly'>
            <Button className="w-64 " type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Generating...' : 'Generate Image'}
            </Button>
            <Button disabled={!isSubmitting} onClick = {handleStop}>Stop</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          {image && (
            <div className="mt-4">
              <img src={image} alt="Generated AI" className="rounded-lg shadow-md max-w-full" />
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
