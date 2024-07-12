import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents absolute flex items-start gap-1.5vw text-white">
        <h2 >Order your favourite book here</h2>
        <p1>Find books that inspire, educate, and entertain.</p1>
        <br></br>
        <button>View Menu</button>
        </div> 
       
    </div>
  )
}

export default Header