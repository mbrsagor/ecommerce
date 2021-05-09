import React, { Component } from "react"
import FeatherIcon from "feather-icons-react"
class NewOutlet extends Component {
    render() {
        return (
            <div className="add-new-outlets">
                <FeatherIcon className="outlet-icon" icon="home" size="20" />
                <br />
                <br />
                <h4>Let's create your first outlet!</h4>

                <p>
                    To start accepting orders, you need to have at least one
                    outlet set and active.
                </p>
                <button type="button" className="btn btn-primary">
                    Add new outlet
                </button>
            </div>
        )
    }
}

export default NewOutlet
