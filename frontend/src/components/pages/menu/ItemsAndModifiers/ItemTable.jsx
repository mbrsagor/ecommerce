import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { menuListAction } from '../../../../store/actions/menuAction';
import Pagination from "../../customers/Pagination";
import DeleteModal from "../DeleteModal";


class ItemTable extends Component {

    componentDidMount() {
        this.props.menuListAction();
    }

    render() {
        const {menus} = this.props;
        // console.log(menus);
        return (
            <div className="card table-responsive itemTableRow">
                <table className="table table-hover">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">
                                <a href="#0">Item</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Type</a>
                            </th>

                            <th scope="col">
                                <a href="#0">Price</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Created At</a>
                            </th>
                            <th className="text-center" scope="col">
                                <a href="#0">Actions</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.length>0 && menus.map((menu, index) =>{
                            return(
                                <tr key={index}>
                                    <th scope="row" className="first-column">
                                        <img src={menu.avatar} className="table-image" alt="." />
                                        <div className="menu_items">
                                            <h6>{menu.title}</h6>
                                            <p className="mb-0">{menu.description}</p>
                                        </div>
                                    </th>
                                    <td>{menu.parent ? menu.parent: ""}</td>
                                    <td>{menu.price}</td>
                                    <td>
                                        <p className="mb-0 text-dark">{menu.created_at}</p>
                                        <span>01:36:57</span>
                                    </td>
                                    <td className="text-center">
                                        <Link to={`/view-modifier-item/${menu.id}`}>
                                            <button type="button" className="btn btn-outline-dark mr-2"> View </button>
                                        </Link>
                                        <DeleteModal name='Chicken BBQ Pizza'/>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <div className="row pt-2 pb-2 ml-0 mr-0 tableFooter">
                    <div className="col-md-6">
                        <p className="mb-0 mt-2 pl-1 text-dark">Showing from 1 to 15 of 15 records.</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <Pagination />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    menus: state.menus
})

export default connect(mapStateToProps, {menuListAction}) (ItemTable)
