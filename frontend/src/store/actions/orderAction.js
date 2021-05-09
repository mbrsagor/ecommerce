import axios from 'axios';
import { InventoryURL } from "../../constants";
import * as Types from '../actions/types';


// Order history action
export const orderHistoryAction = () => dispatch => {
    axios.get(InventoryURL)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.FETCH_INVENTORY,
                payload:{
                    inventory_list: res.data
                }
            })
        })
        .catch(err =>{
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}
