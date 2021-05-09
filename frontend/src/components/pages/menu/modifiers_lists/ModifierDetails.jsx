import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { modifierDetailsAction } from '../../../../store/actions/modifierAction'
import Header from "../../../bases/Header"
import Sidebar from "../../../bases/Sidebar"

class ModifierDetails extends Component {
    
    componentDidMount() {
        this.props.modifierDetailsAction(this.props.match.params.id);
    }

    render() {
        let {modifier} = this.props;
        // console.log(modifier);
        return (modifier ?(
            <div id="wrapper">
                <div className="navbar-nav">
                    <Sidebar />
                </div>
                <div className="d-flex flex-column content_area">
                    <header>
                        <Header />
                    </header>
                    <div className="main_content mt-1">
                        <div className="container-fluid border_top">
                            <h5 className="mt-3">Edit Modifier List</h5>
                            <div className="card p-3 mt-3">
                                <p></p>
                            <form onSubmit={this.submitHandler}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <label>Name</label>
                                        <input
                                            value={modifier.name && modifier.name}
                                            className="form-control"
                                            type="text"
                                            disabled/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-8">
                                        <label>Display Name</label>
                                        <input
                                            value={modifier.display_name && modifier.display_name}
                                            className="form-control"
                                            type="text"
                                            disabled/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <label>Min Modifiers</label>
                                        <input
                                            value={modifier.min && modifier.min}
                                            className="form-control"
                                            type="number"
                                            disabled />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Max Modifiers</label>
                                        <input
                                            value={modifier.max && modifier.max}
                                            className="form-control"
                                            type="number"
                                            disabled/>
                                    </div>
                                </div>
                                
                                <div className="row mt-2">
                                    <div className="col-md-8">
                                    <Link to={`/modifier-update/${modifier.id}`}>
                                            <button className="btn btn-light btn-md">
                                                Edit
                                            </button>
                                        </Link>
                                        <Link className="ml-2" to="/modifiers-list">
                                            <button className="btn btn-light btn-md">
                                                Cancel
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ): null)
    }
}

const mapStateToProps = state =>({
    modifier: state.modifier.modifier
})

export default connect(mapStateToProps, {modifierDetailsAction}) (ModifierDetails)
