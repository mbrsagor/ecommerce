import React, { Component } from 'react';

class Application extends Component {

    render() {
        return (
            <div className="discount_application discount-box">
                <h4>Application</h4>
                <form className="mt-4">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="item1"/>
                        <span>Automatic</span>
                        <label className="form-check-label" htmlFor="item1"> Will be automatically applied upon checkout. Customers can remove the code if they wish. </label>
                    </div>
                    <br/>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="item1"/>
                        <span>Menual</span>
                        <label className="form-check-label" htmlFor="item1">  Will be displayed on the ordering menu, and customers will have to select it if they wish to use it. </label>
                    </div>
                    <br/>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="item1"/>
                        <span>Hidden code</span>
                        <label className="form-check-label" htmlFor="item1">  Won't be displayed on the ordering menu, and customers will type the code at the checkout.  </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Application;
