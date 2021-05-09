import React, { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../../../../bases/Header"
import Sidebar from "../../../../bases/Sidebar"
import ItemHeader from "./ItemHeader"
import ModifierListModal from "./ModifierListModal"
import OutletsList from "./OutletsList"

class EditItem extends Component {
    render() {
        return (
            <div id="wrapper">
                <div className="navbar-nav">
                    <Sidebar />
                </div>
                <div className="d-flex flex-column content_area">
                    <header>
                        <Header />
                    </header>
                    <div className="main_content">
                        <div className="container">
                            <ItemHeader />
                            <div className="card p-3 mt-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Name</label>
                                                <input
                                                    id="name"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label>Type</label>
                                                <br />
                                                <button className="btn btn-primary btn-sm">
                                                    Item
                                                </button>
                                            </div>
                                            <div className="col">
                                                <label>Price</label>
                                                <input
                                                    id="price"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <label>Description</label>
                                                <textarea
                                                    id="description"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">
                                            Photo
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="customFile"
                                        />
                                        <p>
                                            550 x 440 pixels minimum size 5 MB
                                            maximum weight
                                        </p>
                                        {/* <MyDropzone /> */}
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col">
                                        <Link to="/view-modifier-item">
                                            <button className="btn btn-primary btn-md mr-2">
                                                Save
                                            </button>
                                        </Link>
                                        <Link to="/items_modifiers">
                                            <button className="btn btn-light btn-md">
                                                Cancel
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                                <OutletsList />
                                <hr />
                                <ModifierListModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditItem
