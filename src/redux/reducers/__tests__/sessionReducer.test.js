import reducer from '../sessionReducer';
import { SESSION } from '../../types';
import { SESSION_INITIAL_STATE } from '../initial';

describe('sessionReducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(SESSION_INITIAL_STATE);
  });

  it('should set user to store', () => {
    expect(
      reducer(
        {
          house: { id: 1, name: 'house1' }
        },
        {
          type: SESSION.SET_USER_TO_SESSION,
          payload: { id: 1, name: 'user1' }
        }
      )
    ).toEqual({
      user: { id: 1, name: 'user1' },
      house: { id: 1, name: 'house1' }
    });
  });

  it('should remove user from store', () => {
    expect(
      reducer(
        {
          user: { id: 1, name: 'user1' },
          house: { id: 1, name: 'house1' }
        },
        {
          type: SESSION.DELETE_USER_FROM_SESSION
        }
      )
    ).toEqual({
      user: {},
      house: { id: 1, name: 'house1' }
    });
  });

  it('should set house to store', () => {
    expect(
      reducer(
        {
          user: { id: 1, name: 'user1' }
        },
        {
          type: SESSION.SET_HOUSE_TO_SESSION,
          payload: { id: 1, name: 'house1' }
        }
      )
    ).toEqual({
      user: { id: 1, name: 'user1' },
      house: { id: 1, name: 'house1' }
    });
  });

  it('should remove house from store', () => {
    expect(
      reducer(
        {
          user: { id: 1, name: 'user1' },
          house: { id: 1, name: 'house1' }
        },
        {
          type: SESSION.DELETE_HOUSE_FROM_SESSION
        }
      )
    ).toEqual({
      user: { id: 1, name: 'user1' },
      house: {}
    });
  });
});
