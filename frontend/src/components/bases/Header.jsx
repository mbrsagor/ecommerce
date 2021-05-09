import React, { Component } from "react"
import { Link } from "react-router-dom"
import FeatherIcon from "feather-icons-react"
class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="header pt-3 pl-3">
                    <div className="row justify-content-between">
                        <div className="col-md-3 pl-0">
                            <div className="dropdown mr-5">
                                <a
                                    href="0"
                                    className="restaurant-name"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                >
                                    Tihami's Kitchen
                                    <FeatherIcon
                                        icon="chevron-down"
                                        size="15"
                                        className="ml-2"
                                    />
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <Link
                                        className="dropdown-item"
                                        to="/dashboard"
                                    >
                                        Tihami's Kitchen
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-right">
                            {this.props.preview_store}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
