import React, { Component } from "react";
import { Link } from "react-router-dom";

class AccountSetup extends Component {
  render() {
    return (
      <div id="account_setup">
        <form noValidate="novalidate" onSubmit={this.props.handleSubmit}>
          <div className="form-field mb-4">
            <div className="form-field__label-wrapper justify-content-between">
              <label
                data-test="label"
                className="form-field__label form-field__label--required"
              >
                Username
              </label>
            </div>
            <div data-v-5b95a138="" className="input-username">
              <input
                data-v-5b95a138=""
                type="text"
                className="input__field"
                name="username"
                defaultValue={this.props.account.username}
                onChange={this.props.changeAccountHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-field mb-4">
                <div className="form-field__label-wrapper justify-content-between">
                  <label
                    data-test="label"
                    className="form-field__label form-field__label--required"
                  >
                    First name
                  </label>
                </div>
                <div data-test="input-box" className="input">
                  <input
                    data-test="input"
                    type="text"
                    className="input__field"
                    name="first_name"
                    defaultValue={this.props.account.first_name}
                    onChange={this.props.changeAccountHandler}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-field mb-4">
                <div className="form-field__label-wrapper justify-content-between">
                  <label
                    data-test="label"
                    className="form-field__label form-field__label--required"
                  >
                    Last name
                  </label>
                </div>
                <div data-test="input-box" className="input">
                  <input
                    data-test="input"
                    type="text"
                    className="input__field"
                    name="last_name"
                    defaultValue={this.props.account.last_name}
                    onChange={this.props.changeAccountHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-5">
              <div data-v-2d117fc6="" className="form-field mb-4">
                <div
                  data-v-2d117fc6=""
                  className="form-field__label-wrapper justify-content-between"
                >
                  <label
                    data-test="label"
                    className="form-field__label form-field__label--required"
                  >
                    Country code
                  </label>
                </div>
                <div data-test="select-box" className="select">
                  <select
                    data-v-5bd1de40=""
                    className="select__field"
                    name="country_code"
                  >
                    <option defaultValue="">+88</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-7">
              <div data-v-2d117fc6="" className="form-field mb-4">
                <div
                  data-v-2d117fc6=""
                  className="form-field__label-wrapper justify-content-between"
                >
                  <label
                    data-v-2d117fc6=""
                    data-test="label"
                    className="form-field__label form-field__label--required"
                  >
                    Mobile number
                  </label>
                </div>
                <div
                  data-v-6951019c=""
                  data-test="input-box"
                  className="input"
                  data-v-2d117fc6=""
                >
                  <input
                    data-v-6951019c=""
                    data-test="input"
                    type="number"
                    pattern="[\d]{9}"
                    className="input__field"
                    name="phone_number"
                    defaultValue={this.props.account.phone_number}
                    onChange={this.props.changeAccountHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-field mb-4">
            <div className="form-field__label-wrapper justify-content-between">
              <label
                data-test="label"
                className="form-field__label form-field__label--required"
              >
                Email address
              </label>
            </div>
            <div data-test="input-box" className="input">
              <input
                data-test="input"
                type="email"
                className="input__field"
                name="email"
                defaultValue={this.props.account.email}
                onChange={this.props.changeAccountHandler}
              />
            </div>
          </div>
          <div className="form-field mb-4">
            <div className="form-field__label-wrapper justify-content-between">
              <label
                data-test="label"
                className="form-field__label form-field__label--required"
              >
                Choose a password
              </label>
            </div>
            <div data-v-5b95a138="" className="input-password">
              <input
                data-v-5b95a138=""
                type="password"
                className="input-password__field"
                name="password"
                defaultValue={this.props.account.password}
                onChange={this.props.changeAccountHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <button
                data-v-1d7e5b83=""
                data-test="back"
                type="button"
                className="btn btn-outline-secondary-back form-control"
                onClick={this.props.prev}
              >
                Back
              </button>
            </div>
            <div className="col-sm-6 mb-3">
              <button
                data-v-1d7e5b83=""
                data-test="button"
                type="submit"
                className="btn btn-primary-account-create form-control"
              >
                Create my account
              </button>
            </div>
          </div>
        </form>
        <p className="register__text">
          <span className="mr-2">Already have an account?</span>
          <Link
            to="/login"
            className="anchor"
            data-test="anchor"
            title=" Login "
          >
            Login
          </Link>
        </p>
      </div>
    );
  }
}
export default AccountSetup;
