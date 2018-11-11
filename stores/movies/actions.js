import { SET_FILTER, SET_MOVIES } from "./constants";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter,
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies,
});