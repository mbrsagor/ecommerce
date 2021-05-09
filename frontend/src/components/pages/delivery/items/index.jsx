import React, { Component } from 'react';
import DeliveryHeader from '../deliveryHeader';
import DeliveryTo from '../deliveryTo';
import Items from './items';
import ItemsInfo from './itemsInfo';

class ItemList extends Component {

    componentDidMount() {
        document.title = "My item list"
    }

    render() {
        const {match: {params}} = this.props;
        return (
            <div className="delivery_main">
                <DeliveryHeader />
                <ItemsInfo />
                <DeliveryTo />
                <Items locationID={params.locationID} />
            </div>
        )
    }
}

export default ItemList
