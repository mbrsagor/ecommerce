import React, { Component } from "react"
import {Link} from 'react-router-dom'

class ResetForm extends Component {
    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col">
                        <label>Email *</label>
                        <input type="email" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button className="btn btn-primary btn-md btn-block">
                            Reset password
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center">
                        <Link to='/login'>Return to login</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default ResetForm
