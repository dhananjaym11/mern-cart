import React from 'react';

import OrderItem from './OrderItem';

const OrderList = ({ orders }) => (
    <div className="Order-Wrapper">
        {
            orders.map(order => <OrderItem key={order._id} order={order} />)
        }
    </div>
)

export default OrderList;