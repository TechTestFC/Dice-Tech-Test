import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import loaderImg from '../../assets/loader.png';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deg: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.deg,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear(),
            },
        ).start();
    }

    render() {
        const spin = this.state.deg.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        transform: [{ rotate: spin }],
                        width: 50,
                        height: 50,
                    }} 
                    source={loaderImg}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;