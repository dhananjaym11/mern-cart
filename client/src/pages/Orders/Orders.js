import React from 'react';
import { connect } from 'react-redux';

import OrderList from '../../components/OrderList/OrderList';
import { fetchOrders } from '../../store/actions/orders';

class Order extends React.Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return (
            <div>
                <h2>Orders page</h2>
                <OrderList orders={this.props.orders} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);