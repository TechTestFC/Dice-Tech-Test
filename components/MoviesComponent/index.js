import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MovieList from './MovieList';

class MoviesComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Movie search yay!</Text>
                <TextInput placeholder={'Type something'} value={this.props.filter} onChangeText={this.props.onFilterChanged} />
                <MovieList movies={this.props.movies} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default MoviesComponent;    