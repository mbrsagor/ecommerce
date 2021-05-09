import FeatherIcon from "feather-icons-react"
import React, { Component } from "react"

class OrderList extends Component {
    render() {
        return (
            <div className="row mt-3 mb-3">
                <div className="col-md-8">
                    <div className="card p-3">
                        <div id="pauseOrderListCollapse">
                            <div className="row justify-content-between">
                                <a
                                    href="0"
                                    className="btn btn-link"
                                    data-toggle="collapse"
                                    data-target="#pauseOrderList"
                                    aria-expanded="true"
                                    aria-controls="pauseOrderListCollapse"
                                >
                                    <div className="col-md-4">
                                        <small className="text-muted">
                                            Tihami's Kitchen
                                        </small>
                                        <h6>Restaurant Name</h6>
                                    </div>
                                </a>

                                <div className="col-md-2 mt-3 ">
                                    <FeatherIcon
                                        icon="circle"
                                        size="10"
                                        className="icon-red mr-2"
                                        color="red"
                                    />
                                    <small className="text-muted">
                                       <span>Delivery</span>
                                    </small>
                                </div>
                                <div className="col-md-2 mt-3 ">
                                    <FeatherIcon
                                        icon="circle"
                                        size="10"
                                        color="red"
                                        className="icon-red mr-2"
                                    />
                                    <small className="text-muted">
                                        <span>Pick up</span>
                                    </small>
                                </div>
                                <div className="col-md-2 mt-3 ">
                                    <FeatherIcon
                                        icon="circle"
                                        size="10"
                                        color="green"
                                        className="icon-green mr-2"
                                    />
                                    <small className="text-muted">
                                        <span>Dine in</span>
                                    </small>
                                </div>
                            </div>

                            <div
                                id="pauseOrderList"
                                className="collapse hide"
                                aria-labelledby="headingOne"
                                data-parent="#pauseOrderListCollapse"
                            >
                                <div className="row custom_switch">
                                    <div className="col-md-2">
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                id="togBtn"
                                            />
                                            <div className="slider round"></div>
                                        </label>
                                    </div>
                                    <div className="col-md-5 mt-1 pl-0">
                                        Accepting Delivery orders
                                    </div>
                                </div>
                                <div className="row custom_switch">
                                    <div className="col-md-2">
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                id="togBtn"
                                            />
                                            <div className="slider round"></div>
                                        </label>
                                    </div>
                                    <div className="col-md-5 mt-1 pl-0">
                                        Accepting Pickup orders
                                    </div>
                                </div>
                                <div className="row custom_switch">
                                    <div className="col-md-2">
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                id="togBtn"
                                            />
                                            <div className="slider round"></div>
                                        </label>
                                    </div>
                                    <div className="col-md-5 mt-1 pl-0">
                                        Accepting Dine-in orders
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList
