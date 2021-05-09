import React, { Component } from "react"

class Address extends Component {
    render() {
        return (
            <div id="address" className="container tab-pane fade">
                <h5 className="mt-4">Address</h5>
                <div className="row mt-4 mb-2">
                    <div className="col-md-6">
                        <h6>Address</h6>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. building name, street"
                        />
                    </div>
                </div>
                <div className="row mt-4 mb-2">
                    <div className="col-md-6">
                        <h6>Area</h6>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Jumeirah Lake Tower"
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2">
                        <button className="btn btn-primary ">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Address
