import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter] = useState(0)

  function add(){
    setCounter(counter+1)
  }
  function substract(){
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
     <h3>Counter App</h3>
     <p>{counter}</p>
     <div>
     <button onClick={add}>+</button>
     <button onClick={substract}>-</button>
     </div>
    </>
  )
}

export default App
