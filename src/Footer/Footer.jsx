import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <p className="text-center font-bold">© {new Date().getFullYear()} G&G Store</p>
    </footer>
    </div>
  )
}
export default Footer