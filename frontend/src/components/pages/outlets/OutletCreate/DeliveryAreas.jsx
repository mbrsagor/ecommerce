import React, { Component } from "react"

class DeliveryAreas extends Component {
    render() {
        return (
            <div id="delivery_areas" className="container tab-pane fade">
                <div className="row mt-4 mb-4">
                    <div className="col-md-6 mt-2">
                        <h5>Step 1</h5>
                        <p>First, you need to download our Excel template file and fill it out with your delivery areas.</p>
                        <button className='btn btn-primary'>Download template</button>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6 mt-2">
                        <h5>Step 2</h5>
                        <p>When you finish filling out the file, click on the button below to upload it.</p>
                        <button className='btn btn-primary'>Upload file</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeliveryAreas
