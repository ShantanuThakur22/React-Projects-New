import React from 'react'


function MovieCard({movie,id}) {

    const handleButton= ()=>{

    }
  return (
    <div className='flex flex-wrap gap-2 justify-center items-center flex-col mt-10'>
        
      <div className='movie-card w-50 '>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      </div>
      <div className='movie-overlay'>
        <button className='fav-btn' onClick={handleButton}>❤️</button>
      </div>
      <div className='movie-info'>
        <h3 id={id}>{movie.title}</h3>
        <p id={id}>{movie.releasedate}</p>
      </div>
    </div>
  )
}

export default MovieCard
