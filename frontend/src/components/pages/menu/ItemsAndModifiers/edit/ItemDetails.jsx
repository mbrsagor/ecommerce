import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { menuDetailsAction } from '../../../../../store/actions/menuAction';

class ItemDetails extends Component {

    componentDidMount() {
        this.props.menuDetailsAction(this.props.id);
    }

    render() {
        const {menus} = this.props;
        // console.log(menus)
        // console.log(menus.title)
        return (
            <>
            <div className="row ItemDetailComponent">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <p className="item_label">Name:</p>
                            <h6>{ menus.menus && menus.menus.title}</h6>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <p className="item_label" >Price:</p>
                            <h6>MYR {menus.menus && menus.menus.price}</h6>
                        </div>
                        <div className="col">
                            <p className="item_label">Type:</p>
                            <h6>MYR {menus.menus && menus.menus.price}</h6>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <p className="item_label">Description:</p>
                            <p className="text-dark">
                                {menus.menus && menus.menus.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>Photo:</h5>
                    <div className="detail_image">
                        <img src={menus.menus && menus.menus.avatar} alt="logo"/>
                    </div>
                    {/* if there is no image then */}
                    {/* <input type="file" /> */}
                </div>
            </div>
            <div className="row">
            <div className="col-md-4 ">
                <Link to="/menu_1_edit-items&modifiers">
                    <button className="btn btn-primary mr-2">
                        Edit
                    </button>
                </Link>
                <Link to='/menu/items&modifiers'>
                <button className="btn btn-light">Back</button>
                </Link>
            </div>
        </div>
        </>
        )
    }
}

const mapStateToProps = state =>({
    menus: state.menus
})

export default connect(mapStateToProps, {menuDetailsAction}) (ItemDetails)
