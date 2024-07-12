import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { FaSearch, FaShoppingCart, FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleCartClick = () => {
    // Redirect to cart page (replace with your actual redirection logic)
    window.location.href = "/cart"; // Example using window.location
  };

  return (
    <nav className='navbar-component h-9 shadow-sm bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center justify-between'>
        <div className='navbar-logo h-9 w-9 text-5xl text-blue-700'>
          <img src={assets.logo} alt='logo' />
        </div>
        <div className="navbar-menus">
          <ul className="navbar-menu flex items-center gap-7 cursor-pointer">
            <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
            <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
            <li onClick={() => setMenu("Categories")} className={menu === "Categories" ? "active" : ""}>Categories</li>
          </ul>
        </div>
        <div className="navbar-right gap-7 flex items-center">
          <div className="search">
            {showSearch && (
              <div className="search-bar-container">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
              </div>
            )}
            {!showSearch && <FaSearch onClick={handleSearchClick} />}
          </div>
          <div className="shopping-cart text-2xl relative" onClick={handleCartClick}>
            <span>
              <FaShoppingCart />
            </span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p> {/* Replace with logic to display cart item count */}
            </div>
          </div>
          <div className="signin">
            <button className="px-3 py-1 bg-transparent hover:bg-slate-100 border rounded-full">Signin</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
