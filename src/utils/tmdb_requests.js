import TMDB_API_KEY from '../secrets/API_KEYS';

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchNetflisOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
}

export const TMBD_URL = `https://api.themoviedb.org/3`;