import React, { Component } from 'react';
import axios from "axios";

import BasketHeader from './basketHeader';
import BasketItemInfo from './basketItemInfo';
import BasketPricing from './basketPricing';
import ReviewButton from './reviewButton';
import SpecialInstructions from './specialInstructions';

import { orderSummaryURL } from "../../../../constants";
import {connect} from "react-redux";
import {ItemDetail} from "../items/itemDetail";

class Basket extends Component {
    state = {
        data: {
            order_items: [],
        },
        error: null,
        loading: false
    };

    componentDidMount() {
        this.handleFetchOrder();
    }

    handleFetchOrder = () => {
        this.setState({ loading: true });
        axios.get(orderSummaryURL)
          .then(res => {
            this.setState({ data: res.data, loading: false });
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

    render() {
        const {match: {params}} = this.props;
        return (
            <div className="delivery_main">

                <BasketHeader />
                <BasketItemInfo
                    order_items={this.state.data.order_items}
                    handleFetchOrder={this.handleFetchOrder}
                    subdomain={this.props.subdomain}
                    locationID={params.locationID}
                />
                <SpecialInstructions />
                <BasketPricing
                    order={this.state.data}
                />
                <ReviewButton />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    subdomain: state.login_auth.user.sub_domain
  };
};

export default connect(mapStateToProps)(Basket);