import Auth from './components/Auth/Auth'
import Navbar from './components/Layout/Navbar'
import Pricing from './components/Pricing/Pricing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'

function App() {


  return (
    <div>
    <Navbar/>
  
    <BrowserRouter>
      <Routes>

    
   <Route path={'/'} element={<HomePage/>} />
   <Route path={'/Auth'} element={<Auth/>} />
   <Route path={'/Pricing'} element={<Pricing/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
