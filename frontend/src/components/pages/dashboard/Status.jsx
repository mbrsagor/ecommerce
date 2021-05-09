import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurantOrder } from '../../../store/actions/restaurantOrderAction';


class Status extends Component {

    componentDidMount() {
        this.props.getRestaurantOrder()
    }

    getTotalSales(orders) {
        let totalSales = 0;
        orders && orders.map((order) => {
            totalSales += order.total
        })
        return totalSales
    }

    render() {
        const {orders} = this.props;
        // console.log(orders);
        const totalSales = this.getTotalSales(orders);
        let averageBusketVal = 0;
        averageBusketVal = totalSales / orders.length
        // console.log(averageBusketVal)
        return (
            <div className="row mt-4 status">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">Total orders</div>
                        <div className="card-body text-center">
                            <h3>{orders.length}</h3>
                            <p>orders completed</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">Total sales</div>
                        <div className="card-body text-center">
                            <h3>BDT {totalSales}</h3>
                            <p>sales</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">Average basket value</div>
                        <div className="card-body text-center">
                            <h3>BDT {averageBusketVal}</h3>
                            <p>average basket value</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">Average order rating</div>
                        <div className="card-body text-center">
                            <h3>N/A</h3>
                            <p>average order rating score</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders
})

export default connect(mapStateToProps, {getRestaurantOrder}) (Status)
