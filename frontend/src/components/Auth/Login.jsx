import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Context } from '@/main'
import { useContext } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
      const response = await axios.post(`${baseURL}/api/auth/login`, formData);
      console.log('Login successful:', response.data);
      toast.success('Login successful!'); // Show success toast   
      setIsAuthorized(true);

    } catch (err) {
      console.error('Login failed:', err);
      toast.error(err.response?.data?.message || 'Failed to login. Please try again.'); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className='flex items-center justify-center min-h-screen'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to login.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="m@example.com" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <Button className="w-full mt-4" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          {/* Optional footer */}
        </CardFooter>
      </Card>
    </div>
  );
}
