import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './component/Index'
import Accordion from './component/Accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
      {/* <Accordion/> */}
    </>
  )
}

export default App
