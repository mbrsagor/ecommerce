import axios from 'axios';
import { restaurantOrderDeliveryURL } from "../../constants";
import * as Types from '../actions/types';

// restaurant order delivery action
export const restaurantOrderByDeliveryAction = id => dispatch => {
    axios.get(`${restaurantOrderDeliveryURL/id}/`)
    .then((res) =>{
        console.log(res.data);
        dispatch({
            type: Types.GET_DELIVERY_BY_ID,
            payload: res.data
        })
    })
    .catch((error) => {
        console.log(error);
        dispatch({
            type: Types.FAIL
        })
    })
}
