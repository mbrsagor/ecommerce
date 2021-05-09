import React, { Component } from "react"
import FeatherIcon from "feather-icons-react"

class Filter extends Component {
    render() {
        return (
            <div className="row justify-content-between on-gutter-30px">
                <div className="col-md-6">
                    <select
                        className="form-control multiselect__single "
                        aria-label="Default select example"
                    >
                        <option defaultValue>Current month</option>

                        <option value="2">
                            Current day
                            <FeatherIcon icon="check" size="15" />
                        </option>
                        <option value="3">Previous day</option>
                        <option value="4">Last 7 days</option>
                        <option value="5">Last 30 days</option>
                    </select>
                </div>

                <div className="col-md-6 text-md-right">
                    <button className="btn btn-outline-primary-custom">
                        Launch Market Activity
                    </button>
                </div>
            </div>
        )
    }
}

export default Filter
