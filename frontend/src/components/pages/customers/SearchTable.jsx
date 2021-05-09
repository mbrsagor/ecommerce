import React, { Component } from "react"

class SearchTable extends Component {
    render() {
        return (
            <div className="card p-3">
                <div className="searchbar-row">
                    <div className="row on-gutter-20px">
                        <div className="col-md-3">
                            <label >Name</label>
                            <input
                                id="name"
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div className="col-md-3">
                            <label >Email</label>
                            <input
                                id="email"
                                className="form-control"
                                type="email"
                            />
                        </div>
                        <div className="col-md-3">
                            <label >Phone</label>
                            <input
                                id="phone"
                                className="form-control"
                                type="phone"
                            />
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn-x btn btn-outline-dark">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchTable
