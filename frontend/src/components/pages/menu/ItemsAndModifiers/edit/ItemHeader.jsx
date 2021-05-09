import React, { Component } from "react"
import { Link } from "react-router-dom"

class ItemHeader extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-10">
                    <h5>Edit Item</h5>
                </div>
                <div className="col-md-2 text-right">
                    <Link to="/menu/1/create">
                        <button className="btn btn-primary btn-md">
                            New Item
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ItemHeader
