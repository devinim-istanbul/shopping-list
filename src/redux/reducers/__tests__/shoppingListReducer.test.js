import reducer from '../shoppingListReducer';
import { SHOPPING_LIST } from '../../types';
import { SHOPPING_INITIAL_STATE } from '../initial';

describe('shoppingList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(SHOPPING_INITIAL_STATE);
  });

  it('should addItem to shoppingList', () => {
    const state = { shoppingList: [] };

    const event = {
      type: SHOPPING_LIST.ADD_ITEM,
      payload: {
        id: 0,
        name: 'Beer',
        quantity: 2,
        done: false
      }
    };

    const newState = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 2,
          done: false
        }
      ]
    };

    expect(reducer(state, event)).toEqual(newState);
  });

  it('should editItem of shoppingList', () => {
    const state = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 2,
          done: false
        }
      ]
    };

    const event = {
      type: SHOPPING_LIST.EDIT_ITEM,
      payload: {
        id: 0,
        name: 'Coke'
      }
    };

    const newState = {
      shoppingList: [
        {
          id: 0,
          name: 'Coke',
          quantity: 2,
          done: false
        }
      ]
    };

    expect(reducer(state, event)).toEqual(newState);
  });

  it('should removeItem of shoppingList', () => {
    const state = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 2,
          done: false
        }
      ]
    };

    const event = {
      type: SHOPPING_LIST.REMOVE_ITEM,
      payload: {
        id: 0
      }
    };

    const newState = {
      shoppingList: []
    };

    expect(reducer(state, event)).toEqual(newState);
  });

  it('should incrementQuantity of item of shoppingList', () => {
    const state = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 2,
          done: false
        }
      ]
    };

    const event = {
      type: SHOPPING_LIST.INCREMENT_QUANTITY,
      payload: {
        id: 0
      }
    };

    const newState = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 3,
          done: false
        }
      ]
    };

    expect(reducer(state, event)).toEqual(newState);
  });

  it('should decrementQuantity of item of shoppingList', () => {
    const state = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 2,
          done: false
        }
      ]
    };

    const event = {
      type: SHOPPING_LIST.DECREMENT_QUANTITY,
      payload: {
        id: 0
      }
    };

    const newState = {
      shoppingList: [
        {
          id: 0,
          name: 'Beer',
          quantity: 1,
          done: false
        }
      ]
    };

    expect(reducer(state, event)).toEqual(newState);
  });
});
