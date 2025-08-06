import { useEffect, useState} from "react";
import Moviecard from "../assets/components/Moviecard";
import '../css/Home.css';
import { searchmovies , getPopularMovies } from "../assets/services/API";

function Home () {
    const [search , setSearch] = useState("");
    const [movies , setMovies] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

          const loadpopularmovie = async()=> {
        try {
          const popularmovies = await getPopularMovies();
          setMovies(popularmovies);
        } catch (err) {
          console.log(err);
          setError("failed to load movies..");
        }
        finally {
          setLoading(false);
        }
      };
    useEffect (()=> {
      loadpopularmovie()
    },[] )

    const handlerform = async(e) => {
      e.preventDefault()
      if(!search.trim()) return
      if (loading) return
      setLoading(true)
      try{
        const searchformovie = await searchmovies(search);
        setMovies(searchformovie)
        setError(null)
        setLoading(false)
      } catch (err){
           console.log(err);
          setError("failed to search movies..");
      }
    };

    return (
        <div className="home">
           <form onSubmit={handlerform} className="search-form">
                <input 
                    type="text" 
                    placeholder="searching..." 
                    className="input-form"
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)}></input>
                <button type="submit" className="searchbtn">Search</button>
           </form>
             {error && <div className="error-message">{error}</div>}
           {loading ? (<div className="loading">loading...</div>) : (  
                     <div className="movies-grid">
             {movies.map((movie) => ( <Moviecard movie = {movie} key={movie.id}/>))}

           </div>)}

        </div>
    )
}
export default Home;