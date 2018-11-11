import React from 'react';
import { View, Text } from 'react-native';

const MovieItem = ({ movie }) => (
    <View>
        <Text>{movie.original_title}</Text>
    </View>
);

export default MovieItem;