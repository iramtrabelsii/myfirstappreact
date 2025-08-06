import '../css/Favorites.css';
import { useMovieContext } from "../assets/components/contexts/MovieContext";
import Moviecard from '../assets/components/Moviecard';


function Favorites(){
    const {favorites} = useMovieContext();
    console.log("favorites" , favorites)
    if (favorites){
      return (
        <div className ="favorites">
           <h2>Your Favorites</h2>
          <div className="movies-grid">
             {favorites.map((movie) => ( <Moviecard movie = {movie} key={movie.id}/>))}
          </div>
        </div>
      )
    }

    return(
      <div className="Favorites-empty">
         <h2>favorite page</h2>
      </div>
    )
}
export default Favorites;