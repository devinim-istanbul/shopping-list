import { from } from 'rxjs';

import user from './user';

export default store => {
  const observableState = from(store);

  user(observableState);
};
