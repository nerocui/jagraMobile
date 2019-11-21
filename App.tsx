import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import LoginPage from './src/ui/pages/LoginPage';
import SignupPage from './src/ui/pages/SignupPage';
import LoadingScreen from './src/ui/pages/LoadingScreen';
import { store, persistor } from './src/store';

const AppNavigator = createStackNavigator({
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
  },
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      header: null,
    }
  },
},
{
  initialRouteName: 'Login',
  // transition: (
  //   <Transition.Together>
  //     <Transition.Out type="slide-top" durationMs={600} interpolation="easeOut" />
  //     <Transition.In  type="slide-bottom" durationMs={600} interpolation="easeIn" />
  //   </Transition.Together>
  // )
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};