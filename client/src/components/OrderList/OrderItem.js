import React from 'react';

const OrderItem = ({ order }) => (
    <div className="order-item">
        <p>&nbsp;</p>
        <div>
            Name: {order.contactInfo.name} & Email: {order.contactInfo.email} & Country: {order.contactInfo.country}
        </div>
        <h4>Product Info: </h4>
        <div>
            {order.orderInfo.map(o => <p key={o._id}>Name: {o.name} & Quantity: {o.quantity}</p>)}
        </div>
    </div>
)

export default OrderItem;