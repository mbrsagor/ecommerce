import axios from 'axios';
import { liveOrdersAll, liveOrdersKitchen, liveOrdersNew, liveOrdersReadyURL, restaurantOrderURL } from "../../constants";
import * as Types from '../actions/types';


// Fetch Restaurant 
export const getRestaurantOrder = () => dispatch => {
    axios.get(restaurantOrderURL)
        .then((res) => {
            // console.log(res.data)
            dispatch({
                type: Types.FETCH,
                payload: {
                    orders: res.data
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
}


// Live order all
export const getLiveOrderAll = () => dispatch => {
    axios.get(liveOrdersAll)
        .then((res) => {
            // console.log(res.data)
            dispatch({
                type: Types.ALL_ORDERS,
                payload: {
                    all_orders: res.data
                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: Types.FAIL
            })
        })
}

// Live order new
export const getLiveOrderNew = () => dispatch => {
    axios.get(liveOrdersNew)
        .then((res) => {
            // console.log(res.data)
            dispatch({
                type: Types.NEW_ORDERS,
                payload: {
                    new_orders: res.data
                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: Types.FAIL
            })
        })
}

// Live order kitchen
export const getLiveOrderKitchen = () => dispatch => {
    axios.get(liveOrdersKitchen)
        .then((res) => {
            // console.log(res.data)
            dispatch({
                type: Types.IN_KITCHEN,
                payload: {
                    kitchen_orders: res.data
                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: Types.FAIL
            })
        })
}


// Live order kitchen
export const getLiveOrderReady = () => dispatch => {
    axios.get(liveOrdersReadyURL)
        .then((res) => {
            // console.log(res.data)
            dispatch({
                type: Types.IN_ROUTE_READY,
                payload: {
                    ready_orders: res.data
                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: Types.FAIL
            })
        })
}
