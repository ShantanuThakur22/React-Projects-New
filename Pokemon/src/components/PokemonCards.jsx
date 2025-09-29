import React from 'react'

function PokemonCards({data}) {
  return (
    <li className='pokemon-card'>
        <figure>
            <img src={data.sprites.front_shiny} alt={data.name} className='pokemon-image' />
        </figure>
        <h1 className='pokemon-name'>{data.name}</h1>
        <div className='pokemon-info pokemon-highlight'>
            <p>
                {data.types.map((item)=> item.type.name).join(", ")}
            </p>
        </div>

        <div className='grid-three-cols'>
            <p className='pokemon-info'>
                <span>Height:</span>{data.height}
            </p>
            <p className='pokemon-info'>
                <span>Weight:</span>{data.weight}
            </p>
            <p className='pokemon-info'>
                <span>Speed:</span>{data.stats[5].base_stat}
            </p>
        </div>

        <div className='grid-three-cols'>
            <p className='pokemon-info'>
                
                <span>Expirence:</span><p>{data.base_experience}</p>
            </p>
            <p className='pokemon-info'>
                
                <span>Attack:</span><p>{data.stats[0].base_stat}</p>
            </p>
            <p className='pokemon-info'>
                
                <span>Abilities:</span><p>{data.abilities.map((item)=> item.ability.name)
                    .slice(0,1)
                    .join(", ")}</p>
            </p>
        </div>
    </li>
  )
}

export default PokemonCards
