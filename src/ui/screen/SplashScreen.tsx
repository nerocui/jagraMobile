import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import * as loadingAnimation from '../animations/loading-animation.json';
import { State } from 'jagrastate/models';
import { View, Text } from 'react-native';
import screenStyle from '../../style/screen';
import styles from '../../style/splashScreen';

const SplashScreen = (props: any) => {
    if (props.loggedIn) {
        props.navigation.navigate('Dashboard');
    }
    useEffect(() => {
        if (props.loggedIn) {
            props.navigation.navigate('Dashboard');
        } else {
            props.navigation.navigate('Login');
        }
    }, [props.loggedIn]);
    return (
        <View style={screenStyle.container}>
            <LottieView source={loadingAnimation} autoPlay loop />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Jagra</Text>
            </View>
        </View>
    );
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

export default connect(MapStateToProps)(SplashScreen);
