import { API_URL, API_ENDPOINTS, API_KEY } from "../constants";

export const fetchMovieList = async (filter) => {
    const url = `${API_URL}/${API_ENDPOINTS.SEARCH.MOVIE.url}?api_key=${API_KEY}&query=${filter}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
};