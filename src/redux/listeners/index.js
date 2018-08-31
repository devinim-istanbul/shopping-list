import navigationListener from './navigationListener';
import localStorageListener from './localStorageListener';

export default ({ getState }) => next => async action => {
  next(action);
  const state = getState();
  await localStorageListener(action, state);
  await navigationListener(action, state);
};
