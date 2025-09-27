import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies,setMovies]= useState([])  
  const [error,setError] =useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const loadPopularMovies= async ()=>{
        try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch (error) {
            console.log(error)
            setError("Failed to load the data")
        }
        finally{
            setLoading(false)
        }
    }
    loadPopularMovies()
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const searchMovieData= await searchMovies(searchMovie)
        setMovies(searchMovieData)


    } catch (error) {
        
    }
    setSearchMovie("");
  };

  return (
    <div className="home mt-5 ">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies"
          className="input-box border mr-2"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button className="border font-medium rounded p-2">Search</button>
      </form>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p> }
      {movies.map(
        (items) =>
          items.title.toLocaleLowerCase().startsWith(searchMovie) && ( //checks if the movie’s title (lowercased via toLocaleLowerCase) starts with the search string,
            <MovieCard movie={items} key={items.id} />
          )
      )}
    </div>
  );
}

export default Home;
