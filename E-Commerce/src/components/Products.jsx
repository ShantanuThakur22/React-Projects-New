import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: 'src/assets/Headphone.jpg'
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    image: 'src/assets/Speakerjpg.jpg'
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1299,
    image: 'Mouse.jpg'
  }
];



function Products() {
    const {addToCart} = useContext(CartContext)

    const handleBtn= (item)=>{
        addToCart(item)
    }
  return (
    <div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((items)=>(
          <div key={items.id} className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <img src={items.image} alt="img" className="w-40 h-40 mx-auto object-cover rounded-lg"/>
              <h2 className='font-semibold mt-2'>{items.name}</h2>
              <p className='text-gray-500'>{items.price}</p>
              <button onClick={()=>handleBtn(items)} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
