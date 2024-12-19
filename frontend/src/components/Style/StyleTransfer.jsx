import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Typewriter } from "react-simple-typewriter";

export default function StyleTransfer() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abortControllerRef = useRef(null);
  const [displayPrompt, setDisplayPrompt] = useState('');

  // Sync the user input with the typewriter effect
  useEffect(() => {
    if (prompt === '') {
      setDisplayPrompt('');
    } else {
      setDisplayPrompt(prompt);
    }
  }, [prompt]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error('Prompt is required.');
      return;
    }

    try {
      setIsSubmitting(true);
      setImage(null); // Reset the image state while generating a new one
      abortControllerRef.current = new AbortController();


      // Make the API call
      const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
      const response = await axios.post(`${baseURL}/api/image/generate-image`, { prompt } );
      // console.log(response);
      
      const imageUrl = (response.data.url);
      setImage(imageUrl);

      toast.success('Image generated successfully!');
    } catch (error) {
      if (axios.isCancel(error)) {
        toast.error('Image generation was canceled.');
      } else {
        console.error(error);
        toast.error(error.response?.data?.error || 'Failed to generate image.');
      }
    } finally {
      setIsSubmitting(false);
      abortControllerRef.current = null;
    }
  };

  function handleStop() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsSubmitting(false);
      toast.info('Image generation stopped.');
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px] relative">
        <CardHeader>
          <CardTitle>Generate Image</CardTitle>
          <CardDescription>Enter a prompt to generate an AI image.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 relative">
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt</Label>
                <div className="relative">
                  <input
                    id="prompt"
                    name="prompt"
                    type="text"
                    required
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-transparent relative z-10"
                  />
                  {prompt === '' && (
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      <Typewriter
                        words={["Describe your image...", "A scenic mountain view", "A futuristic cityscape"]}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex mt-4 justify-evenly">
              <Button className="w-64" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Generating...' : 'Generate Image'}
              </Button>
              <Button disabled={!isSubmitting} onClick={handleStop}>
                Stop
              </Button>
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
