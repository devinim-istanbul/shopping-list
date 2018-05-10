import reducer from '../shoppingListReducer';
import { SHOPPING_LIST } from '../../types';
import { SHOPPING_INITIAL_STATE } from '../initial';

describe('shoppingList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(SHOPPING_INITIAL_STATE);
  });

  it('should set shoppingList to store', () => {
    const payloadSnapshot = [
      {
        name: 'bira',
        quantity: 2
      }
    ];

    expect(
      reducer(
        {},
        {
          type: SHOPPING_LIST.SET_LIST,
          payload: payloadSnapshot
        }
      )
    ).toEqual({
      shoppingList: payloadSnapshot
    });
  });
});
