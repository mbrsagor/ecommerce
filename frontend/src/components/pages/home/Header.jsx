import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-sticky-header/styles.css";

export class Header extends Component {
  menuHandler = () => {
    console.log("Click");
  };

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
                  <div onClicks={this.menuHandler} className="menu_icon">
                    <span></span>
                  </div>
                  <div className="menu">
                    <ul>
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
                    </ul>
                    <div className="help_link mobile-link d-lg-none">
                      <ul>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/">Book a demo</Link>
                        </li>
                        <li className="free_trail">
                          <Link to="/registration">Free Trail</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div className="help_link d-none d-lg-block">
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/">Book a demo</Link>
                    </li>
                    <li className="free_trail">
                      <Link to="/registration">Free Trail</Link>
                    </li>
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

export default Header;
