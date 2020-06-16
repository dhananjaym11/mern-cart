import React from 'react';

import CartItem from './CartItem';

const CartItems = ({ cartItems, addToCart, removeFromCart, removeWholeItem, goToCheckout }) => {
    const totalPrice = cartItems.reduce((sum, next) => sum + (next.price * next.quantity), 0)
    return (
        <div className="Cart-Products-Wrapper">
            <table className="Cart-Table">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price / Unit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(cartItem => <CartItem key={cartItem._id} addToCart={addToCart} removeFromCart={removeFromCart} removeWholeItem={removeWholeItem} cartItem={cartItem} />)
                    }
                    <tr>
                        <td>Total</td>
                        <td />
                        <td />
                        <td />
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={goToCheckout}>Checkout</button>
        </div>
    )
}

export default CartItems;