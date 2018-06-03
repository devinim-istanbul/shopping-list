import { SESSION } from '../types';
import { SESSION_INITIAL_STATE } from './initial';

export default (state = SESSION_INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION.SET_HOUSE_TO_SESSION:
      return { ...state, house: action.payload };
    case SESSION.DELETE_HOUSE_FROM_SESSION:
      return SESSION_INITIAL_STATE;
    case SESSION.INITIALIZE_HOUSE:
      return { ...state, house: action.payload };
    default:
      return state;
  }
};
