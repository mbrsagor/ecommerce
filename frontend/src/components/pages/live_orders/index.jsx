import React, { Component } from "react";
import Header from "../../bases/Header";
import Sidebar from "../../bases/Sidebar";
import OrderDetails from "./OrderDetails";

class LiveOrders extends Component {
  componentDidMount() {
    document.title = "Live Orders | onnow";
  }

  render() {
    return (
      <div id="wrapper">
        <div className="navbar-nav">
          <Sidebar />
        </div>
        <div className="d-flex flex-column content_area">
          {/* <header>
            <Header />
          </header>
          <div className="main_content">
            <div className="container-fluid">
              <OrderDetails />
            </div>
          </div> */}
          <div className="live-order-main-wrapper">
            <div className="header border-bottom">
              <Header />
            </div>
            <div className="main-content">
              <div className="container-fluid">
                <OrderDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveOrders;
