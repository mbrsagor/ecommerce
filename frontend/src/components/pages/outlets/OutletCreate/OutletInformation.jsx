import React, { Component } from "react";
import { connect } from "react-redux";
import { createOutletAction } from '../../../../store/actions/outletAction';
import { Redirect } from 'react-router'

class OutletInformation extends Component {

    state = {
        name: '',
        tax_rate: 0,
        same_day: false,
        next_day: false,
        avatar: null,
        phone: '',
        email: '',
        is_publish: true,
        is_shared: false,
        redirect: null
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        let {name, tax_rate, phone, email, is_publish, next_day, same_day} = this.state
        this.props.createOutletAction({name, tax_rate, phone, email, is_publish, next_day, same_day})
        this.setState({ redirect: "/outlets" });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }

        const {name, tax_rate, phone, email, is_publish, next_day, same_day} = this.state
        return (
            <div id="outlet_information" className="tab-pane active">
                <br />
                
                <form onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="mt-2 mb-4">Outlet information</h5>
                        <h6>Cover Image</h6>
                        <div className="file-upload-wrapper">
                            <input
                                type="file"
                                id="input-file-now"
                                name="avatar"
                                className="file-upload"
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <p>Outlet Name</p>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onChangeHandler}
                            className="form-control"
                            placeholder="e.g joye's pizza"
                        />
                    </div>
                </div>
                <h5>Contact information</h5>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <p>Email</p>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.onChangeHandler}
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-md-6">
                        <p>Phone</p>
                        <input
                            className="form-control"
                            name="phone"
                            vlaue={phone}
                            onChange={this.onChangeHandler}
                            type="text" 
                            placeholder="+880100000000"
                        />
                    </div>
                </div>
                <h5>Ordering Settings</h5>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <h6>Ordering Schedule</h6>
                        <p>Select the dates customers can place orders for</p>
                    </div>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={same_day}
                        onChange={this.onChangeHandler}
                        id="flexCheckDefault"
                    />
                    <label
                        className="form-checklabel"
                        htmlFor="flexCheckDefault">Same day</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="is_shared"
                        value={next_day}
                        onChange={this.onChangeHandler}
                        id="flexCheckChecked"
                    />
                    <label className="form-check-h6" htmlFor="flexCheckChecked">
                        Next day
                    </label>
                </div>
                <div className="row mt-2">
                    <div className="col-md-2">
                        <h6>Tax rate (%)</h6>
                        <input
                            type="text"
                            value={tax_rate}
                            name="tax_rate"
                            onChange={this.onChangeHandler}
                            className="form-control"
                            placeholder="0.00%"
                        />
                    </div>
                    <br />
                    <div className="col-md-4">
                        <h6>Tax inclusive</h6>
                        <button className="btn btn-primary btn-sm mr-2">
                            Inclusive
                        </button>

                        <button className="btn btn-info btn-sm">
                            Exclusive
                        </button>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-1">
                        <label className="switch">
                            <input
                                name="is_publish"
                                value={is_publish}
                                type="checkbox"
                                onChange={this.onChangeHandler}
                                id="togBtn" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <div className='col-md-2 mt-2  ml-1'>
                        <h6> Alert calls</h6>

                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2">
                        <button className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {createOutletAction}) (OutletInformation)
