import { SET_FILTER, SET_MOVIES, SET_IS_FETCHING } from './constants';

const initialState = {
    filter: '',
    isFetching: false,
    movies: [],
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            const { filter } = action;
            return { ...state, filter };
        }
        case SET_MOVIES: {
            const { movies } = action;
            return { ...state, movies };
        }
        case SET_IS_FETCHING: {
            const { isFetching } = action;
            return { ...state, isFetching };
        }
        default:
            return state;
    }
};

export default moviesReducer;