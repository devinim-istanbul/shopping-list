import * as LocalStorageService from '../../services/localStorageService';
import { SESSION } from "../types";

export default async (action, state) => {
  switch (action.type) {
    case SESSION.SET_USER_TO_SESSION:
      await LocalStorageService.setItem('user', state.sessionStore.user);
      break;
    case SESSION.SET_HOUSE_TO_SESSION:
      await LocalStorageService.setItem('house', state.sessionStore.house);
      break;
    case SESSION.UPDATE_USER_ON_SESSION:
      await LocalStorageService.setItem('user', { ...state.sessionStore.user, ...action.payload });
      break;
    case SESSION.UPDATE_HOUSE_ON_SESSION:
      await LocalStorageService.setItem('house', { ...state.sessionStore.house, ...action.payload });
      break;
    case SESSION.DELETE_USER_FROM_SESSION:
      await LocalStorageService.setItem('user', {});
      break;
    case SESSION.DELETE_HOUSE_FROM_SESSION:
      await LocalStorageService.setItem('house', {});
      break;
    case SESSION.EMPTY_SESSION:
      await LocalStorageService.setItem('house', {});
      await LocalStorageService.setItem('user', {});
      break;
    default:
  }
}
