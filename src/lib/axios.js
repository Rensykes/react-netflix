import axios from 'axios';
import TMBD_URL from '../utils/tmdb_requests';

export const tmdbInstance = axios.create({
    baseURL: TMBD_URL
});

