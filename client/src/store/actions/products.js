import axios from 'axios';

import { FETCH_PRODUCTS } from '../constants';

export const fetchProducts = () => async dispatch => {
    try {
        const res = await axios.get("/api/products/")
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data.products
        })
    } catch (err) {
        console.log(err.message);
    }
};