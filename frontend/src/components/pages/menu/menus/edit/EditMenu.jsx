import axios from 'axios'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { menusURL } from "../../../../../constants"
import { menusDetailsAction, menuUpdateAction } from '../../../../../store/actions/menusPlateformAction'
import Header from "../../../../bases/Header"
import Sidebar from "../../../../bases/Sidebar"
import AddCategory from "./AddCategory"
import CategoriesList from "./CategoriesList"
import MenuHeader from "./MenuHeader"


class EditMenu extends Component {

    state = {
        name: '',
        notes: ''
    }

    componentDidMount() {
        axios.get(`${menusURL}${this.props.match.params.id}`)
        .then((res) => {
            // console.log(res.data);
            this.setState({
                name: res.data.name,
                notes: res.data.notes
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const {name, notes} = this.state
        this.props.menuUpdateAction(this.props.match.params.id,{name, notes});
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
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
                    <div className="main_content">
                        <div className="container">
                            <MenuHeader />
                            <div className="card mt-3 p-3">
                                <form onSubmit={this.submitHandler}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                defaultValue={name}
                                                onChange={this.changeHandler}
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Platform</label>
                                            <input
                                                type="text"
                                                className="form-control "
                                                defaultValue="onnow"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="notes">Notes</label>
                                                <textarea
                                                    id="notes"
                                                    name="notes" 
                                                    onChange={this.changeHandler}
                                                    defaultValue={notes}
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-primary"> Save </button>
                                            <Link to="/menus">
                                                <button className="btn btn-secondary ml-2">
                                                    Cancel
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card p-3">
                                <CategoriesList />
                                <AddCategory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    menuPlatefrom: state.menuPlatefrom
})
export default connect(mapStateToProps, {menusDetailsAction, menuUpdateAction}) (EditMenu)
