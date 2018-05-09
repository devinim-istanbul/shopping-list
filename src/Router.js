import React from 'react';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import {
    HouseScreen,
    ButtonScreen,
    ListScreen
} from './screens';

const Router = createStackNavigator({
    House: { screen: HouseScreen },
    Button: { screen: ButtonScreen },
    List: { screen: ListScreen }
}, {
    initialRouteName: 'List',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#6bc035',
            marginTop: Constants.statusBarHeight * -1,
        },
        headerTintColor: '#fff',
        headerPressColorAndroid: '#52ca46',
        headerTitleStyle: {
            fontWeight: '200',
        }
    }
});

export default Router;
