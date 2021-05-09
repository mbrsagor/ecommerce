import axios from 'axios';
import { InventoryURL } from "../../constants";
import * as Types from '../actions/types';


/*
    Here Menu means list of inventory
*/

// Show menu list action
export const menuListAction = () => dispatch => {
    axios.get(InventoryURL)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.FETCH_MENU,
                payload:{
                    menus: res.data
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


// Details menus
export const menuDetailsAction = id => dispatch => {
    axios.get(`${InventoryURL}${id}/`)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.DETAIL_MENU,
                payload: res.data
            })
        })
        .catch(err =>{
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}
