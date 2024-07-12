import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <StoreContextProvider>
  </StoreContextProvider> */}
  <App />
  </BrowserRouter> 
 
)
