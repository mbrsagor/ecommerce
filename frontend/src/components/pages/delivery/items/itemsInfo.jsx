import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'

class ItemsInfo extends Component {
    render() {
        return (
            <div className="item_info pb-3">
                <div className="pl-3">
                    <p>Western Garden City, 442 East Nakhalpara, Tejgaon, Dhaka, Bangladesh</p>
                    <div className="info">
                        <span><FeatherIcon icon="clock" size="11" /> 15 - 25 min</span>
                        <span className="ml-4"><FeatherIcon icon="shopping-bag" size="12" /> 15 - 25 min</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemsInfo
