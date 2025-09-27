import React, { useState } from 'react'
import { CartContext } from './cartContext'
import { useId } from 'react'

function CartContextProvider({children}) {
    const [cart,setCart] = useState([])
    const addToCart= (product)=>{   //Here I am getting the product from Products.jsx
        setCart((prev)=> [...prev,product] )
        console.log(cart)
    } 
    const removeFromCart= (id)=>{
        setCart((prev)=> prev.filter((items)=> items.id!== id))
     }
  return (
    <CartContext.Provider value={{addToCart,removeFromCart,cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
