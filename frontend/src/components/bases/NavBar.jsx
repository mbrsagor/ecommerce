import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from 'react-router-dom';
import { logout } from "../../store/actions/auth";

class NavBar extends Component {
    render() {
        return (
            <nav className="main_nav">
                <ul>
                    <li>
                        <NavLink to="/dashboard">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="layout" size="15" />
                            </span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/live-orders">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="server" size="15" />
                            </span>
                            Live orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/inventory">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="clipboard" size="15" />
                            </span>
                            Inventory
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order-history">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="book" size="15" />
                            </span>
                            Order history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pause-orders">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="pause-circle" size="15" />
                            </span>
                            Pause orders
                        </NavLink>
                    </li>
                    <li>
                        <Link to="#0">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="volume-2" size="15" />
                            </span>
                            Marketing
                        </Link>
                         <span className="mt-1 subMenuIcon">
                            <FeatherIcon icon="chevron-right" size="17" />
                        </span>
                         <ul className="subMenu">
                            <li>
                                <NavLink to="/branding">
                                    Branding
                                </NavLink>
                            </li>
                             <li>
                                <NavLink to="/discounts">
                                    Discount
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/website-ordering">Website Ordering</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/customers">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="users" size="15" />
                            </span>
                            Customers
                        </NavLink>
                    </li>
                    <li>
                        <Link to="#0">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="book-open" size="15" />
                            </span>
                            Menu
                        </Link>
                        <span className="mt-1 subMenuIcon">
                            <FeatherIcon icon="chevron-right" size="17" />
                        </span>
                        <ul className="subMenu">
                            <li>
                                <NavLink to="/items-modifiers">
                                    Items and Modifiers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/modifiers-list">
                                    Modifiers List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/menus">Menus</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/outlets">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="layout" size="15" />
                            </span>
                            Outlets
                        </NavLink>
                    </li>
                    <br />
                    <li>
                        <NavLink to="/about">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="layout" size="15" />
                            </span>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="user-plus" size="15" />
                            </span>
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <Link to="#0">
                            <span className="mr-3 mt-2">
                                <FeatherIcon icon="user" size="15" />
                            </span>
                            Account User
                        </Link>
                        <span className="mt-1 subMenuIcon">
                            <FeatherIcon icon="chevron-right" size="17" />
                        </span>
                        <ul className="subMenu">
                            <li>
                                <NavLink to="/my-profile">
                                    <span className="mr-3 mt-2">
                                        <FeatherIcon icon="user" size="15" />
                                    </span>
                                    My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" onClick={() => this.props.logout()}>
                                    <span className="mr-3 mt-2">
                                        <FeatherIcon icon="log-out" size="15" />
                                    </span>
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
