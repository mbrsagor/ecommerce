import React, { Component } from "react"

class AddItemsModal extends Component {
    render() {
        return (
            <>
                <p
                    className="btn btn-link"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                >
                    Add items
                </p>
                <hr className='mt-0'/>

                <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <p
                                    className="modal-title"
                                    id="exampleModalLongTitle"
                                >
                                    Add items to
                                    <b className="text-primary mr-2 ml-2">
                                        Pizzas [SAMPLE]
                                    </b>
                                    Category
                                </p>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Search"
                                />
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                className="form-check-label mr-2"
                                                htmlFor="flexCheckDefault"
                                            >
                                                Default checkbox
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-4 text-right">
                                        BDT 50.00
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    data-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                >
                                    Add 0 items
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AddItemsModal
