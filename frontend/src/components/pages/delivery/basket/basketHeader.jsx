import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'

class BasketHeader extends Component {
    render() {
        return (
            <div className="basket_header">
                <FeatherIcon icon="chevron-right" size="15" />
                <h3 className="mb-0">Your basket</h3>
                <span></span>
            </div>
        )
    }
}

export default BasketHeader
