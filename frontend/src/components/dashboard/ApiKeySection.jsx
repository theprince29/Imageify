import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function ApiKeySection() {
  const [apiKey, setApiKey] = useState("");

  const generateApiKey = () => {
    // In a real application, this would be an API call to generate a key
    const newKey = "api_" + Math.random().toString(36).substr(2, 9);
    setApiKey(newKey);
    toast({
      title: "API Key Generated",
      description: "Your new API key has been generated successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Key</CardTitle>
        <CardDescription>Generate or view your API key</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input value={apiKey} readOnly placeholder="Your API key will appear here" />
          <Button onClick={generateApiKey}>Generate</Button>
        </div>
      </CardContent>
    </Card>
  );
}
