import React, { Component } from "react"

class PageTitle extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col">
                    <h5 className="page-title">{this.props.page_title}</h5>
                </div>
            </div>
        )
    }
}

export default PageTitle
