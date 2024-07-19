import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar'
import { createBrowserRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Header from './Components/Header/Header'
import Footer from './Footer/Footer'
import Login from './Pages/Login/Login'

function App() {
 

  return (
    <>
    <div className="app">
      <Navbar/>
      <br></br>
      {/* <Header/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <br/>
      <div className="footer">
        <Footer />
      </div>
    </div>
     
      
    
    </>
  )
}

export default App
