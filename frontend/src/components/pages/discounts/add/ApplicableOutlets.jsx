import React, { Component } from "react";
import axios from "axios";
import { restaurantDiscountURL } from "../../../../constants";

class ApplicableOutlets extends Component {
  subdomain = null;
  state = {
    discountAmount: 0,
  };
  onDiecountSubmit = (e) => {
    e.preventDefault();
    const amount = this.state.discountAmount;
    if (amount && this.subdomain) {
      const payload = {
        discount: amount,
      };
      axios
        .post(`${restaurantDiscountURL}/${this.subdomain}/`, payload)
        .then((res) => {
          console.log(res.data);
          alert("Discount saved.");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  componentDidMount() {
    axios
      .get(`${restaurantDiscountURL}/${this.subdomain}/`)
      .then((res) => {
        this.setState({
          ...this.state,
          discountAmount: res.data.discount,
        });
      })
      .catch((e) => {
        console.log(e);
      });
    this.subdomain = window.location.host.split(".")[0];
  }

  render() {
    return (
      <div className="discount-box-wrapper">
        <form className="mt-4" onSubmit={this.onDiecountSubmit}>
          <div className="discount_application discount-box">
            <h4 className="mb-2">Applicable outlets</h4>
            <div className="row on-gutter-20px">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox1"
                  />
                  <label className="form-check-label" for="radiox1">
                    All outlets
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox2"
                    checked
                  />
                  <label className="form-check-label" for="radiox2">
                    Selected outlets
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="discount_application discount-box">
            <h4 className="mb-2">Discount type</h4>

            <div className="row on-gutter-20px">
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radiox3"
                    id="radiox3"
                  />
                  <label className="form-check-label" for="radiox3">
                    Percentage (%)
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radiox4"
                    id="radiox4"
                  />
                  <label className="form-check-label" for="radiox4">
                    Fixed value ($)
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radiox5"
                    id="radiox5"
                    disabled
                  />
                  <label className="form-check-label" for="radiox5">
                    Buy 1 get 1 (coming soon)
                  </label>
                </div>
              </div>
            </div>
            <div className="row on-gutter-20px">
              <div className="col-lg-6">
                <div class="from-group">
                  <label for="discount_name">Amount *</label>
                  <input
                    type="number"
                    placeholder="0"
                    class="form-control"
                    value={this.state.discountAmount}
                    onChange={(e) =>
                      this.setState({
                        discountAmount: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row on-gutter-20px">
              <div className="col-lg-6">
                <div class="from-group">
                  <label for="discount_name">Minimum order value </label>
                  <input
                    type="number"
                    placeholder="MYR 0.00"
                    class="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div class="from-group">
                  <label for="discount_name">Maximum discount</label>
                  <input
                    type="number"
                    placeholder="MYR 0.00"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="discount_application discount-box">
            <h4 className="mb-2">Discount Items</h4>
            <div className="row on-gutter-20px">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox1"
                  />
                  <label className="form-check-label" for="radiox1">
                    All Items
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox2"
                    checked
                  />
                  <label className="form-check-label" for="radiox2">
                    Selected Items
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="discount_application discount-box">
            <h4 className="mb-2">Customer Segmentation</h4>
            <div className="row on-gutter-20px">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox1"
                  />
                  <label className="form-check-label" for="radiox1">
                    All Customer
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox2"
                    checked
                  />
                  <label className="form-check-label" for="radiox2">
                    New Customer
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div class="from-group">
                  <label for="discount_name">Number of uses per customer</label>
                  <input type="number" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="discount_application discount-box">
            <h4 className="mb-2">Availability</h4>
            <div className="row on-gutter-20px">
              <div className="col-md-6">
                <div className="from-group">
                  <label htmlFor="discount_name">Start Date *</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="from-group">
                  <label htmlFor="discount_name">Start Time *</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row on-gutter-20px">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox1"
                  />
                  <label className="form-check-label" for="radiox1">
                    Expires on a specific date
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="radiox2"
                    checked
                  />
                  <label className="form-check-label" for="radiox2">
                    Never expires
                  </label>
                </div>
              </div>
            </div>
            <div className="row on-gutter-20px">
              <div className="col-md-6">
                <div className="from-group">
                  <label htmlFor="discount_name">End Date *</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="from-group">
                  <label htmlFor="discount_name">End Time</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="from-group">
                  <label htmlFor="discount_name">Total number of uses</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-discount">
            Save Discount
          </button>
        </form>
      </div>
    );
  }
}
export default ApplicableOutlets;
