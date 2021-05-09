import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { restaurantOrderByDeliveryAction } from '../../../../store/actions/restaurantOrderAction';
import DayTable from "./DayTable";

class OrderForDelivery extends Component {

    // componentDidMount() {
    //     this.props.restaurantOrderByDeliveryAction();
    // }

    render() {
        return (
            <div id="order_for_delivery" className="container tab-pane fade">
                <div className="row mt-4 mb-4">
                    <div className="col-md-1 mt-2">
                        <label className="switch">
                            <input type="checkbox" id="togBtn" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <div className="col-md-5  ml-2">
                        <h5> Order for delivery</h5>
                        <p>Customers can request orders to be delivered</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Payment methods</h6>
                        <p>Select all payment methods accepted on delivery</p>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-checklabel"
                                htmlFor="flexCheckDefault"
                            >
                                Card on deivery
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-checklabel"
                                htmlFor="flexCheckDefault"
                            >
                                Cash on deivery
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <h5>Opening Hours</h5>
                        <p>Set the hours your outlet is open for delivery</p>
                        <div>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">From</th>
                                        <th scope="col">To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <DayTable day="Saturday" />
                                    <DayTable day="Sunday" />
                                    <DayTable day="Monday" />
                                    <DayTable day="Tuesday" />
                                    <DayTable day="Wednesday" />
                                    <DayTable day="Thrusday" />
                                    <DayTable day="Friday" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <h5>Operation settings</h5>
                        <p>
                            Set the default time needed for preparing and
                            delivering orders
                        </p>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-3">
                        <label>Preparation (minutes)</label>
                        <input className="form-control" type="number" />
                    </div>
                    <div className="col-md-3">
                        <label>Preparation + delivery (minutes)</label>
                        <input className="form-control" type="number" />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <h5>Delivery settings</h5>
                        <p>
                            Set how much your customers need to pay for delivery
                            and what is the minimum order value on your outlet
                        </p>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <label>Delivery Fee</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <label>Minimum order value</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

// export default connect(null, {restaurantOrderByDeliveryAction}) (OrderForDelivery)
export default OrderForDelivery
