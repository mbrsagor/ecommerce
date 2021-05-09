import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLiveOrderNew } from '../../../../store/actions/restaurantOrderAction';

class NewOrderTab extends Component {

    componentDidMount() {
        this.props.getLiveOrderNew();
    }

    render() {
        const {live_new_orders} = this.props;
        // console.log(live_new_orders);
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
                            {live_new_orders && live_new_orders.map(order =>{
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
    live_new_orders: state.live_new_orders
})

export default connect(mapStateToProps, {getLiveOrderNew}) (NewOrderTab);
