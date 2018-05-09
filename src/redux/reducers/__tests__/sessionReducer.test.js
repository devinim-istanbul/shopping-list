import reducer from '../sessionReducer';
import { SESSION } from '../../types';
import { SESSION_INITIAL_STATE } from '../initial';

describe('sessionReducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(SESSION_INITIAL_STATE);
  });

  it('should set house to store', () => {
    const payloadSnapshot = {
      name: 'house1',
      user: {
        name: 'dinco'
      }
    };

    expect(
      reducer(
        {},
        {
          type: SESSION.SET_HOUSE_TO_SESSION,
          payload: payloadSnapshot
        }
      )
    ).toEqual({
      house: payloadSnapshot
    });
  });

  it('should remove house from store', () => {
    expect(
      reducer(
        {},
        {
          type: SESSION.DELETE_HOUSE_FROM_SESSION
        }
      )
    ).toEqual(SESSION_INITIAL_STATE);
  });
});
