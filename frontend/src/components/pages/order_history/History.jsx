import React, { Component } from "react"

class History extends Component {
    render() {
        return (
            <>
                <div className="col-md pb-4">
                    <p className="text-truncate text-muted m_bottom_5">
                        Revenue
                    </p>
                    <h4 data-test="revenue" className="text-truncate m-0">
                        BDT&nbsp;0.00
                    </h4>
                </div>
                <div className="col pb-4">
                    <p className="text-truncate text-muted m_bottom_5">
                        Average order value
                    </p>
                    <h4
                        data-test="averageRevenue"
                        className="text-truncate m-0"
                    >
                        BDT&nbsp;0.00
                    </h4>
                </div>
                <div className="col pb-4">
                    <p className="text-truncate text-muted m_bottom_5">
                        Total orders
                    </p>
                    <h4 data-test="totalOrders" className="text-truncate m-0">
                        0
                    </h4>
                </div>
            </>
        )
    }
}

export default History
