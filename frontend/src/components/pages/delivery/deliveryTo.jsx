import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'

export class DeliveryTo extends Component {
    render() {
        return (
            <div className="pl-3 pt-3">
                <div className="devering_to">
                    <h6>Delivering to</h6>
                    <p><FeatherIcon icon="map-pin" size="14" /> <span>Arjatpara (ASAP)</span> <FeatherIcon icon="chevron-down" size="15" /></p>
                    <button>Friggy's</button> <button className="ml-2">Party Pizza</button>
                </div>
            </div>
        )
    }
}

export default DeliveryTo
