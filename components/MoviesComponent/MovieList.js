import React from 'react';
import { View, Text } from 'react-native';

class MovieList extends React.Component {
    render() {
        const movieList = this.props.movies.map((movie) => (<Text key={movie.id}>{movie.original_title}</Text>));
        return (
            <View>{movieList}</View>
        );
    }
}

export default MovieList;