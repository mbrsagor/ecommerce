import React, { Component } from 'react';
import FeatureItem from './feature_item'

class Feature extends Component {
    render() {
        return (
            <section className="feature pt-5 pb-5 bg-gateway">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <FeatureItem icon="icon/paint-brush.svg" title="Customized ordering system" description="Integrate an ordering system that matches the look &amp; feel of your current website and setup
" />
                        </div>
                        <div className="col-md-4">
                            <FeatureItem icon="icon/bicycle.svg" title="Delivery network integration" description="No drivers? Get them on demand. Integrate orders and deliveries with your point of sale
                            
" />
                        </div>
                        <div className="col-md-4">
                            <FeatureItem icon="icon/trophy.svg" title="Built-in marketing tools" description="Access powerful marketing tools to boost loyalty, referrals, and collect customer feedback
" />
                        </div>
                        <div className="col-md-4">
                            <FeatureItem icon="icon/credit-card.svg" title="Online payment" description="Offer convenience with online payment, 1-click checkout or Apple Pay on all sales channels
" />
                        </div>
                        <div className="col-md-4">
                            <FeatureItem icon="icon/presentation.svg" title="CRM, Data & Analytics" description="Get valuable data and insights to help you make better decisions and scale your delivery business
" />
                        </div>
                        <div className="col-md-4">
                            <FeatureItem icon="icon/call-center.svg" title="Dedicated support" description="Contact our Support Team any day of the week. We are always on call and ready to help you
" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature
