import React, { Component } from "react"

class SearchBar extends Component {
    render() {
        return (
            <div className="card p-3">
                <div className="searchbar-row">
                    <div className="row on-gutter-20px">
                        <div className="col-md-4">
                            <input
                                id="name"
                                className="form-control"
                                type="text"
                                placeholder="Search for Modifiers list..."
                            />
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-control "
                                aria-label="Default select example"
                            >
                                <option defaultValue>All Types</option>

                                <option value="2">Signle</option>
                                <option value="3">Multiple</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <button
                                type="button"
                                className="btn btn-outline-dark "
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar
