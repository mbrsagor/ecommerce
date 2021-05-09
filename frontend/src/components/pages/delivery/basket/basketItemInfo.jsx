import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'
import axios from "axios";
import {addToCartURL, orderItemUpdateURL} from "../../../../constants";

export class BasketItemInfo extends Component {
    
    state={
        data: [],
        error: null,
        loading: false
    }

    decrementtBtton = (itemID) => {
        axios.post(orderItemUpdateURL, {itemID})
          .then(res => {
            this.props.handleFetchOrder();
          })
          .catch(err => {
                this.setState({error: err});
          });
    }

    incrementBtton = (outletID, itemID) => {
        this.setState({loading: true});
        const { locationID, subdomain } = this.props;
        axios.post(addToCartURL, {locationID, itemID, outletID, subdomain}).then(res => {
          this.props.handleFetchOrder();
          this.setState({ loading: false });
        }).catch(err => {
          this.setState({ error: err });
        });
    }
    
    render() {
        const { order_items } = this.props;
        return (
            <>
                {order_items.map((order_item, i) => {
                    return (
                        <div className="basket_item_info" key={order_item.id}>
                            <div className="basket_info">
                                <h3>{order_item.item.title}</h3>
                                <p>BDT {order_item.item.price}</p>
                            </div>
                            <div className="basket_update">
                                <div className="item_quantity text-center pt-3">
                                    <button onClick={ () => this.decrementtBtton(order_item.item.id)} className="mr-2"><FeatherIcon icon="minus" size="15" /></button>
                                    <span>{order_item.quantity}</span>
                                    <button onClick={ () => this.incrementBtton(order_item.item.outlet, order_item.item.id)} className="ml-2"><FeatherIcon icon="plus" size="15" /></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default BasketItemInfo
