import React, { Component } from "react"

class DeleteModal extends Component {
    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-toggle="modal"
                    data-target="#deleteModal"
                >
                    Delete
                </button>
                <div
                    className="modal fade"
                    id="deleteModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            
                            <div className="modal-body text-center"> <h5>Are you sure?</h5>
                            <p><b>{this.props.name}</b> will be permanently deleted.</p></div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Yes, delete it!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DeleteModal
