import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginIntro extends Component {
    render() {
        return (
            <>
                <Link to="/">
                    <img src="logo.png" alt="onnow logo"/>
                </Link>
                <h3 className="pt-4">Welcome to onnow</h3>
                <p>
                It's good to see you again! <br />Type your login information and we will take you to your dashboard right away.
                </p>
            </>
        )
    }
}

export default LoginIntro
