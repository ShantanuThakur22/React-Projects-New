import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/ABout'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>   
        <Route path='/services' element={<Services/>}/>   
        <Route path='/about' element={<About/>}/>   
        <Route path='/cart' element={<Cart/>}/>   
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
