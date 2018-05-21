import { SESSION } from '../types';
import { USER_INITIAL_STATE } from './initial';

const { SIGN_UP, SIGN_IN, SIGN_OUT, UPDATE_USER } = SESSION;

export default (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.payload };
    case SIGN_IN:
      return { ...state, user: action.payload };
    case SIGN_OUT:
      return { ...state, user: {} };
    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};
