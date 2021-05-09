import FeatherIcon from "feather-icons-react";
import React, { Component } from 'react';
import DeliveryHeader from '../deliveryHeader';
import DeliveryTo from '../deliveryTo';
import Items from './items';
import ItemsInfo from './itemsInfo';

class MyItemList extends Component {

    componentDidMount() {
        document.title = "Direct order from..."
    }

    render() {
        const {match: {params}} = this.props;
        return (
            <>
                <div className="delivery_main">
                    <DeliveryHeader />
                    <ItemsInfo />
                    <DeliveryTo />
                    <Items locationID={params.locationID} />
                </div>
                <div className="checkout_btn">
                    <div className="basket_area">
                        <button className="add_to_basket"><span><FeatherIcon icon="shopping-cart" size="17" /><sub>0</sub></span><span className="btn_cart_text">View Basket</span> <span>BDT 310.00</span></button> 
                    </div> 
                </div>
            </>
        )
    }
}

export default MyItemList
