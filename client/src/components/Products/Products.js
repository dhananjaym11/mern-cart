import React from 'react';

import Product from './Product';

const Products = ({ products, addToCart }) => (
    <div className="Products-Wrapper">
        {
            products.map(product => <Product key={product._id} addToCart={addToCart} product={product} />)
        }
    </div>
)

export default Products;