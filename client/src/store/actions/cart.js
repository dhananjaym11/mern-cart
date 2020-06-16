import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_WHOLE_ITEM } from '../constants';

export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = item => ({
    type: REMOVE_FROM_CART,
    payload: item
});

export const removeWholeItem = item => ({
    type: REMOVE_WHOLE_ITEM,
    payload: item
});