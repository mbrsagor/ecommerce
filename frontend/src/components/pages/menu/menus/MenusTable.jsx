import axios from 'axios';
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { menusURL } from "../../../../constants";
import { menuPlateformListAction } from '../../../../store/actions/menusPlateformAction';
import DeleteModal from "../DeleteModal";

class MenusTable extends Component {

    state = {
        menuPlatefrom: []
    }

    componentDidMount() {
        // this.props.menuPlateformListAction();
        axios.get(menusURL)
        .then((res) => {
            console.log(res.data);
            this.setState({
                menuPlatefrom: res.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render() {
        const {menuPlatefrom} = this.state;
        // console.log(menuPlatefrom);
        return (
            <div className="card table-responsive">
                <table className="table table-hover">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Platform</th>
                            <th scope="col">State</th>
                            <th scope="col" className="text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuPlatefrom.length ? (menuPlatefrom.map((menu, index) => {
                            return(
                                <tr key={index}>
                                    <td>{menu.name && menu.name}</td>
                                    <td>{menu.platform && menu.platform}</td>
                                    <td>
                                        {menu.is_published && menu.is_published ? '': 'Draft'}
                                        <button type="button" className="btn btn-outline-success btn-sm ml-2" > Publish </button>
                                    </td>
                                    <td className="text-right">
                                        <Link to={`view-menu-item/${menu.id}`}>
                                            <button
                                                type="button"
                                                className="btn btn-outline-dark mr-2 "
                                            >
                                                View
                                            </button>
                                        </Link>
                                        <DeleteModal name="Daily menu" />
                                    </td>
                                </tr>
                            )
                        })) : null}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    menuPlatefrom: state.menuPlatefrom
})

export default connect(mapStateToProps, {menuPlateformListAction}) (MenusTable)
