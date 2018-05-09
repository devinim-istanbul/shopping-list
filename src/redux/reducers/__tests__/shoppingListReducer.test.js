import reducer from '../shoppingListReducer';
import { SHOPPING_LIST } from '../../types';

describe('shoppingList reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                shoppingList: null,
            }
        )
    });

    it('should set shoppingList to store', () => {
        expect(reducer({}, {
            type: SHOPPING_LIST.SET_LIST,
            payload: [{
                name: "bira",
                quantity: 2
            }]
        })).toEqual(
            {
                shoppingList: [{
                    name: "bira",
                    quantity: 2
                }]
            }
        )
    });
});
