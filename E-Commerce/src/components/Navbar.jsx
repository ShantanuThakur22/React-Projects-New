import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">ShopEase</h1>
        <div className="space-x-4">
            <Link to='/' className='hover:text-blue-600'>Home</Link>
            <Link to='/products' className='hover:text-blue-600'>Products</Link>
            <Link to='/cart' className='hover:text-blue-600'>Cart</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
