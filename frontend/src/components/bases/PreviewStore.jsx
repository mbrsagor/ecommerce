import React, { Component } from "react"
import FeatherIcon from "feather-icons-react"
class PreviewStore extends Component {
    render() {
        return (
            <>
                <button className="btn btn-primary btn-sm ">
                    Preview your Store
                </button>
                <button
                    className="btn btn-primary btn-sm ml-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Copy"
                >
                    <FeatherIcon icon="copy" size="15" />
                </button>
            </>
        )
    }
}

export default PreviewStore