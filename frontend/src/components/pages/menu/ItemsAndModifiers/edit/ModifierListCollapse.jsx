import React, { Component } from "react"
import { Link } from "react-router-dom"
import FeatherIcon from "feather-icons-react"

class ModifierListCollapse extends Component {
    render() {
        return (
            <div id="modifierListCollapse">
                <div>
                    <h5 className="mb-0">
                        <div className="row">
                            <div className="col-md-1">
                                <a
                                    href="0"
                                    className="btn btn-link"
                                    data-toggle="collapse"
                                    data-target="#modifierCollapse"
                                    aria-expanded="true"
                                    aria-controls="modifierCollapse"
                                >
                                    <FeatherIcon
                                        icon="chevron-right"
                                        size="15"
                                    />
                                </a>
                            </div>
                            <div className="col-md-2 mt-2">Extra toppings</div>
                            <div className="col-md-3 mt-2">
                                Type: Single Max: 5
                            </div>
                            <div className="col-md-2 mt-2">Modifiers (4)</div>
                            <div className="col-md-2 mt-2">
                                <Link to="/menu/1/edit-items&modifiers">
                                    <FeatherIcon icon="eye" size="15" />
                                </Link>
                            </div>
                            <div className="col-md-2 mt-2">
                                <FeatherIcon icon="x" size="15" />
                            </div>
                        </div>
                    </h5>
                </div>

                <div
                    id="modifierCollapse"
                    className="collapse hide ml-5"
                    aria-labelledby="headingOne"
                    data-parent="#modifierListCollapse"
                >
                    <div className="row">
                        <div className="col-md-10">
                            <span className="mr-1">
                                <FeatherIcon icon="list" size="15" />
                            </span>
                            Peparoni pizza
                        </div>
                        <div className="col-md-2">BDT 50</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifierListCollapse
