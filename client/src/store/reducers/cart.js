import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_WHOLE_ITEM, PLACE_ORDER } from '../constants';

const initialState = [];

const cartWithoutItems = (cart, item) => cart.filter(cartItem => cartItem._id !== item._id);
const itemInCart = (cart, item) => cart.find(cartItem => cartItem._id === item._id);

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    return cartItem
        ? [...cartWithoutItems(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
        : [...cartWithoutItems(cart, item), { ...item, quantity: 1 }];
}

const removeFromCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    return cartItem.quantity > 1
        ? [...cartWithoutItems(cart, item), { ...cartItem, quantity: cartItem.quantity - 1 }]
        : [...cartWithoutItems(cart, item)];
}

const removeWholeItem = (cart, item) => {
    return [...cartWithoutItems(cart, item)]
}

const emptyCart = (cart, item) => {
    return []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.payload);
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.payload);
        case REMOVE_WHOLE_ITEM:
            return removeWholeItem(state, action.payload);
        case PLACE_ORDER:
            return emptyCart();
        default:
            return state;
    }
}