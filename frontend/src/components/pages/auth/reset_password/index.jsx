import React, { Component } from 'react'
import ResetForm from './ResetForm'
import ClientFeedback from '../login/ClientFeedback';

class ResetPassword extends Component {
    render() {
        return (
            <div className="login container-fluid">
                <div className="row login_page align-items-center">
                    <div className="col-md-6 mt-5">
                        <div className="login_parent">
                            <div >
                                <h5>Forgot your password?</h5>
                                <p>Enter your email address adn we will get you back on track.</p>
                            </div>
                            <br />
                            <ResetForm />
                        </div>
                    </div>
                    <div className="col-md-6 client_feedback_bg text-light">
                        <ClientFeedback />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword
