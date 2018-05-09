import { SHOPPING_LIST } from "../types";

const INITIAL_STATE = {
    shoppingList: null,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SHOPPING_LIST.SET_LIST:
            return { ...state, shoppingList: action.payload };
        default:
            return state;
    }
}
