import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <section className="error_section">
                <div className="space">
                <div className="text">
                    <div className="align-middle">
                        <h1 className="mb-5 pb-3">404</h1>
                        <p className="mt-5 pt-3">Sorry, the page are not available right now.</p>
                        <Link className="btn btn-warning btn-sm text-light" to="/">Homepage</Link>
                    </div>
                </div>
                <div className="orbit-1"></div>
                <div className="moon-1 sm"></div>
                <div className="orbit-2"></div>
                <div className="moon-2 sm"></div>
                <div className="orbit-3"></div>
                <div className="moon-3"></div>
                </div>
            </section>
        )
    }
}

export default Error
