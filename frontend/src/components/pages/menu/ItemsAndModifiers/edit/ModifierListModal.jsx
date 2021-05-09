import React, { Component } from "react"

class ModifierListModal extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <h6>Modifier List (1)</h6>
                </div>
                <div className="col-md-4 text-right">
                    <p
                        className="btn btn-link"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                    >
                        Add Modifier List
                    </p>
                    <hr className="mt-0" />

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
                            <div className="modal-content text-center">
                                <div className="modal-head">
                                    <p
                                        className="modal-title mt-3 "
                                        id="exampleModalLongTitle"
                                    >
                                        Add modifier lists to
                                        <b className="text-primary mr-2 ml-2">
                                            Chicken BBQ Pizza [SAMPLE]
                                        </b>
                                    </p>
                                </div>
                                <div className="modal-body">
                                    <input
                                        type="text"
                                        className="form-control mt-3 mb-3"
                                        placeholder="Search"
                                    />
                                    <div className="row ">
                                        <div className="col-md-8 text-left">
                                            <p>Extra toppings</p>
                                        </div>

                                        <div className="col-md-4 text-right">
                                            <p>Single</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 text-left">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    Default checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md-4 text-right'>
                                            <p>Maximum: 5</p>
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
                </div>
            </div>
        )
    }
}

export default ModifierListModal
