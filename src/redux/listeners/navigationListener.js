import NavigatorService from '../../services/navigationService';
import { SESSION } from '../types';

export default async (action, store) => {
  switch (action.type) {
    case SESSION.SET_USER_TO_SESSION:
      if(store.sessionStore.house.id)
        NavigatorService.reset('List');
      else
        NavigatorService.reset('JoinHouse');
      break;
    case SESSION.SET_HOUSE_TO_SESSION:
      NavigatorService.reset('List');
      break;
    case SESSION.EMPTY_SESSION:
      NavigatorService.reset('SignIn');
      break;
    case SESSION.INITIALIZE:
      if(store.sessionStore.user.uid)
        if(store.sessionStore.house.id)
          NavigatorService.reset('List');
        else
          NavigatorService.reset('JoinHouse');
      else
        NavigatorService.reset('SignIn');
      break;
    default:
  }
}
