import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="main_menu">
          <div className="menu_icon">
            <span></span>
          </div>
        </div>
        <div className="text-lg-center sidebar_brand">
          <Link to="/dashboard">
            <img src="logo-light.png" alt="onnow logo" />
          </Link>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Sidebar;
