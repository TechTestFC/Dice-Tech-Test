import { combineReducers } from 'redux';
import { SET_FILTER, SET_MOVIES } from './constants';

const initialState = {
    filter: '',
    movies: [],
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            const { filter } = action.payload;
            return { ...state, filter };
        }
        case SET_MOVIES: {
            const { movies } = action.payload;
            return { ...state, movies };
        }
        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
});