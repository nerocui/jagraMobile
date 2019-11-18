import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import LoginPage from './ui/pages/LoginPage';
import SignupPage from './ui/pages/SignupPage';

const AppNavigator = createAnimatedSwitchNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: null,
    },
  },
  Signup: {
    screen: SignupPage,
    navigationOptions: {
      header: null,
    }
  }
},
{
  initialRouteName: 'Login',
  transition: (
    <Transition.Together>
      <Transition.Out type="slide-top" durationMs={600} interpolation="easeOut" />
      <Transition.In  type="slide-bottom" durationMs={600} interpolation="easeIn" />
    </Transition.Together>
  )
});

export default createAppContainer(AppNavigator);

