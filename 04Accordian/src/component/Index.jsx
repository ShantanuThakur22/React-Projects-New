//Always check the last of the page
import React, {useState} from 'react'
import data from './data'

function Index() {
    const [selected,setSelected]= useState(null)

    function handlesingleSelectio(id){
        setSelected(id === selected ? null : id)
        
    }

    
  return (
    <div>
      <h1>Accordian</h1>
      <div>
        
        {
            data.map((item)=>(
                
                <div>
                    
                    <p>{item.question}</p>
                    <button onClick={()=> handlesingleSelectio(item.id)}>+</button>
                    {
                        selected === item.id? <p>{item.answer}</p>:null
                    }
                </div>
                
            ))
        }
      </div>
    </div>
  )
}

export default Index

// const [selected,setSelected]= useState(null)

// function handlesingleSelectio(id){
//     setSelected(id === selected ? null : id)
    
// }

// When you call handlesingleSelectio with an id, it checks:

// If the passed id is the same as the currently selected one (selected),

// It sets selected to null, meaning it deselects it.

// If the passed id is different from the currently selected,

// It sets selected to this new id, meaning it selects this new item.