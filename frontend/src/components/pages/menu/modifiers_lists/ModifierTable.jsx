import axios from 'axios';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { modifierURL } from "../../../../constants";
import DeleteModal from "../DeleteModal";

class ModifierTable extends Component {

    state = {
        modifier : []
    }

    componentDidMount() {
        axios.get(modifierURL)
        .then((res) => {
            // console.log(res.data);
            this.setState({
                modifier: res.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render() {
        let {modifier} = this.state;
        // console.log(modifier)
        return (
            <div className="card table-responsive">
                <table className="table table-hover">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">
                                <a href="#0">Name</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Display Name</a>
                            </th>

                            <th scope="col">
                                <a href="#0">Type</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Modifiers Attached</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Min Selection</a>
                            </th>

                            <th scope="col">
                                <a href="#0">Max Selection</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Created At</a>
                            </th>
                            <th scope="col">
                                <a href="#0">Actions</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {modifier && modifier.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.display_name}</td>
                                    <td>{item.modifier_type}</td>
                                    <td>{item.id}</td>
                                    <td>{item.min}</td>
                                    <td>{item.max}</td>
                                    <td>
                                        <h6>{item.created_at}</h6>
                                        <p>01:36:57</p>
                                    </td>
                                    <td>
                                        <Link to={`/modifier-details/${item.id}`}>
                                            <button  type="button" className="btn btn-outline-dark mr-2"> View</button>
                                        </Link>
                                        <DeleteModal name="Extra toppings" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ModifierTable
