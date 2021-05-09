import React, { Component } from "react"
import { Link } from "react-router-dom"

class OutletSearch extends Component {
    render() {
        return (
            <div className="row mt-5 pt-3 outletSeachForm">
                <div className="col-md-7">
                    <h5>Outlets</h5>
                </div>
                <div className="col-md-3 pr-0">
                    <input 
                    type="text" 
                    onChange={this.props.searchHandler}
                    name="search"
                    value={this.props.searchValue} 
                    className="form-control" 
                    placeholder="Search outlet by name" 
                />
                </div>
                <div className="col-md-2">
                    <Link to="/create-outlet">
                        <button className="btn btn-md btn-primary">
                            Add new outlet
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default OutletSearch
