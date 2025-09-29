import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PokemonCards from './PokemonCards'
// import "./index.css";

function Pokemon() {

    const[pokemon,setPokemon]= useState([])

    const[loading,setLoading]= useState(true)

    const[error,setError] = useState(null)

    const[input,setInput] = useState('')

    const API= 'https://pokeapi.co/api/v2/pokemon?limit=124'

     const fetchPokemon= async ()=>{
            try {
                const res= await fetch(API)
                const data= await res.json()
                // console.log(data)

                const detailedPokemonData= data.results.map(async (items)=>{
                    const result = await fetch(items.url)
                    const data= await result.json()
                    // console.log(data)
                    return data
                })

                // console.log(detailedPokemonData)

                const finalData= await Promise.all(detailedPokemonData)

                console.log(finalData);
                setPokemon(finalData)
                setLoading(false)
                
                
                

            } catch (error) {
                console.error(error)
                setLoading(false)
                setError(error)
            }
     }

     useEffect(()=>{
        fetchPokemon()
     },[])

     //Serach Functionality

     const searchPokemon =  pokemon.filter((currPokemon)=> currPokemon.name.toLowerCase().includes(input.toLowerCase()))
     

     if(loading){
        return <div>Loading...</div>
     }

     if(error){
        return <div>{error.message}</div>
     }

  return (
    <section className='container'>
        <header>
            <h1>Lets catch Pokemon</h1>
        </header>
        <div className='pokemon-search'>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Search Pokemon'/>
        </div>
        <div>
            <ul className='cards'>
        {searchPokemon.map((items)=>(
            <PokemonCards key={items.id} data={items}/>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default Pokemon
