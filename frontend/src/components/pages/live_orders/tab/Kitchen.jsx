import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLiveOrderKitchen } from '../../../../store/actions/restaurantOrderAction';

class Kitchen extends Component {

    componentDidMount() {
        this.props.getLiveOrderKitchen();
    }

    render() {
        const {live_kitchen_orders} = this.props;
        // console.log(live_kitchen_orders);
        return (
            <div className="orderTabContent table-responsive">
                <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Outlet</th>
                                <th>Items</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {live_kitchen_orders && live_kitchen_orders.map(order =>{
                                return(
                                    <tr key={order.id}>
                                        <td>#{order.id}</td>
                                        <td>{order.user.username}</td>
                                        <td>{order.outlet}</td>
                                        <td>{order.items}</td>
                                        <td>0{order.user.phone_number}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    live_kitchen_orders: state.live_kitchen_orders
})

export default connect(mapStateToProps, {getLiveOrderKitchen}) (Kitchen)
