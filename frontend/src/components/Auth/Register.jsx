import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''

  })

  
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)


  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)
      const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
      // Sending data to backend API using axios
      const response = await axios.post(`${baseURL}/api/auth/register`, {
        email: formData.email,
        password: formData.password,
        username: formData.username
      })

      if (response.status == 200) {
        // Handle successful registration

        console.log('Registration successful:', response.data)
        toast.success("Registration successful")
        navigate('/')

       
      } else {
        // Handle errors returned by the API
        setError(response.data.message || "Something went wrong")
        console.log(response.data)
        toast.error(response.data.message || "Something went wrong")
      
      }
    } catch (err) {
      // Catch any errors that occur during the API call
      console.log(err.response.data.message)
     
      setError(err.response.data.message)
      if(err.response.data.message == 'email must be a valid email'){
        
        toast.error('email must be a valid email')
      }
      else{
        toast.error("password should contain capital, small letter, numberic value and alfa numeric value")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
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
                <Label htmlFor="email">Username</Label>
                <Input 
                  id="username" 
                  name="username"
                  type="text" 
                  placeholder="jon_doe" 
                  required
                  value={formData.username}
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  name="confirmPassword"
                  type="password" 
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
            <Button 
              className="w-full mt-4" 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Sign Up'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          {/* Optional footer */}
        </CardFooter>
      </Card>
    </div>
  )
}
