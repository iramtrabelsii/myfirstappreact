const API_KEY ="1f84bce585c0d324ecad921c312f0e5a";
const BASE_URL ="https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const searchmovies = async(query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
};