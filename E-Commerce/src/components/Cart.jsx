import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function Cart() {
    const {cart,removeFromCart} = useContext(CartContext)

    const handleRemove= (id)=>{
        removeFromCart(id)
    }
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">Your Cart 🛍️</h1>
      <div>
        {cart.length==0 ? 
        (<p className="text-gray-600 mt-2">No items in your cart yet.</p>)
    : (cart.map((items)=>(
        <div key={cart.id}>
            <img src={items.image} alt=""  className="w-20 h-20 object-cover rounded-lg"/>
            <h2 className='font-semibold mt-2'>{items.name}</h2>
              <p className='text-gray-500'>{items.price}</p>
              <button onClick={()=> handleRemove(items.id)}>Remove from cart</button>
        </div>
    )))}
      </div>
    </div>
  )
}

export default Cart
