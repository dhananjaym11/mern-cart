import React from 'react';

const CartItem = ({ cartItem, addToCart, removeFromCart, removeWholeItem }) => (
    <tr>
        <td></td>
        <td>{cartItem.name}</td>
        <td>{cartItem.price}</td>
        <td>
            <button onClick={() => removeFromCart(cartItem)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => addToCart(cartItem)}>+</button>
        </td>
        <td>
            <button onClick={() => removeWholeItem(cartItem)}>X</button>
        </td>
    </tr>
)

export default CartItem;