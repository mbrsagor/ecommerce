import React, { Component } from 'react';

class OrderType extends Component {

    render() {
        return (
            <div className="discount_application discount-box">
                <h4 className="mb-2">Order type</h4>
                <form className="mt-4">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="abc" id="with" />
                            Picup
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="abc" id="with" />
                            Delivery
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="abc" id="with" />
                            Dine-in
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderType;
