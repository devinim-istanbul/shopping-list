import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

export const navigateBySessionState = () => async (dispatch, getState) => {
  let house = await getHouseFromLocalStorage();
  house = house && getHouseFromStore(getState());
  if (house) NavigationActions.navigate({ routeName: 'Button' });
};

const getHouseFromStore = ({ sessionStore }) => sessionStore.house;

const getHouseFromLocalStorage = async () => {
  const house = await AsyncStorage.getItem('@ShoppingList:house');
  return house;
};
