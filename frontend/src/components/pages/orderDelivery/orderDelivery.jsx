import React, { Component } from "react";
import OrderFooter from "./OrderFooter";
import OrderHeader from "./OrderHeader";
import CustomModal from "../modal/CustomModal";
import FeatherIcon from "feather-icons-react";
import LocationList from "../delivery/locationList";
import SearchArea from "../delivery/searchArea";

class OrderDelivery extends Component {
  state = {
    isClose: false,
    isModalOpen: false,
  };

  componentDidMount() {
    document.title = "Onno by Ghost Kitchen Bangladesh";
  }

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

  render() {
    return (
      <>
        <OrderHeader />

        <div className="order-main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="order_content">
                  <h2 className="pb-3">Virtual Food Hall</h2>
                  <p>
                    We are coming soon as a logistics partner of Ghost Kitchen
                    Bangladesh to support its endless internet restaurant brand
                    concepts, which we will make available to everyone, all
                    within 30 minutes delivery.
                  </p>
                  <p>
                    With Onno App, you will also be able to mix n’ match your
                    favorite brands from Ghost Kitchen Bangladesh all from one
                    single platform.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-container">
                  <img
                    src={window.location.origin + "/media/Onno_Logo_pic.png"}
                    // src="../../../../public/media/Onno_Logo_pic.png"
                    alt="logo"
                  />
                  {/* <img
                    src="https://chatfood.imgix.net/static/onno/assets/cover-upload-1610817658.jpeg"
                    alt="logo"
                  /> */}
                  {/* <img
                    src="https://www.onno.delivery/wp-content/uploads/2021/01/510.png"
                    alt="logo"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <OrderFooter />

          <div className="order-popup-container">
            <div className={`order-popup ${this.state.isClose && "d-none"}`}>
              <div className="popup-header d-flex justify-content-between">
                <h5>Virtual Food Hall</h5>
                <button
                  className="btn btn-sm btn-default btnClose"
                  onClick={() => {
                    this.setState({ isClose: true });
                  }}
                >
                  <span> &times; </span>
                </button>
              </div>

              <p className="text-muted">Order Here</p>

              <div className="popup-footer d-flex justify-content-between align-items-center">
                <button className="btn btn-primary" onClick={this.handleShow}>
                  Order Now
                </button>

                <small className="poweredBy">
                  Powered by <span>Onnow </span>
                </small>
              </div>
            </div>
            <button
              className="btn btn-primary floating-btn border-0"
              onClick={() => this.setState({ isClose: !this.state.isClose })}
            >
              <img src={window.location.origin + "/icon/Icon.png"} alt="" />
            </button>
          </div>
        </div>

        <CustomModal
          title="Virtual Food Hall"
          isModalOpen={this.state.isModalOpen}
          handleClose={this.handleClose}
          isModalHeaderImageShow={true}
        >
          {/* <form action="">
            <div className="search_area">
              <label htmlFor="">Filter Data</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search fon and area"
                />
                <button type="submit">
                  <FeatherIcon icon="search" size="15" />
                </button>
              </div>
            </div>
          </form>

          <div className="location-list-container">
            <h6 className="my-3">Location Lists</h6>
          </div> */}
          <SearchArea />
          <LocationList />
        </CustomModal>
      </>
    );
  }
}

export default OrderDelivery;
