import React, { Component } from "react"
import { Link } from "react-router-dom"
import FeatherIcon from "feather-icons-react"

import AddItemsModal from "./AddItemsModal"

class CollapseItem extends Component {
    render() {
        return (
            <div id="accordion">
                <div>
                    <div className="row">
                        <div className="col-md-5">
                            <a
                                href="0"
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <span className="mr-2">
                                    <FeatherIcon icon="list" size="15" />
                                </span>
                                First Item
                                <span className="ml-2">
                                    <FeatherIcon icon="edit-2" size="15" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    id="collapseOne"
                    className="collapse hide ml-5"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                >
                    <div className="row">
                        <div className="col">
                            <span className="mr-1">
                                <FeatherIcon icon="list" size="15" />
                            </span>
                            Peparoni pizza
                        </div>
                        <div className="col">BDT 50</div>
                        <div className="col">
                            <Link to="/menu/1/edit-items&modifiers">
                                <FeatherIcon icon="eye" size="15" />
                            </Link>
                        </div>
                        <div className="col">
                            <FeatherIcon icon="x" size="15" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <AddItemsModal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollapseItem
