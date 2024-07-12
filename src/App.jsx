import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
    <div className="app">
      <Navbar/>
      <br></br>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/order' element = {<PlaceOrder/>}></Route>
      </Routes>
    </div>
     
      
    
    </>
  )
}

export default App
