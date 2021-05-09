import React, { Component } from "react"
import Address from "./Address"
import DeliveryAreas from "./DeliveryAreas"
import OrderForDelivery from "./OrderForDelivery"
import OutletInformation from './OutletInformation'

class OutletCreate extends Component {
    
    render() {
        return (
            <div className="outletTab">
                <ul className="nav nav-tabs">
                    <li>
                        <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#outlet_information"
                        >
                            Outlet Information 
                        </a>
                    </li>
                    <li>
                        <a 
                            className="nav-link" 
                            data-toggle="tab"
                            href="#address">
                           Address
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#order_for_delivery"
                        >
                            Order For Delivery
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#delivery_areas"
                        >
                            Delivery Areas
                        </a>
                    </li>
                </ul>
                

                <div className="tab-content">
                    <OutletInformation />
                    <Address />
                    <OrderForDelivery />
                    <DeliveryAreas />
                </div>
            </div>
        )
    }
}

export default OutletCreate
