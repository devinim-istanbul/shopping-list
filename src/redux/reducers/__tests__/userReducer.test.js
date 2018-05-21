import reducer from '../userReducer';
import { SESSION } from '../../types';
import { USER_INITIAL_STATE } from '../initial';

const { SIGN_UP, SIGN_IN, SIGN_OUT } = SESSION;

describe('userReducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(USER_INITIAL_STATE);
  });

  it('should set user to store after sign up', () => {
    const payload = {
      userId: 'MYCUSTOMUSERID',
      token: 'MYCUSTOMTOKEN',
      name: 'John Smith',
      email: 'john.smith@yopmail.com',
      phoneNumber: '+905005551122',
    };

    expect(
      reducer(
        {},
        {
          type: SIGN_UP,
          payload
        }
      )
    ).toEqual({
      user: payload
    });
  });

  it('should set user to store after sign in', () => {
    const payload = {
      userId: 'MYCUSTOMUSERID',
      token: 'MYCUSTOMTOKEN',
      name: 'John Smith',
      email: 'john.smith@yopmail.com',
      phoneNumber: '+905005551122',
    };

    expect(
      reducer(
        {},
        {
          type: SIGN_IN,
          payload
        }
      )
    ).toEqual({
      user: payload
    });
  });

  it('should remove user from store', () => {
    expect(
      reducer(
        {},
        {
          type: SIGN_OUT
        }
      )
    ).toEqual({
      user: {}
    });
  });
});
