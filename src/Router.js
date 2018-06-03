import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import { SignUpScreen, SignInScreen, ButtonScreen, ListScreen, CreateHouseScreen, JoinHouseScreen } from './screens';

const Router = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    JoinHouse: { screen: JoinHouseScreen },
    CreateHouse: { screen: CreateHouseScreen },
    Button: { screen: ButtonScreen },
    List: { screen: ListScreen }
  },
  {
    initialRouteName: 'SignIn',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6bc035',
        marginTop: Constants.statusBarHeight * -1
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

export default Router;
