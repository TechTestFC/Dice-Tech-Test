import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class MoviesComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={'Type something'} value={this.props.filter} onChangeText={this.props.onFilterChanged} />
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