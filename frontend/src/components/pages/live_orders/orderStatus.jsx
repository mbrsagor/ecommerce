import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";

class OrderStatus extends Component {
  render() {
    return (
      <>
        <div className="order-status ">
          {this.props.orders?.results?.length ? (
            this.liveOrders(this.props.orders?.results)
          ) : (
            <div className="no-data">
              <FeatherIcon icon="shopping-cart" size="32" />
              <p>There is no pending order</p>
            </div>
          )}

          <button className="btn btn-refresh order_status_refresh">
            <span className="mr-2">
              <FeatherIcon icon="refresh-ccw" size="15" />
            </span>
            Refresh
          </button>
        </div>
      </>
    );
  }
  liveOrders(results) {
    return results.map((order, key) => {
      return (
        <div className="order-lists-view" key={order.id}>
          <ul className="nav nav-tabs ">
            <li className="p-0 border-0 w-100">
              <a
                className="nav-link list "
                data-toggle="tab"
                href="#order_1"
                onClick={() => this.props.handlePopupOrder(order.id)}
              >
                <h6 className="order-id font-weight-bold">#{order.id}</h6>
                <p>{order?.user.first_name + ", " + order.order_time}</p>
                <div className="status d-non"></div>
                {/* <div className="preparing text-center">
                    <label>Prep in</label>
                    <div className="min">
                      <p className="mb-0 font-weight-bold">90</p>
                      <small className="text-uppercase">min</small>
                    </div>
                  </div> */}
              </a>
            </li>
          </ul>
        </div>
      );
    });
  }
}

export default OrderStatus;
