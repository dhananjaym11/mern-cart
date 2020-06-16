import { FETCH_ORDERS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return action.payload;
        default:
            return state;
    }
}