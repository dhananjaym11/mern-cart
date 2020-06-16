import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = props => (
    <nav className="NavBar-Wrapper">
        <Link to="/">
            Logo
        </Link>

        <Link to="/cart" className="cart-link">
            Cart ({props.cart.length})
        </Link>

        <Link to="/orders" className="cart-link">
            Orders
        </Link>
    </nav>
)

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, null)(NavBar);