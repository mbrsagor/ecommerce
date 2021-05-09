import FeatherIcon from "feather-icons-react"
import React, { Component } from "react"

class OutletsList extends Component {
    render() {
        return (
            <>
                <div className="row outletListComponent">
                    <div className="col-md-8">
                        <h5 className="mb-0 outlet_title">Outlets</h5>
                    </div>
                    <div className="col-md-4 text-right">
                        <div id="accordion">
                            <div className="outlet_right_side_text">
                                    <p
                                        className="btn btn-link"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Available for 7 out of 7 outlets
                                        <span className="ml-2">
                                            <FeatherIcon
                                                icon="chevron-down"
                                                size="15"
                                            />
                                        </span>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row outlets_item">
                    <div className="col-md-12">
                        <div
                                id="collapseOne"
                                className="collapse hide"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                            >
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="outlet_list_item">
                                        <li>
                                            <span>Kfc chittagong</span>
                                            <label className="switch pull-right">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span>Kfc chittagong</span>
                                            <label className="switch pull-right">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span>Kfc chittagong</span>
                                            <label className="switch pull-right">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OutletsList
