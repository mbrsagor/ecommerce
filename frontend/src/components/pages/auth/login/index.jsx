import React, { Component } from "react";
import { connect } from "react-redux";
// import { authLogin } from '../../../../store/actions/auth';
import { login } from "../../../../store/actions/authAction";
import ClientFeedback from "./ClientFeedback";
import LoginForm from "./loginForm";
import LoginIntro from "./LoginIntro";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password }, this.props.history);
    // if(e.target.email !== email && e.target.password !== password) {
    //     alert("Email and Password not match");
    // }else{
    //     alert("Login successfully");
    //     this.props.login({email, password}, this.props.history);
    // }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login container-fluid">
        <div className="row login_page align-items-center">
          <div className="col-md-6 left-panel">
            <div className="login_parent">
              <div className="login_warp">
                <LoginIntro />
              </div>
              <br />
              <LoginForm
                email={email}
                password={password}
                submitHandler={this.submitHandler}
                changeHandler={this.changeHandler}
              />
            </div>
          </div>
          <div className="col-md-6 client_feedback_bg text-light">
            <ClientFeedback />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(LoginView);
