import React from 'react';
import { connect } from 'react-redux';

import { placeOrder } from '../../store/actions/checkout';

class Checkout extends React.Component {
    state = {
        name: "",
        email: "",
        country: "",
        modalIsOpen: false
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    placeOrder = () => {
        const { name, email, country } = this.state;
        const data = {};
        data['contactInfo'] = {
            name, email, country
        }
        data['orderInfo'] = this.props.cart.map(item => ({
            name: item.name,
            quantity: item.quantity
        }));
        this.props.placeOrder(data);
        this.setState({
            modalIsOpen: true
        })
    }

    render() {
        const { name, email, country, modalIsOpen } = this.state;
        if (!this.props.cart.length)
            return <p>Cart is empty to checkout! </p>

        return (
            <div className="checkout-Wrapper">
                <h2>Checkout page</h2>
                <div className="checkout-form">
                    <form>
                        <div className="">
                            <input type="text" name="name" value={name} placeholder="Name" onChange={this.onChangeHandler} />
                        </div>
                        <div className="">
                            <input type="text" name="email" value={email} placeholder="Email" onChange={this.onChangeHandler} />
                        </div>
                        <div className="">
                            <input type="text" name="country" value={country} placeholder="Country" onChange={this.onChangeHandler} />
                        </div>
                        <div className="">
                            <button type="button" onClick={this.placeOrder}>Place order</button>
                        </div>
                    </form>

                    {
                        modalIsOpen &&
                        <div className="success">
                            Form submiited successfully.
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch => {
    return {
        placeOrder: (data) => dispatch(placeOrder(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);