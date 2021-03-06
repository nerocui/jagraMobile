import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';
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
import { FetchBingDaily } from 'jagrastate/action';
import { connect } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';

const AuthStack = createStackNavigator({
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
},{
  initialRouteName: 'Login',
  mode: 'card',
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
});

const AppNavigator = createStackNavigator({
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
  initialRouteName: 'Dashboard',
  mode: 'card',
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
});

const wrapperAppContainer = createSwitchNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  App: AppNavigator,
  Auth: AuthStack,
}, {
  initialRouteName: 'Splash',
});

const AppContainer = createAppContainer(AppNavigator);

const App = (props: any) => {
  props.FetchBingDaily();
  return <AppContainer />;
};

const ConnectedApp = connect(null, {FetchBingDaily})(App);

export default () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedApp />
      </PersistGate>
    </Provider>
  );
};
