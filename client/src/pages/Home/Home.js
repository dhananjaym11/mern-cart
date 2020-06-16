import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../store/actions/products';
import { addToCart } from '../../store/actions/cart';
import Products from '../../components/Products/Products';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                <h2>Home page</h2>
                <Products products={this.props.products} addToCart={this.props.addToCart} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);