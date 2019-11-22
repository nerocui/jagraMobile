import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import * as loadingAnimation from '../animations/loading-animation.json';
import { State } from 'jagrastate/models';

const SplashScreen = (props: any) => {
    useEffect(() => {
        if (props.loggedIn) {
            props.navigation.navigate('Dashboard');
        } else {
            props.navigation.navigate('Login');
        }
    }, [props.loggedIn]);
    return (
        <LottieView source={loadingAnimation} autoPlay loop />
    );
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

export default connect(MapStateToProps)(SplashScreen);
