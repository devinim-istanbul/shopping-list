import { generateShoppingList } from '../shoppingListActions';

import { SHOPPING_LIST } from '../../types';

describe('shoppingListActions actions', () => {
  it('should generate shopping list from shopping list events', () => {
    const shoppingListEvents = [
      {
        type: 'ADD_ITEM',
        payload: {
          done: false,
          id: 1,
          name: 'Elma',
          quantity: 3
        }
      },
      {
        type: 'ADD_ITEM',
        payload: {
          done: false,
          id: 2,
          name: 'Bira',
          quantity: 3
        }
      },
      {
        type: 'EDIT_ITEM',
        payload: {
          done: false,
          id: 1,
          name: 'Elma',
          quantity: 4
        }
      },
      {
        type: 'REMOVE_ITEM',
        payload: {
          id: 2
        }
      },
      {
        type: 'ADD_ITEM',
        payload: {
          done: false,
          id: 3,
          name: 'Bisküvi',
          quantity: 3
        }
      }
    ];

    const shoppingListAction = {
      type: SHOPPING_LIST.SET_LIST,
      payload: [
        {
          done: false,
          id: 1,
          name: 'Elma',
          quantity: 4
        },
        {
          done: false,
          id: 3,
          name: 'Bisküvi',
          quantity: 3
        }
      ]
    };
    expect(generateShoppingList(shoppingListEvents)).toEqual(
      shoppingListAction
    );
  });
});
