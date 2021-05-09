import React, { Component } from 'react';
// import FeatherIcon from "feather-icons-react";


class FeatureItem extends Component {
    render() {
        return (
            <div className="feature-item text-left">
                {/* <FeatherIcon className="mb-3" icon={this.props.icon} size="40" /> */}
                <img width="27" height="27" src={this.props.icon} alt="logo"/>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default FeatureItem
