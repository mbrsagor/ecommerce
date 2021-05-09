import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { inventoryActionList } from '../../../store/actions/inventoryAction';
import Filter from "./Filter";

class InventoryList extends Component {

    state = {
        searchValue: ''
    }

    componentDidMount() {
        this.props.inventoryActionList();
    }

    render() {
        const { inventory} = this.props;
        let searchInventory = inventory.length>0 && inventory.filter((item) => {
            return item.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })
        // console.log(searchInventory);
        return (
            <>
                <Filter
                    searchValue={this.searchValue}
                    searchHandler={(e) => this.setState({searchValue: e.target.value})}
                />
                {searchInventory && searchInventory.map((item, index) =>(
                    <div key={index}>
                        <h5 className="mb-0">
                            <div className="row item_hover">
                                <div className="col-md-10">
                                    <p
                                        className="btn btn-link"
                                        data-toggle="collapse"
                                        data-target={"#"+item.id}
                                        aria-expanded="true"
                                        aria-controls="InventoryListCollapse"
                                    >
                                        <FeatherIcon
                                            icon="plus-circle"
                                            size="20"
                                            className="mr-2"
                                        />
                                        {item.title}
                                    </p>
                                </div>
                                <div className="col-md-2 mt-2 text-right">
                                    <label className="switch">
                                        <input type="checkbox" id="togBtn" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </h5>
                        <div
                            id={item.id}
                            className="collapse hide ml-5 pt-3"
                            aria-labelledby="headingOne"
                            data-parent="#modifierListCollapse">
                            <div className="row">
                                <div className="col-md-10"><label className='m-0'>{item.title}</label>
                                <h6>{item.description}  <small className="text-muted">BDT {item.price}.00</small></h6></div>
                                <div className="col-md-2 text-right">
                                    <label className="switch">
                                        <input type="checkbox" id="togBtn" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

const mapStateToProps = state =>({
    inventory: state.inventory
})

export default connect(mapStateToProps, {inventoryActionList}) (InventoryList)
