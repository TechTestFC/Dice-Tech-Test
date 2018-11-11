import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
    render() {
        const movieList = this.props.movies.map((movie) => (<MovieItem key={movie.id} movie={movie} onMovieStarred={this.props.onMovieStarred} />));
        return (
            <View style={styles.container}>{movieList}</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default MovieList;