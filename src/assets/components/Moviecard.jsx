function Moviecard(movie){
    function onclicklike (){
       alert("Clicked")
    }
    return(
     <div className="moviecard">
        <div className="movieposter">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overly">
                <button className="favorite-btn" onClick={onclicklike}>🤍</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
     </div>
    )
}
export default Moviecard