import reducer from '../sessionReducer';
import { SESSION } from '../../types';

describe('sessionReducer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                house: {},
            }
        )
    });

    it('should set house to store', () => {
        expect(reducer({}, {
            type: SESSION.SET_HOUSE_TO_SESSION,
            payload: {
                name: "house1",
                user: {
                    name: "dinco"
                }
            }
        })).toEqual(
            {
                house: {
                    name: "house1",
                    user: {
                        name: "dinco"
                    }
                }
            }
        )
    });

    it('should remove house from store', () => {
        expect(reducer({}, {
            type: SESSION.DELETE_HOUSE_FROM_SESSION
        })).toEqual({
                house: {}
            }
        )
    });
});
