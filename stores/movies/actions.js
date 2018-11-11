import { SET_FILTER, SET_MOVIES, SET_IS_FETCHING } from "./constants";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter,
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies,
});

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING,
    isFetching,
})