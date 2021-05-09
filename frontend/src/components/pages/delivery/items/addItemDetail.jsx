import axios from "axios";
import FeatherIcon from "feather-icons-react";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCartURL, orderItemDeleteURL, orderItemUpdateURL, orderSummaryURL } from "../../../../constants";
import {ItemDetail} from "./itemDetail";


class AddItemDetail extends Component {


    state={
        count: 0,
        data: [],
        error: null,
        loading: false,
        subdomain: ''
    }

    componentDidMount() {
        const subdomain = window.location.host.split('.')[0]
        this.setState({subdomain: subdomain})
        this.handleFetchOrder();
    }

    handleFetchOrder = () => {
        this.setState({ loading: true });
        axios.get(orderSummaryURL)
          .then(res => {
            const { itemID } = this.props;
            if(res.data.order_items.length) {
                const order_item = res.data.order_items.find((order_item) => order_item.item.id === itemID);
                const quantity = order_item.quantity;
                console.log(order_item);
                this.setState({count: quantity, data: order_item, loading: false});
            } else {
                this.setState({data: res.data, loading: false});
            }
          })
          .catch(err => {
            if (err.response.status === 404) {
                this.setState({
                    error: "You currently do not have an order",
                    loading: false
                });
            } else {
                this.setState({error: err, loading: false});
            }
          });
    };

    decrementtBtton = () => {
        const { itemID, email } = this.props;
        if (email === undefined) {
            window.location.href = '//' + this.state.subdomain + '.localhost:3000/login';
        }
        if (this.state.count === 1) {
            this.handleRemoveOrderItem();
        }
        axios.post(orderItemUpdateURL, {itemID})
          .then(res => {
            this.setState({
                count: this.state.count-1
            })
          })
          .catch(err => {
                this.setState({error: err});
          });
    }

    incrementBtton = () => {
        const { locationID, outletID, subdomain, itemID, email } = this.props;
        if (email === undefined) {
            window.location.href = '//' + this.state.subdomain + '.localhost:3000/login';
        }
        axios.post(addToCartURL, {locationID, itemID, outletID, subdomain}).then(res => {
          this.setState({
              count: this.state.count+1
          })
        }).catch(err => {
          this.setState({ error: err });
        });
    }

    handleRemoveOrderItem = () => {
        const orderItemID = this.state.data.id;
        axios.delete(orderItemDeleteURL(orderItemID))
          .then(res => {
            this.handleFetchOrder();
          })
          .catch(err => {
                this.setState({error: err});
          });
    }

    buttonClickHandler = () => {
        const {locationID} = this.props;
        this.props.history.push(`/delivery-itemlist/${locationID}`);
    }

    render() {
        return (
            <div className="mt-5 basket_area">
                <h4 className="quantity_title">Quantity</h4>
                <div className="item_quantity text-center pt-3">
                    <button onClick={this.decrementtBtton} className="mr-3"><FeatherIcon icon="minus" size="15" /></button>
                    <span>{this.state.count}</span>
                    <button onClick={this.incrementBtton} className="ml-3"><FeatherIcon icon="plus" size="15" /></button>
                </div>
                <button onClick={this.buttonClickHandler} className="add_to_basket"><span><FeatherIcon icon="shopping-cart" size="17" /><sub>0</sub></span><span className="btn_cart_text">Add to Basket</span> <span>BDT 310.00</span></button>  
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    email: state.login_auth.user.email
  };
};

export default connect(mapStateToProps)(withRouter(AddItemDetail));

// export default withRouter (AddItemDetail)
