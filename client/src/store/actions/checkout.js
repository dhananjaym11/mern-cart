import axios from 'axios';

import { PLACE_ORDER } from '../constants';

export const placeOrder = (data) => async dispatch => {
    try {
        await axios.post("/api/order/", data)
        dispatch({
            type: PLACE_ORDER
        })
    } catch (err) {
        console.log(err.message);
    }
};