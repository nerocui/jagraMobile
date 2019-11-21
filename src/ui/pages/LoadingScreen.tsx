import React from 'react';
import LottieView from 'lottie-react-native';
import * as loadingAnimation from '../animations/loading-animation.json';

const LoadingScreen = () => {
    return (
        <LottieView source={loadingAnimation} autoPlay loop />
    );
};

export default LoadingScreen;
