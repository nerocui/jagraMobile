import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import LoginPage from './src/ui/screen/LoginScreen';
import SignupPage from './src/ui/screen/SignupScreen';
import LoadingScreen from './src/ui/screen/LoadingScreen';
import { store, persistor } from './src/store';
import SplashScreen from './src/ui/screen/SplashScreen';
import DashboardScreen from './src/ui/screen/DashboardScreen';
import SettingsScreen from './src/ui/screen/SettingsScreen';
import OrganizationsScreen from './src/ui/screen/OrganizationsScreen';

const AppNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
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
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null,
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null,
    }
  },
  Organizations: {
    screen: OrganizationsScreen,
    navigationOptions: {
      header: null,
    }
  }
},
{
  initialRouteName: 'Splash',
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