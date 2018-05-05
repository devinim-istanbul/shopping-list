import React from 'react';
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
    initialRouteName: 'House'
});

export default Router;
