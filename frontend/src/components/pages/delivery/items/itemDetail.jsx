import axios from "axios";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { itemDetailURL } from "../../../../constants";
import AddItemDetail from './addItemDetail';
import ItemDetailInfo from './itemDetailInfo';

export class ItemDetail extends Component {

    state = {
        loading: false,
        error: null,
        data: []
    }

    componentDidMount() {
        this.handleFetchItem()
    }

    handleFetchItem = () => {
        const {match: {params}} = this.props;
        this.setState({loading: true});
        axios.get(itemDetailURL(params.itemID)).then(res => {
          this.setState({ data: res.data, loading: false });
        }).catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    render() {
        const { data } = this.state;
        const {match: {params}} = this.props;
        return (
            <div className="item_details">
                <div className="item_detail_info pl-3 pr-3">
                    <ItemDetailInfo item={data} locationID={params.locationID} />
                    <AddItemDetail
                        outletID={data.outlet}
                        subdomain={this.props.subdomain}
                        itemID={data.id}
                        locationID={params.locationID}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    subdomain: state.login_auth.user.sub_domain
  };
};

export default connect(mapStateToProps)(ItemDetail);