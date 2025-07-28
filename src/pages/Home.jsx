import { useEffect, useState} from "react";
import Moviecard from "../assets/components/Moviecard";
import '../css/Home.css';
import { searchmovies , getPopularMovies } from "../assets/services/API";

function Home () {
    const [search , setsearch] = useState("");
    const [movies , setmovies] = useState ([]);
    const [loading , setloading] = useState(true);
    const [ error , seterror] = useState (null);
    useEffect (()=> {
      const loadpopularmovie = async()=> {
        try {
          const popularmovies = await getPopularMovies();
          setmovies(popularmovies);
        } catch (err) {
          console.log(err);
          seterror("failed to load movies..");
        }
        finally {
          setloading(false);
        }
      };
      loadpopularmovie()
    },[] )

    const handlerform = async(e) => {
      e.preventDefault()
      if(!search.trim()) return
      if (loading) return
      setloading(true)
      try{
        const searchformovie = await searchmovies (search);
        setmovies (searchformovie)
        seterror(null)
      } catch (err){
           console.log(err);
          seterror("failed to search movies..");
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
                    onChange={(e)=> setsearch(e.target.value)}></input>
                <button type="submit" className="searchbtn">Search</button>
           </form>
             {error && <div className="error-message">{error}</div>}
           {loading ? (<div className="loading">loading...</div>) : (           <div className="movies-grid">
             {movies.map((movie) => ( <Moviecard movie = {movie} key={movie.id}/>))}

           </div>)}

        </div>
    )
}
export default Home;