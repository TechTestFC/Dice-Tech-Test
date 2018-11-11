import React from 'react';
import { connect } from 'react-redux';

import { setFilter, setMovies, setIsFetching } from '../../stores/movies/actions';
import MoviesComponent from '../../components/MoviesComponent';
import { fetchMovieList } from '../../api/movies/fetchMovieList';
import { debounce } from '../../api/utils';

class MoviesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.fetchMovies = debounce(this.fetchMovies, 500).bind(this);
    }
    
    fetchMovies = async (filter) => {
        const movies = await fetchMovieList(filter);
        this.props.setMovies(movies);
        this.props.setIsFetching(false);
    }

    onFilterChangedHandler = async (filter) => {
        this.props.setIsFetching(true);
        this.props.setFilter(filter);
        await this.fetchMovies(filter);
    }

    render() {
        return (
            <MoviesComponent
                filter={this.props.filter}
                onFilterChanged={this.onFilterChangedHandler}
                movies={this.props.movies}
                isFetching={this.props.isFetching}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { filter, movies, isFetching } = state;
    return { filter, movies, isFetching };
}

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch(setFilter(filter)),
    setMovies: (movies) => dispatch(setMovies(movies)),
    setIsFetching: (isFetching) => dispatch(setIsFetching(isFetching)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);    