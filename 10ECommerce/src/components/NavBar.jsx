import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex justify-between items-center px-20 bg-gray-200 font-bold h-17'>
        <div>
            <img src="src/assets/logo.jpg" alt="" height={100} width={100}/>
        </div>
        <ul className='flex gap-10'>
            <li className='hover:bg-gray-700 hover:text-white p-2'> <Link to='/'>Home</Link> </li>
            <li className='hover:bg-gray-700 hover:text-white p-2'> <Link to='/product'> Product </Link> </li>
            <li className='hover:bg-gray-700 hover:text-white p-2'><Link to='/contact'> Contact </Link> </li>
            <li className='hover:bg-gray-700 hover:text-white p-2'><Link to='/services'> Services </Link> </li>
            <li className='hover:bg-gray-700 hover:text-white p-2'><Link to='/about'> About </Link> </li>
            <li className='text-2xl mt-1 hover:text-gray-500'><Link to='/cart'><FaCartShopping /></Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
