import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { itemListURL } from "../../../../constants";

class Items extends Component {

    state = {
        loading: false,
        error: null,
        data: []
      };

    componentDidMount() {
        this.loadInventoryItems()
    }

    loadInventoryItems() {
        this.setState({loading: true});
        axios.get(itemListURL).then(res => {
          this.setState({ data: res.data, loading: false });
        }).catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    render() {
        const { data } = this.state;
        const { locationID } = this.props;
        return (
            <>
                <div className="brand_name">
                    <h3 className="pl-3 mt-5">Friggy's</h3>
                </div>
                {data.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="items_area mt-2 mb-2">
                                <div className="item_content">
                                    <div className="items">
                                        <div className="item_list pl-3 pr-3">
                                            <Link to={`/${locationID}/item-details/${item.id}`}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <h4>BDT {item.price}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item_photo">
                                    <img src={item.avatar} alt="item"/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Items
