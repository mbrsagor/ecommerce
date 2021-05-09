import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { createPlateformMenuAction } from '../../../../store/actions/menusPlateformAction'
import Header from "../../../bases/Header"
import Sidebar from "../../../bases/Sidebar"

class CreateMenu extends Component {

    state = {
        name: '',
        notes: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const {name, notes} = this.state
        this.props.createPlateformMenuAction({name, notes});
        // Clear fields
        this.setState({
            name: '',
            notes: ''
        })
    }

    render() {
        const {name, notes} = this.state
        return (
            <div id="wrapper">
                <div className="navbar-nav">
                    <Sidebar />
                </div>
                <div className="d-flex flex-column content_area">
                    <header>
                        <Header />
                    </header>
                    <div className="main_content mt-5 p-2">
                        <div className="container-fluid ">
                            <h5>Create Menu</h5>
                            <div className="card p-3">
                                <form onSubmit={this.submitHandler}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={this.changeHandler}
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Platform</label>
                                            <select
                                                className="form-control "
                                                aria-label="Default select example">
                                                <option defaultValue>
                                                    Order Status
                                                </option>
                                                <option value="1">onnow</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="notes">Notes</label>
                                                <textarea
                                                    id="notes"
                                                    name="notes" 
                                                    onChange={this.changeHandler}
                                                    value={notes} 
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <button type="submit" className="btn btn-primary mr-2"> Save</button>
                                            <Link to="/menu/menus">
                                                <button className="btn btn-light"> Cancel</button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {createPlateformMenuAction}) (CreateMenu);
