import React from 'react';
import { connect } from 'react-redux';

import CartItems from '../../components/CartItems/CartItems';
import { addToCart, removeFromCart, removeWholeItem } from '../../store/actions/cart';

class Cart extends React.Component {
    sortItems = (cart) => cart.sort((a, b) => a._id > b._id ? 1 : -1);

    goToCheckout = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const { cart, addToCart, removeFromCart, removeWholeItem } = this.props;
        const sortedCartItems = this.sortItems(cart);
        return (
            <div>
                <h2>Cart page</h2>
                {sortedCartItems.length
                    ? <CartItems cartItems={sortedCartItems} addToCart={addToCart} removeFromCart={removeFromCart} removeWholeItem={removeWholeItem} goToCheckout={this.goToCheckout} />
                    : <p>Cart is empty</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (product) => dispatch(removeFromCart(product)),
        removeWholeItem: (product) => dispatch(removeWholeItem(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);