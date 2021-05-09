import FeatherIcon from "feather-icons-react"
import React, { Component } from "react"
import { Link } from "react-router-dom"

class Starter extends Component {
    render() {
        return (
            <div className="card p-5 mt-4 dash-card">
                <div className="row on-gutter-30px">
                    <div className="col-xl-6">
                        <h1 className="starter-heading-one">Getting Started</h1>
                        <div className="card p-2 card-sky mt-4 mb-3">
                            <div className="row ">
                                <div className="col-md-2 pl-0">
                                    <FeatherIcon
                                        icon="sun"
                                        size="25"
                                        className="ml-4 mt-5 mr-2"
                                        color="#f05a22"
                                    />
                                </div>
                                <div className="col dashboard-card-body pl-0">
                                    <h4>Get a tailored onboarding</h4>
                                    <p>
                                        Answer Link few questions so our team
                                        can give you Link better onboarding
                                        experience.
                                    </p>
                                    <Link
                                        to=""
                                        className="dasboard-card-body-link"
                                    >
                                        Start answering
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h4 className="onboarding-steps__subtitle">
                            
                            Follow these steps below to get your account ready
                            to receive orders. 
                        </h4>

                        <ol className="onboarding-steps__list">
                            <li data-test="step-1">
                                <h2>Outlet settings</h2>
                                <p>
                                    Add your outlets and configure their opening
                                    hours, payment methods, delivery areas, and
                                    operation settings.
                                </p>
                                <Link
                                    to="/outlets"
                                    className="onboarding-steps__link-cta"
                                    data-test="configureOutletLink"
                                    title="Outlet settings"
                                >
                                    Set up your outlet
                                </Link>
                            </li>
                            <li data-test="step-2">
                                <h2>Ordering menu</h2>
                                <p>
                                    Build your menu for customers to start
                                    placing their orders from you.
                                </p>
                                <Link
                                    to="/items_modifiers"
                                    className="onboarding-steps__link-cta"
                                    title="Ordering menu"
                                >
                                    Create your menu
                                </Link>
                            </li>
                            <li data-test="step-3">
                                <h2>Sales channels</h2>
                                <p>
                                    Allow customers to place their orders on
                                    different touch points such as your website,
                                    Instagram, Facebook, Google My Business and
                                    more!
                                </p>
                                <Link
                                    to="/sales_channel"
                                    className="onboarding-steps__link-cta"
                                    title="Sales channels"
                                >
                                    Connect your sales channels
                                </Link>
                            </li>
                        </ol>
                        <h6 className="end-text-h6">
                            After completing all the steps, your business will
                            be ready to receive orders from customers!
                        </h6>
                        <button className="btn btn-outline-custom">
                            Need help? Book a demo
                        </button>
                    </div>
                    <div className="col-xl-6">
                        <video className="starter-video" src="" controls />
                    </div>
                </div>
            </div>
        )
    }
}

export default Starter
