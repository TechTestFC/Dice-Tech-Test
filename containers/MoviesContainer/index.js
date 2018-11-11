import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setFilter } from '../../stores/movies/actions';
import { selectFilter, selectMovies } from '../../stores/movies/selectors';
import MoviesComponent from '../../components/MoviesComponent';

class MoviesContainer extends React.Component {
    onFilterChangedHandler = (filter) => {
        this.props.setFilter(filter);
    }
    render() {
        return (
            <MoviesComponent
                filter={this.props.filter}
                onFilterChanged={this.onFilterChangedHandler}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    filter: selectFilter(state),
    movies: selectMovies(state),
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setFilter,
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);    