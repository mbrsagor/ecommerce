import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderHeader extends Component {
  render() {
    return (
      <header className="header-sec">
        <div className="container">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-12">
              <div className="main_menu">
                <div className="logo">
                  <Link to="/">
                    <img src="logo.png" alt="logo" />
                  </Link>
                </div>

                <nav className="main-navbar">
                  <div className="menu_icon">
                    <span></span>
                  </div>
                  <div className="menu">
                    {/* <ul>
                                            <li>
                                                <Link to="/">Sell everywhere</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Grow and manage</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Price</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Blog</Link>
                                            </li>
                                        </ul> */}
                    <div className="help_link mobile-link d-lg-none">
                      <ul>
                        <li>
                          <Link to="/deliverys">Ghost Kitchen Bangladesh</Link>
                        </li>
                        <li>
                          <Link to="/deliverys">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div className="help_link d-none d-lg-block">
                  <ul>
                    <ul>
                      <li>
                        <Link to="/deliverys">Ghost Kitchen Bangladesh</Link>
                      </li>
                      <li className="contact_menu_btn">
                        <Link to="/deliverys">Contact</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default OrderHeader;
