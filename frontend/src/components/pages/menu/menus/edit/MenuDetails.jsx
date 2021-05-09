import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { menusDetailsAction } from '../../../../../store/actions/menusPlateformAction';

class MenuDetails extends Component {

    componentDidMount() {
        this.props.menusDetailsAction(this.props.id);
    }

    render() {
        const {menuPlatefrom} = this.props;
        // console.log(menuPlatefrom.name);
        return ( menuPlatefrom.menuPlatefrom ? (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <h6>Name:</h6>
                        <h5>{menuPlatefrom.menuPlatefrom.name}</h5>
                    </div>
                    <div className="col-md-2 mt-4">
                        <button className="btn btn-success btn-sm disabled ">
                            Live
                        </button>
                    </div>
                    <div className="col-md-2">
                        <h6>Platform:</h6>
                        <h5>{menuPlatefrom.menuPlatefrom.platform}</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4 ">
                        <Link to={`/edit-menu/${menuPlatefrom.menuPlatefrom.id}`}>
                            <button className="btn btn-primary mr-2"> Edit</button>
                        </Link>
                        <Link to="/menus">
                            <button className="btn btn-light">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        ): null)
    }
}

const mapStateToProps = state =>({
    menuPlatefrom: state.menuPlatefrom
})
export default connect(mapStateToProps, {menusDetailsAction}) (MenuDetails)
