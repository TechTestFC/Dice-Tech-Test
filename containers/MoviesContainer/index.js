import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setFilter } from '../../stores/movies/actions';
import { selectFilter, selectMovies } from '../../stores/movies/selectors';

class MoviesContainer extends React.Component {
    onChangeTextHandler = (filter) => {
        this.props.setFilter(filter);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <TextInput placeholder={'Type something'} value={this.props.filter} onChangeText={this.onChangeTextHandler} />
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