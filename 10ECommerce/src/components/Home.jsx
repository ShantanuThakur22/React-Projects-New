import React from 'react'

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1580894908361-967195033f0b?auto=format&fit=crop&w=500&q=60",
    price: 2499
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=500&q=60",
    price: 4999
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1e1?auto=format&fit=crop&w=500&q=60",
    price: 1999
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image: "https://images.unsplash.com/photo-1584270354949-1f7d1f2f62d3?auto=format&fit=crop&w=500&q=60",
    price: 1299
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60",
    price: 3499
  },
  {
    id: 6,
    name: "DSLR Camera",
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2?auto=format&fit=crop&w=500&q=60",
    price: 45999
  },
  {
    id: 7,
    name: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60",
    price: 55999
  },
  {
    id: 8,
    name: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=60",
    price: 29999
  }
];




function Home() {
  return (
   <div>
     <div>
      <img src="src/assets/HeroBanner.jpg" alt="" className='w-full h-[430px]'/>
    </div>
    <h2 className='text-center text-2xl text-bold mt-4'>Featured Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col items-center text-center"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-40 h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-700 font-medium mb-3">₹{item.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  ))}
</div>

   </div>
  )
}

export default Home
