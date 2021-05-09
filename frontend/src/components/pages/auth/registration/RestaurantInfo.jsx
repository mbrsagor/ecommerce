import React, { Component } from "react"
import { Link } from "react-router-dom"
class RestaurantInfo extends Component {
    render() {
        return (
            <div id="restaurant_info">
                <form noValidate="novalidate">
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
                                What’s the name of your restaurant?
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
                                type="text"
                                autoFocus="autofocus"
                                placeholder="Enter your restaurant name"
                                className="input__field"
                                name="name"
                                defaultValue={this.props.restaurant.name}
                                onChange={this.props.changeRestaurantHandler}
                            />
                        </div>
                    </div>
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
                                How many outlets do you have?
                            </label>
                        </div>
                        <div
                            data-v-5bd1de40=""
                            data-test="select-box"
                            className="select"
                            data-v-2d117fc6=""
                        >
                            <select
                                data-v-5bd1de40=""
                                className="select__field"
                                name="outlets"
                            >
                                <option
                                    data-v-5bd1de40=""
                                    defaultValue="1 outlet"
                                >
                                    1 outlet
                                </option>
                                <option
                                    data-v-5bd1de40=""
                                    value="2 - 5 outlets"
                                >
                                    2 - 5 outlets
                                </option>
                                <option
                                    data-v-5bd1de40=""
                                    value="6 - 10 outlets"
                                >
                                    6 - 10 outlets
                                </option>
                                <option data-v-5bd1de40="" value="10+ outlets">
                                    10+ outlets
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* <div data-v-2d117fc6="" className="form-field mb-4">
                        <div
                            data-v-2d117fc6=""
                            className="form-field__label-wrapper justify-content-between"
                        >
                            <label
                                data-v-2d117fc6=""
                                data-test="label"
                                className="form-field__label form-field__label--required"
                            >
                                What country are your restaurants in?
                            </label>
                        </div>
                        <div
                            data-v-5bd1de40=""
                            data-test="select-box"
                            className="select"
                            data-v-2d117fc6=""
                        >
                            <select
                                data-v-5bd1de40=""
                                className="select__field"
                                name="outlets"
                            >
                                <optgroup data-v-5bd1de40="">
                                    <option
                                        data-v-5bd1de40=""
                                        defaultValue="AE"
                                    >
                                        United Arab Emirates
                                    </option>
                                </optgroup>
                                <optgroup data-v-5bd1de40="">
                                    <option data-v-5bd1de40="" value="AF">
                                        Afghanistan
                                    </option>
                                    <option data-v-5bd1de40="" value="AL">
                                        Albania
                                    </option>
                                    <option data-v-5bd1de40="" value="DZ">
                                        Algeria
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
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
                                How did you hear about Onnow?
                            </label>
                        </div>
                        <div
                            data-v-5bd1de40=""
                            data-test="select-box"
                            className="select"
                            data-v-2d117fc6=""
                        >
                            <select
                                data-v-5bd1de40=""
                                className="select__field"
                                name="address"
                            >
                                <option
                                    data-v-5bd1de40=""
                                    defaultValue="Google"
                                >
                                    Google
                                </option>
                                <option data-v-5bd1de40="" value="Instagram">
                                    Instagram
                                </option>
                                <option
                                    data-v-5bd1de40=""
                                    value="Other restaurant"
                                >
                                    Other restaurant
                                </option>
                                <option data-v-5bd1de40="" value="Facebook">
                                    Facebook
                                </option>
                                <option data-v-5bd1de40="" value="Friend">
                                    Friend
                                </option>
                                <option data-v-5bd1de40="" value="Radio">
                                    Radio
                                </option>
                                <option data-v-5bd1de40="" value="Other">
                                    Other
                                </option>
                            </select>
                        </div>
                    </div> */}
                    <button
                        data-v-1d7e5b83=""
                        data-test="button"
                        type="submit"
                        className="btn btn-primary-continue btn-md form-control"
                        onClick={this.props.next}
                    >
                        Continue
                    </button>
                </form>
                <p className="register__text">
                    <span className='mr-2'>Already have an account?</span>
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
        )
    }
}

export default RestaurantInfo
