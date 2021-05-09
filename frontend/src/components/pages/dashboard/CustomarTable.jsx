import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurantOrder } from '../../../store/actions/restaurantOrderAction';

class CustomarTable extends Component {

    componentDidMount() {
        this.props.getRestaurantOrder()
    }

    render() {
        const {orders} = this.props;
        // console.log(orders)
        return (
            <div className="mt-4 cutomer_table">
                <div className="card ">
                    <div className="table-card-header">
                        <h5 className="card-title mb-0 commont_title">
                            New customers X returning customers
                        </h5>
                    </div>
                    <div className="card-body p-0 table-responsive">
                        <table className="table table-hover table-lg mb-0">
                            <thead>
                                <tr className="table-header">
                                    <td></td>
                                    <td className="font-bold"># of orders</td>
                                    <td className="font-bold">
                                        # of customers
                                    </td>
                                    <td className="font-bold">
                                        % of customers
                                    </td>
                                    <td className="font-bold">Ave.basket</td>
                                    <td className="font-bold">Total sales</td>
                                    <td className="font-bold">% Orders</td>
                                    <td className="font-bold bg-deep">
                                        ACV
                                        <span
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Average Customers Value = Total Sales / Total Customers"
                                        >
                                            <FeatherIcon
                                                icon="help-circle"
                                                className="ml-2"
                                                size="12"
                                                strokeWidth="3px"
                                            />
                                        </span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {orders && orders.map(order =>(
                                    <tr key={order.id}>
                                        <td>New</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0%</td>
                                        <td>BDT {order.final_price ? order.final_price: 0.00}</td>
                                        <td>BDT 0.00</td>
                                        <td>0%</td>
                                        <td className="font-bold bg-deep">BDT 0.00</td>
                                    </tr>
                                ))}
                                <tr className="table-row-bg">
                                    <td>Returning</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0%</td>
                                    <td>BDT 0.00</td>
                                    <td>BDT 0.00</td>
                                    <td>0%</td>
                                    <td className="font-bold bg-deep">
                                        BDT 0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">Total</td>
                                    <td className="font-bold">0</td>
                                    <td className="font-bold">0</td>
                                    <td className="font-bold">0%</td>
                                    <td className="font-bold">BDT 0.00</td>
                                    <td className="font-bold">BDT 0.00</td>
                                    <td className="font-bold">0%</td>
                                    <td className="font-bold bg-deep">
                                        BDT 0.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders
})

export default connect(mapStateToProps, {getRestaurantOrder}) (CustomarTable)
