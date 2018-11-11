import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MovieList from './MovieList';
import Loader from './Loader';

class MoviesComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Movie search</Text>
                <TextInput style={styles.filter} placeholder={'Type something'} value={this.props.filter} onChangeText={this.props.onFilterChanged} />
                {
                    this.props.isFetching
                        ? <Loader />
                        : <MovieList movies={this.props.movies} onMovieStarred={this.props.onMovieStarred} />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50,
      marginLeft: 20,
      marginRight: 20,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    filter: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
    },
});

export default MoviesComponent;    