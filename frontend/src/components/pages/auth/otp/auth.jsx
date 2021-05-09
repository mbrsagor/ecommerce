import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'

import { sendOtpCodeURL, smsGetWayURL } from "../../../../constants";
import axios from "axios";


class Auth extends Component {

    state = {
        phone_number: '',
        error: null
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {phone_number} = this.state;
        const otp_code = (""+Math.random()).substring(2,7);
        axios.put(sendOtpCodeURL(phone_number), {otp_code})
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
                this.setState({error: err});
          });

        axios.get(smsGetWayURL(phone_number, otp_code),)
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
                this.setState({error: err});
          });
        this.props.history.push(`${phone_number}/otp-add`);
    }

    render() {
        return (
            <div className="otp_main pt-3 pl-3 pr-3">
                <FeatherIcon icon="arrow-left" size="25" />
                <h2>Enter your phone number</h2>
                <p>We will send you an SMS with a one-time verification code</p>
                <form className="mt-3" onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="+88 01812-345678"
                            name='phone_number'
                            value={this.state.phone_number}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <button type="submit">Send code</button>
                </form>
            </div>
        )
    }
}

export default Auth
