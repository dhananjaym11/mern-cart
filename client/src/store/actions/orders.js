import axios from 'axios';

import { FETCH_ORDERS } from '../constants';

export const fetchOrders = () => async dispatch => {
    try {
        const res = await axios.get("/api/orders/")
        dispatch({
            type: FETCH_ORDERS,
            payload: res.data.order
        })
    } catch (err) {
        console.log(err.message);
    }
};