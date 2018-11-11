import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MovieItem = ({ movie, onMovieStarred }) => {
    const buttonTitle = movie.starred ? 'Unstar' : 'Star';
    const buttonColor = movie.starred ? 'black' : 'blue';
    const releaseYear = movie.release_date.split('-')[0];
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.year}>{releaseYear}</Text>
        <Button
            style={styles.star}
            title={buttonTitle}
            color={buttonColor}
            onPress={() => onMovieStarred(movie)}
        />
    </View>
);
    };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    title: {
        flex: 50,
        fontWeight: 'bold',
    },
    year: {
        flex: 20,
    },
    star: {
        flex: 30,
    },
});

export default MovieItem;