import "../../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";


function Moviecard({movie}) {
    const {isFavorite , addToFavorite , removeFavorite} = useMovieContext()

const favorite = isFavorite(movie.id)

    function onclicklike (e){
       e.preventDefault()
       if (favorite) removeFavorite(movie.id)
       else addToFavorite(movie)
    }
    return (
     <div className="moviecard">
        <div className="movieposter">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overly">
               <button className={`favorite-btn ${favorite ? "active" : ""}`}
                     onClick={onclicklike}>🤍</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
     </div>
    ) 
}
export default Moviecard