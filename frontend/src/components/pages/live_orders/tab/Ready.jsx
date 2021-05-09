import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLiveOrderReady } from '../../../../store/actions/restaurantOrderAction';


class Ready extends Component {

    componentDidMount() {
        this.props.getLiveOrderReady();
    }

    render() {
        const {ready_orders} = this.props;
        // console.log(ready_orders);
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
                            {ready_orders && ready_orders.map(order =>{
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
    ready_orders: state.ready_orders
})

export default connect(mapStateToProps, {getLiveOrderReady}) (Ready)
