import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Feature2 extends Component {
    render() {
        return (
            <section className="features-1 pt-5 mt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="features1-content">
                                <h1>Own your customer relationships</h1>
                                <p className="mb-5">Grow your own customer base, reward your loyal clients and increase your followers on social media.

</p>
                            <Link to="/">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="media/features/feature3.png" alt="features"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature2
