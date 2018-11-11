import { API_URL, API_ENDPOINTS, API_KEY } from "../constants";
import { request } from '../utils';

export const fetchMovieList = async (filter) => {
    const url = `${API_URL}/${API_ENDPOINTS.SEARCH.MOVIE.url}?api_key=${API_KEY}&query=${filter}`;
    const data = await request(url);
    return data.results || [];
};