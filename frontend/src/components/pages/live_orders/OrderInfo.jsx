import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faMinus,
  faPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../modal/CustomModal";
import axios from "axios";
import { orderURL } from "../../../constants";

export default class OrderInfo extends Component {
  state = {
    isClose: false,
    isModalOpen: false,
    prepTime: 1,
    deliveryTime: 1,
    order: null,
    brandName: "Onnow",
    paymentSystem: "Cash on delivery",
    deliveryCost: 60,
  };

  handleClose = () => {
    this.setState({
      isModalOpen: false,
    });
    // console.log("CLose modal: ", this.state.isModalOpen);
  };

  handleShow = () => {
    this.setState({
      isModalOpen: true,
    });
    // console.log("CLose modal: ", this.state.isModalOpen);
  };

  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ prepTime: e.target.value });
  };

  increseMin = (e) => {
    e.preventDefault();

    this.setState({ prepTime: this.state.prepTime + 1 });

    console.log("Increase: ", this.state.prepTime);
  };

  decreseMin = (e) => {
    e.preventDefault();

    if (this.state.prepTime > 0) {
      this.setState({ prepTime: this.state.prepTime - 1 });
    } else {
      alert("You should set prep time avobe 0");
    }

    console.log("Decrease: ", this.state.prepTime);
  };

  componentDidMount() {
    if (this.props.orderID) {
      axios
        .get(`${orderURL}/${this.props.orderID}/`)
        .then((res) => {
          this.setState({
            ...this.state,
            order: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  getOrderItems = () => {
    return this.state.order?.order_items ? this.state.order?.order_items : [];
  };
  quantity = () => {
    return this.getOrderItems().reduce((base, newVal) => {
      return base + newVal.quantity;
    }, 0);
  };
  getSubtotal = () => {
    return this.getOrderItems().reduce((base, newVal) => {
      return base + newVal.item.price;
    }, 0);
  };

  render() {
    const order = this.state.order;
    if (order) {
      return (
        <>
          <div className="outer-tab-content">
            <div className="tab-header d-flex justify-content-between align-items-center">
              <h6 className="font-weight-bold mb-0">#{order.id}</h6>
              <p>{order.orderd_data}</p>
              <button className="btn btn-sm btn-danger">New</button>
            </div>
            <div className="tab-body">
              <div className="row">
                <div className="col">
                  <div className="inner-content">
                    <div className="order-details-info">
                      <p className="label">Brand</p>
                      <h6 className="">{this.state.brandName}</h6>
                    </div>
                    <div className="order-details-info">
                      <p className="label">Order type</p>
                      <h6 className="">
                        <FontAwesomeIcon icon={faTruck} size="sm" />
                        Delivery
                      </h6>
                    </div>
                    <div className="order-details-info">
                      <p className="label">Customer</p>
                      <h6 className="">{order.user?.first_name}</h6>
                      <p className="text-warning">
                        <FontAwesomeIcon icon={faCrown} />
                        Ordered {this.quantity()} item
                      </p>
                    </div>
                    <div className="order-details-info">
                      <p className="label">Payment</p>
                      <h6 className="">{this.state.paymentSystem}</h6>
                    </div>
                    <div className="order-details-info">
                      <p className="label">Delivery to</p>
                      <h6 className="">House 21 Testing, Bangla Motor</h6>
                      <p className="text-danger">This is just a test order</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner-content">
                    <div className="order-details-info">
                      <p className="label">Outlet</p>
                      <h6 className="">
                        {this.state.brandName} - {order.outlet?.name}
                      </h6>
                    </div>
                    <div className="order-details-info date">
                      <p className="label">Delivery at</p>
                      <h6 className="">
                        <small className="py-1 px-2 bg-danger text-white rounded">
                          06/02/2021 - 2:00
                        </small>
                      </h6>
                    </div>
                    <div className="order-details-info">
                      <p className="label">Phone number</p>
                      <h6 className="">{order.user?.phone_number}</h6>
                    </div>
                    <div className="order-details-info">
                      <p className="label">Channel</p>
                      <h6 className="">{this.state.brandName}</h6>
                    </div>
                  </div>
                </div>
              </div>
              {this.getOrderItems().map((order_item) => {
                return (
                  <div className="order-item d-flex justify-content-between border-top border-bottom py-2">
                    <p className="text-capitalize">{order_item.item?.title}</p>
                    <p className="price font-weight-bold">
                      {order_item.item?.price}
                    </p>
                  </div>
                );
              })}
              <div className="subtotal ml-auto w-25 mt-3">
                <div className="amount-details d-flex justify-content-between">
                  <p>Subtotal:</p>
                  <p>{this.getSubtotal()}</p>
                </div>
                <div className="amount-details d-flex justify-content-between">
                  <p>Delivery fee:</p>
                  <p>{this.state.deliveryCost}</p>
                </div>
                <div className="amount-details d-flex justify-content-between">
                  <p className="font-weight-bold">Total:</p>
                  <p className="text-primary font-weight-bold text-uppercase">
                    bdt {this.getSubtotal() + this.state.deliveryCost}
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button
                className="btn btn-outline-dark text-uppercase"
                onClick={() => this.props.handlePopupOrder(order.id)}
              >
                <small>Close</small>
              </button>
              <button
                className="btn btn-outline-danger text-uppercase"
                onClick={() => this.props.cancelOrder(order.id)}
              >
                <small>Reject</small>
              </button>
              <button
                className="btn btn-primary text-uppercase"
                onClick={() => this.props.confirmOrder(order.id)}
              >
                <small>accept</small>
              </button>
            </div>
          </div>

          {/* ---------- Modal --------- */}
          <CustomModal
            title="Accept order - #546515165"
            isModalOpen={this.state.isModalOpen}
            // isModalOpen={true}
            handleClose={this.handleClose}
            isModalHeaderImageShow={false}
          >
            <form action="" className="accept-order-form">
              <div className="prepare-time text-center">
                <h6>Prep Time</h6>
                <div className="input-group mb-2">
                  <button className="btn" onClick={this.decreseMin}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="number"
                    className="form-control text-center font-weight-bold"
                    value={this.state.prepTime}
                    // min="1"
                    name="perp_time"
                    onChange={this.handleChange}
                  />
                  <button className="btn" onClick={this.increseMin}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <h6>Minutes</h6>
              </div>
              <hr />
              <div className="prepare-time text-center">
                <h6>Delivery Time</h6>
                <div className="input-group mb-2">
                  <button className="btn">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="text"
                    className="form-control text-center font-weight-bold"
                    value={this.state.deliveryTime}
                    onChange={this.handleChange}
                    min="1"
                    name="delivery_time"
                  />
                  <button className="btn">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <h6>Minutes</h6>
              </div>

              <button className="btn btn-primary text-uppercase w-100 mt-4">
                <small>Accept</small>
              </button>
            </form>
          </CustomModal>
        </>
      );
    } else {
      return null;
    }
  }
}
