import React, { Component } from "react";
import ClientFeedback from "../login/ClientFeedback";
import ReegisterIntro from "./RegisterIntro";
import Signup from "./Signup";

class Registration extends Component {
  render() {
    return (
      <div className="login container-fluid">
        <div className="row login_page align-items-center">
          <div className="col-md-6 left-panel ">
            <div className="login_parent">
              <div className="login_warp">
                <ReegisterIntro />
              </div>
              <br />
              <Signup history={this.props.history} />
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

export default Registration;
