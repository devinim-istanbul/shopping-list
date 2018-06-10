import { SESSION } from '../types';
import { SESSION_INITIAL_STATE } from './initial';

const {
  SET_USER_TO_SESSION,
  UPDATE_USER_ON_SESSION,
  DELETE_USER_FROM_SESSION,

  SET_HOUSE_TO_SESSION,
  DELETE_HOUSE_FROM_SESSION,

  INITIALIZE,
  EMPTY_SESSION
} = SESSION;

export default (state = SESSION_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_TO_SESSION:
      return { ...state, user: action.payload };
    case DELETE_USER_FROM_SESSION:
      return { ...state, user: {} };
    case UPDATE_USER_ON_SESSION:
      return { ...state, user: { ...state.user, ...action.payload } };
    case SET_HOUSE_TO_SESSION:
      return { ...state, house: action.payload };
    case DELETE_HOUSE_FROM_SESSION:
      return { ...state, house: {} };
    case INITIALIZE:
      return { ...state, ...action.payload };
    case EMPTY_SESSION:
      return { ...state, user: {}, house: {} };
    default:
      return state;
  }
};
