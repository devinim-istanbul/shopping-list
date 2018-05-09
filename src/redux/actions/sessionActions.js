import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

export const navigateBySessionState = () => async (dispatch, getState) => {
    let house = await getHouseFromLocalStorage();
    house = house && getHouseFromStore(getState());
    house &&  NavigationActions.navigate({ routeName: 'Button' });
};

const getHouseFromStore = ({ sessionStore }) => {
    return sessionStore.house;
};

const getHouseFromLocalStorage = async () =>  {
    return await AsyncStorage.getItem('@ShoppingList:house');
};
