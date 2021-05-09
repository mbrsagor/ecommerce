import React, { Component } from "react"
import {Link} from 'react-router-dom'
import { Steps, Step } from "react-step-builder"
import { connect } from "react-redux";

import AccountSetup from "./AccountSetup"
import RestaurantInfo from "./RestaurantInfo"
import {config} from "./Config"

import { authSignup } from "../../../../store/actions/auth";

class Signup extends Component {
    state = {
        account: {
          username: "",
          email: "",
          phone_number: "",
          first_name: "",
          last_name: "",
          password: "",
          partner_name: "",
          select_brand: "",
          is_owner: true
        },
        restaurant: {
            name: ""
        },
        loading: false,
        error: null
    };

    handleSubmit = e => {
        e.preventDefault();
        const account = this.state.account;
        const restaurant = this.state.restaurant;

        this.props.signup(account, restaurant, this.props.history);
    }

    changeRestaurantHandler = e => {
        this.setState({ restaurant: { ...this.state.restaurant, [e.target.name]: e.target.value } });
    };

    changeAccountHandler = e => {
        this.setState({ account: { ...this.state.account, [e.target.name]: e.target.value } });
    };

    render() {
        return (
            <>
                <nav data-v-165b6af7="" className="steps">
                    <Link
                    to='#'
                        data-v-165b6af7=""
                       
                        data-test="tab"
                        className="steps__item steps__item--active active"
                    >
                        <span data-v-165b6af7="">Restaurant info</span>
                    </Link>
                    <Link
                    to='#'
                        data-v-165b6af7=""
                       
                        data-test="tab"
                        className="steps__item"
                    >
                        <span data-v-165b6af7="">Account setup</span>
                    </Link>
                </nav>
                <Steps config={config}>
                    <Step
                        restaurant={this.state.restaurant}
                        changeRestaurantHandler={this.changeRestaurantHandler}
                        component={RestaurantInfo} />
                    <Step
                        account={this.state.account}
                        handleSubmit={this.handleSubmit}
                        changeAccountHandler={this.changeAccountHandler}
                        component={AccountSetup} />
                </Steps>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (account, restaurant, history) => dispatch(authSignup(account, restaurant, history))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
