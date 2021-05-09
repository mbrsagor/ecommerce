import React, { Component } from 'react'

export class BasketPricing extends Component {
    render() {
        const { order } = this.props;
        return (
            <div className="basket_pricing pt-3 mb-5 pb-5 mt-2">
                <div className="pricing pb-5">
                    <ul>
                        <li>Basket total <small>(Inclusive of VAT)</small> <span>BDT {order.total}</span></li>
                        <li>Delivery fee <span>BDT 140</span></li>
                        <li className="mt-2"><b>Total</b> <span><b>BDT {order.total+140}</b></span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BasketPricing
