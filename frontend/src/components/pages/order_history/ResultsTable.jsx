import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurantOrder } from '../../../store/actions/restaurantOrderAction';
// import History from "./History"

class ResultTable extends Component {

    componentDidMount() {
        this.props.getRestaurantOrder()
    }

    render() {

        const {orders} = this.props;
        console.log(orders)

        return (
            <div className="border rounded">
                <div className="row p-4 p_bottom_0" data-test="summary">
                    {/* this item will render after search */}
                    {/* <History /> */}
                </div>
                <div className="relative">
                    <div className="loading-zone table-responsive">
                        <table className="table  table-hover m-0">
                            <thead className="thead-light">
                                <tr>
                                    <th className="sorter minw-140">
                                        <span>ID </span>
                                    </th>
                                    <th className="sorter minw-110">
                                        <span>Status </span>
                                    </th>
                                    <th className="minw-150">Customer</th>
                                    <th className="minw-110">Phone N°</th>
                                    <th className="sorter minw-100">
                                        <span>Type </span>
                                    </th>
                                    <th className="sorter minw-150">
                                        <span>Payment Mode </span>
                                    </th>
                                    <th className="sorter minw-120">
                                        <span>Total </span>
                                    </th>
                                    <th className="sorter minw-140">
                                        <span>Channel </span>
                                    </th>
                                    <th className="sorter minw-130">
                                        <span>Ordered at </span>
                                    </th>
                                    <th className="sorter minw-110">
                                        <span>Rating </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length>0 && orders.map((order, index) =>{
                                    return(
                                        <tr key={index}
                                        data-v-4664f7bc=""
                                        data-test-line=""
                                        className="cursor-pointer"
                                        business-id="4aa501a2-d5f0-4a0b-bfce-e0da36e7c1cf"
                                        data-v-64234646="">
                                        <td>
                                            <strong>#{order.id}</strong>
                                            <small className="d-block"> </small>
                                        </td>
                                        <td> {order.status} </td>
                                        <td>
                                            <span>{order.user.username}</span>
                                        </td>
                                        <td> 0{order.user.phone_number} </td>
                                        <td>Pickup</td>
                                        <td>Cash on delivery</td>
                                        <td>MYR&nbsp;{order.total}</td>
                                        <td>{order.outlet}</td>
                                        <td>
                                            {order.order_date}
                                            <small className="d-block">
                                            {order.order_time}
                                            </small>
                                        </td>
                                        <td>5 star</td>
                                    </tr>
                                    )
                                })}

                                {/* <tr>
                                    <td colspan="20" className="text-center">
                                        No record found
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-3">
                    <div className="row">
                        <div className="col-md text-center text-md-left my-2">
                            Showing from 1 to 1 of 1 record.
                        </div>
                        <div className="col-md text-center text-md-right">
                            <nav className="d-inline-block">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item disabled">
                                        <a href="#0" className="page-link">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <span className="page-link">
                                            1
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </span>
                                    </li>
                                    <li className="page-item disabled">
                                        <a href="#0" className="page-link">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders
})

export default connect(mapStateToProps, {getRestaurantOrder}) (ResultTable)
