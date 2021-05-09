import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Feature1 extends Component {
    render() {
        return (
            <section className="features-1 pt-5 mt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="media/features/feature2.png" alt="features"/>
                        </div>
                        <div className="col-md-6">
                            <div className="features1-content">
                                <h1>Simplify your operations</h1>
                                <p className="mb-5">Deliver faster with delivery partner integrations. Optimize your marketing campaigns. Promote your restaurant on social media. Reach new hungry customers.

</p>
                            <Link to="/">Book a demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature1
