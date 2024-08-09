import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { FaSearch, FaShoppingCart, FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa";
import './navbar.css';


const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  const handleLogo = () => {
    // Redirect to cart page (replace with your actual redirection logic)
    window.location.href = "/"; // Example using window.location
  };

  const handleCartClick = () => {
    // Redirect to cart page (replace with your actual redirection logic)
    window.location.href = "/cart"; // Example using window.location
  };
  const handleSignInCLick = () => {
    // Redirect to cart page (replace with your actual redirection logic)
    window.location.href = "/login"; // Example using window.location
  };


  return (
    <nav className='navbar-component h-12 shadow-sm bg-slate-50 fixed w-4/5'>
      <div className='h-full container flex items-center justify-between'>
          <img className='logogg h-9 w-9 rounded-md cursor-pointer' onClick={handleLogo} src={assets.logo_1} alt='logo' />
        {/* <div className='navbar-logo h-9 w-9 text-5xl text-blue-700'>
        </div> */}
        <div className="navbar-menus">
          <ul className="navbar-menu flex items-center gap-7 cursor-pointer">
            <a href='#header-home' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a>
            <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
            <a href='#book_display' onClick={() => setMenu("Categories")} className={menu === "Categories" ? "active" : ""}>Categories</a>
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
            <button className="px-3 py-1 bg-transparent hover:bg-slate-100 border rounded-full" onClick={handleSignInCLick} >Signin</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
