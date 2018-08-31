import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigatorService from './services/navigationService';
import {
  EntryScreen,
  SignUpScreen,
  SignInScreen,
  ButtonScreen,
  ListScreen,
  CreateHouseScreen,
  JoinHouseScreen
} from './screens';

const Navigator = createStackNavigator(
  {
    Entry: { screen: EntryScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    JoinHouse: { screen: JoinHouseScreen },
    CreateHouse: { screen: CreateHouseScreen },
    Button: { screen: ButtonScreen },
    List: { screen: ListScreen }
  },
  {
    initialRouteName: 'Entry',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6bc035'
      },
      headerTintColor: '#fff',
      headerPressColorAndroid: '#52ca46',
      headerTitleStyle: {
        fontWeight: '200'
      },
      headerMode: 'screen'
    }
  }
);

const Router = () => (
  <Navigator
    ref={navigatorRef => {
      NavigatorService.initialize(navigatorRef);
    }}
  />
);

export default Router;
