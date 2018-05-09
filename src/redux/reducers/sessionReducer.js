import { SESSION } from "../types";

const INITIAL_STATE = {
    house: null,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SESSION.SET_HOUSE_TO_SESSION:
            return { ...state, house: action.payload };
        case SESSION.DELETE_HOUSE_FROM_SESSION:
            return INITIAL_STATE;
        default:
            return state;
    }
}
