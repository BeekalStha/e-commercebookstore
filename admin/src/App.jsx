import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebarr from './components/Sidebar/Sidebarr'
import { Route, Routes } from 'react-router-dom'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'
import Add from './Pages/Add/Add'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
      <Sidebarr/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>

      </div>
    </div>
  )
}

export default App