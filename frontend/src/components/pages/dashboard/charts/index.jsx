import React, { Component } from "react"
import LineChart from "./LineChart"


class Charts extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Total orders by outlet
                        </div>
                        <div className="card-body">
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts
