import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {otpCodeWiseUserURL, sendOtpCodeURL, smsGetWayURL, verifyUserURL} from "../../../../constants";
import axios from "axios";
import { connect } from "react-redux";

class OTPAdd extends Component {

    state = {
        otp_code: {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
        },
        phone_number: '',
        error: null
    }

    componentDidMount() {
        const {phone_number} = this.props;
        this.sendOtpCodeHandler(phone_number);
    }

    getOtpCode = () => {
        const {first, second, third, fourth, fifth} = this.state.otp_code;
        return first+second+third+fourth+fifth
    }

    onSubmitHandler = () => {
        console.log('working')
        const {phone_number} = this.state;
        const otp_code = this.getOtpCode();
        console.log(otp_code);
        axios.get(otpCodeWiseUserURL(phone_number),)
          .then(res => {
            console.log(res.data);
            if (otp_code === res.data.otp_code) {
                axios.put(verifyUserURL(phone_number), {is_verified: true})
                  .then(res => {
                    console.log(res.data);
                    this.props.history.push('/login')
                  })
                  .catch(err => {
                        this.setState({error: err});
                  });
            } else {
                this.setState({error: "Your otp-code is not correct"});
            }
          })
          .catch(err => {
                this.setState({error: err});
          });
    }

    onChangeHandler = (e) => {
        this.setState({otp_code: {...this.state.otp_code, [e.target.name]: e.target.value}}, function() {
           const obj = this.state.otp_code
           let count = 0;
           if(Object.keys(this.state.otp_code).length === 5) {
               Object.keys(this.state.otp_code).forEach(function(key){
                 if(obj[key] !== '') {
                   count++;
                 }
               });
               if(count === 5) {
                   this.onSubmitHandler();
               }
             }
        });
    }

    sendOtpCodeHandler = (phone_number) => {
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
        this.setState({phone_number: phone_number});
    }

    render() {
        return (
            <div className="otp_main pt-3 pl-3 pr-3">
                <FeatherIcon icon="arrow-left" size="25" />
                <h2>Verify your phone</h2>
                <p>We’ve sent you an SMS with the verification code to <br/> +88{this.state.phone_number}</p>
                <form className="mt-3" onSubmit={this.onSubmitHandler.bind(this)}>
                    <div className="otp_confirm">
                        <div className="d-flex flex-row">
                            <div className="mr-2">
                                <input
                                    type="text"
                                    name="first"
                                    value={this.state.otp_code.first}
                                    onChange={this.onChangeHandler.bind(this)}
                                    maxLength="1"
                                />
                            </div>
                            <div className="mr-2">
                                <input
                                    type="text"
                                    name="second"
                                    value={this.state.otp_code.second}
                                    onChange={this.onChangeHandler.bind(this)}
                                    maxLength="1"
                                />
                            </div>
                            <div className="mr-2">
                                <input
                                    type="text"
                                    name="third"
                                    value={this.state.otp_code.third}
                                    onChange={this.onChangeHandler.bind(this)}
                                    maxLength="1"
                                />
                            </div>
                            <div className="mr-2">
                                <input
                                    type="text"
                                    name="fourth"
                                    value={this.state.otp_code.fourth}
                                    onChange={this.onChangeHandler.bind(this)}
                                    maxLength="1"
                                />
                            </div>
                            <div className="mr-2">
                                <input
                                    type="text"
                                    name="fifth"
                                    value={this.state.otp_code.fifth}
                                    onChange={this.onChangeHandler.bind(this)}
                                    maxLength="1"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="otp_code_not_send text-center mt-4">
                    <p><Link to="/auth">I haven't received the code yet.</Link></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    phone_number: state.login_auth.user.phone_number
  };
};

export default connect(mapStateToProps)(OTPAdd);
