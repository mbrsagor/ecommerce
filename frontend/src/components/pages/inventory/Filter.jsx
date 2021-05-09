import React, { Component } from "react"

class Filter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-11">
                        <input
                            type="text"
                            onChange={this.props.searchHandler}
                            name="search"
                            value={this.props.searchValue}
                            className="form-control"
                            placeholder="Search for items..."
                        />
                    </div>
                    <div className="col-lg-1 mt-2 pl-lg-0">
                        <h6>Availability</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter
