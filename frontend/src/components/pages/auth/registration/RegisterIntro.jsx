import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RegisterIntro extends Component {
    render() {
        return (
            <>
                <Link to="/">
                    <img src="logo.png" alt="onnow logo"/>
                </Link>
                <h3 className="pt-4">Try Onnow free for 30 days</h3>
                <p>No credit card required. Cancel anytime.</p>
            </>
        )
    }
}

export default RegisterIntro
