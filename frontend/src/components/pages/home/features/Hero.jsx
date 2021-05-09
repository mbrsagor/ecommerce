import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Hero extends Component {
    render() {
        return (
            <section className="hero mt-3 pt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-last">
                            <div className="hero_right">
                                <img src="media/hero-image.jpeg" className="rounded" alt="hero bg"/>
                            </div>
                        </div>  
                        <div className="col-lg-6">
                            <div className="hero_left pt-5">
                                <h1>Start driving online orders to your restaurant</h1>
                                <h2>— at 0% commission</h2>
                                <ul className="mb-5">
                                    <li>Commission-free online ordering</li>
                                    <li>Social media marketing & analytics</li>
                                    <li>Delivery partner & payment gateway integration</li>
                                    <li>Restaurant websites & more</li>
                                </ul>
                                <Link className="hero_button" to="/registration">Start Free Trail</Link>
                            </div>
                        </div>   
                    
                    </div>           
                </div>
            </section>
        )
    }
}

export default Hero
