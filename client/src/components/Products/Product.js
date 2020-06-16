import React from 'react';

const Product = ({ product, addToCart }) => (
    <div className="product-item">
        {product.name} = {product.price}
        <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
)

export default Product;