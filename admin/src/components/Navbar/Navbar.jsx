import React from 'react'
import './Navbar.jsx'
import './Navbar.css'
import { assets } from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo_1} alt="" />
        <img className='profile' src={assets.profile_icon} alt="" />
        </div>
  )
}

export default Navbar