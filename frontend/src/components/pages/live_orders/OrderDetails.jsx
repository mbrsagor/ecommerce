import React, { Component } from "react";
// import Order from "./Order";
import axios from "axios";
import OrderInfo from "./OrderInfo";
import OrderStatus from "./orderStatus";
import SearchOrder from "./SearchOrder";
import { orderURL } from "../../../constants";
import OrderPlaced from "./tab/OrderPlaced";
import { connect } from "react-redux";

const orderStatus = {
  ORDER_CREATED: "ORDER_CREATED",
  ORDER_PLACED: "ORDER_PLACED",
  CUSTOMER_CONFIRMED: "CUSTOMER_CONFIRMED",
  RIDER_CONFIRMED: "RIDER_CONFIRMED",
  PREPARING: "PREPARING",
  WAITING: "WAITING",
  DISPATCHED: "DISPATCHED",
  DELIVERY: "DELIVERY",
};

const nextStatus = {
  [orderStatus.ORDER_CREATED]: orderStatus.CUSTOMER_CONFIRMED,
  [orderStatus.ORDER_PLACED]: orderStatus.CUSTOMER_CONFIRMED,
  [orderStatus.CUSTOMER_CONFIRMED]: orderStatus.RIDER_CONFIRMED,
  [orderStatus.RIDER_CONFIRMED]: orderStatus.PREPARING,
  [orderStatus.PREPARING]: orderStatus.WAITING,
  [orderStatus.WAITING]: orderStatus.DISPATCHED,
  [orderStatus.DISPATCHED]: orderStatus.DELIVERY,
};

class OrderDetails extends Component {
  state = {
    isShow: true,
    orderDetail: null,
    orderStatus: orderStatus.ORDER_PLACED,
    order: {},
    meta: [
      { status: orderStatus.ORDER_PLACED, label: "Order Placed", total: 0 },
      {
        status: orderStatus.CUSTOMER_CONFIRMED,
        label: "Customer Confirmed",
        total: 0,
      },
      {
        status: orderStatus.RIDER_CONFIRMED,
        label: "Rider Confirmed",
        total: 0,
      },
      { status: orderStatus.PREPARING, label: "Preparing", total: 0 },
      { status: orderStatus.WAITING, label: "Waiting", total: 0 },
      { status: orderStatus.DISPATCHED, label: "Dispatched", total: 0 },
    ],
  };

  orderStatusChangeSuccess = (currentStatus, response) => {
    const order = { ...this.state.order };
    const meta = [...this.state.meta];
    const currentObj = order[currentStatus];
    let nextObj = order[nextStatus[currentStatus]];
    if (!nextObj) {
      nextObj = {
        count: 1,
        results: [],
      };
    }
    nextObj.results.push(response);

    if (currentStatus !== orderStatus.ORDER_PLACED) {
      console.log(`--${currentStatus}--`); // TODO: need to solve
      currentObj.results.splice(
        currentObj.results.findIndex((each) => each.id === response.id),
        1
      );
    }
    for (let i = 0; i < meta.length; i++) {
      if (currentStatus === meta[i].status) {
        meta[i].total--;
      } else if (nextStatus[currentStatus] === meta[i].status) {
        meta[i].total++;
      }
    }
    this.setState({
      ...this.state,
      order: order,
      meta: meta,
    });
  };

  handleOrderStatusChange = (currentStatus, orderID) => {
    const url = `${orderURL}/${orderID}/`;
    console.log("handleOrderStatusChange: ", currentStatus, orderID);
    const payload = {
      order_status: nextStatus[currentStatus],
    };
    axios
      .patch(url, payload)
      .then((res) => {
        this.orderStatusChangeSuccess(currentStatus, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  cancelOrder = (orderID) => {
    if (!window.confirm("Do you want to Cancel?")) {
      return;
    }
    axios
      .patch(`${orderURL}/${orderID}/`, {
        order_status: "ORDER_CANCELLED",
      })
      .then((res) => {
        console.log("Order Cancelled");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  confirmOrder = (orderID) => {
    if (!window.confirm("Do you want to confirm?")) {
      return;
    }
    axios
      .patch(`${orderURL}/${orderID}/`, {
        order_status: "ORDER_PLACED",
      })
      .then((res) => {
        console.log("Order Placed");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handlePopupOrder = (orderID) => {
    console.log(orderID);
    if (!this.state.isShow) {
      console.log("first if");
      this.setState({
        ...this.state,
        isShow: true,
        orderDetailID: null,
      });
    } else {
      this.setState({
        ...this.state,
        isShow: false,
        orderDetailID: orderID,
      });
    }
  };
  getActiveOrders() {
    if (this.state.order[this.state.orderStatus]) {
      return this.state.order[this.state.orderStatus].results;
    }
    return [];
  }

  fetchOrder(status) {
    if (this.state.order[status]) {
      this.setState({
        ...this.state,
        orderStatus: status,
      });
      return;
    }
    let url = `${orderURL}/?order_status=${status}`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          ...this.state,
          orderStatus: status,
          order: {
            ...this.state.order,
            [status]: res.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getMetaData() {
    axios
      .get(`${orderURL}/meta/`)
      .then((res) => {
        const meta = [...this.state.meta];
        for (let i = 0; i < meta.length; i++) {
          const find = res.data.find((each) => each.status === meta[i].status);
          if (find) {
            meta[i].total = find.total;
          }
        }
        this.setState({
          ...this.state,
          meta: meta,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getMetaData();
    this.fetchOrder(this.state.orderStatus);
    this.fetchOrder(orderStatus.ORDER_CREATED);
  }

  render() {
    return (
      <div className="live_order_tab_section">
        <div className="tabbar">
          <ul className="nav nav-tabs nav_tabs">
            {this.state.meta.map((each) => {
              return (
                <li className="nav-item nav-item-all" key={each.status}>
                  <a
                    className={`nav-link ${
                      each.status == this.state.orderStatus ? "active" : ""
                    }`}
                    data-toggle="tab"
                    href={`#${each.status}`}
                    onClick={() => this.fetchOrder(each.status)}
                  >
                    {each.label} <sup>{each.total}</sup>
                  </a>
                </li>
              );
            })}
            {/* <li className="nav-item nav-item-new">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#CUSTOMER_CONFIRMED"
                onClick={this.fetchOrder("CUSTOMER_CONFIRMED")}
              >
                Customer Confirmed <sup>0</sup>
              </a>
            </li>
            <li className="nav-item nav-item-in-kitchen">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#RIDER_CONFIRMED"
                onClick={this.fetchOrder("CUSTOMER_CONFIRMED")}
              >
                Rider Confirmed <sup>0</sup>
              </a>
            </li>
            <li className="nav-item nav-item-in-route">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#PREPARING"
                onClick={this.fetchOrder("CUSTOMER_CONFIRMED")}
              >
                Preparing <sup>0</sup>
              </a>
            </li>
            <li className="nav-item nav-item-in-waiting">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#WAITING"
                onClick={this.fetchOrder("CUSTOMER_CONFIRMED")}
              >
                Waiting <sup>0</sup>
              </a>
            </li>
            <li className="nav-item nav-item-dispatched">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#DISPATCHED"
                onClick={this.fetchOrder("CUSTOMER_CONFIRMED")}
              >
                Dispatched <sup>0</sup>
              </a>
            </li> */}
          </ul>
          <div className="row live_order_tab_border">
            <div className="col-3 search leftCol">
              <SearchOrder />
              <OrderStatus
                handlePopupOrder={this.handlePopupOrder}
                orders={this.state.order[orderStatus.ORDER_CREATED]}
              />
            </div>
            <div className="col-9 boxShadowRight table-responsive rightCol">
              {/* <div className="row">
                <div className="col-12"> */}

              {this.state.isShow ? (
                <div className="tab-content">
                  <div id={this.state.orderStatus} className="tab-pane active">
                    <OrderPlaced
                      status={this.state.orderStatus}
                      orders={this.getActiveOrders()}
                      handleOrderStatusChange={this.handleOrderStatusChange}
                      tabNo="1"
                    />
                  </div>
                  {/* <div id="CUSTOMER_CONFIRMED" className="tab-pane fade">
                    <OrderPlaced lists={this.state.orderLists} tabNo="2" />
                  </div>
                  <div id="RIDER_CONFIRMED" className="tab-pane fade">
                    <OrderPlaced lists={this.state.orderLists} tabNo="3" />
                  </div>
                  <div id="PREPARING" className="tab-pane fade">
                    <OrderPlaced lists={this.state.orderLists} tabNo="4" />
                  </div>
                  <div id="WAITING" className="tab-pane fade">
                    <OrderPlaced lists={this.state.orderLists} tabNo="5" />
                  </div>
                  <div id="DISPATCHED" className="tab-pane fade">
                    <OrderPlaced lists={this.state.orderLists} tabNo="6" />
                  </div> */}
                </div>
              ) : (
                <div className="tab-content">
                  <div className="tab-pane fade " id="order_1">
                    <OrderInfo
                      orderID={this.state.orderDetailID}
                      handlePopupOrder={this.handlePopupOrder}
                      cancelOrder={this.cancelOrder}
                      confirmOrder={this.confirmOrder}
                    />
                  </div>
                </div>
              )}

              {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login_auth.user.token,
  };
};

export default connect(mapStateToProps)(OrderDetails);
