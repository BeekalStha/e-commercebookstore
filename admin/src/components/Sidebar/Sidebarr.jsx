import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebarr = () => {
  return (
    <div className='sidebarr'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img className='add-icon' src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img className='order-icon' src={assets.order_icon} alt=''/>
                <p>List Items</p>
           </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img className='order-icon' src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebarr