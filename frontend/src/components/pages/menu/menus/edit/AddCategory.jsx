import React, { Component } from "react"

class AddCategory extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 mr-0">
                    <input
                        type="text"
                        placeholder="New Category..."
                        className="form-control"
                    />
                </div>
                <div className="col-md-2 ml-0">
                    <button className="btn btn-primary">Create</button>
                </div>
            </div>
        )
    }
}

export default AddCategory
