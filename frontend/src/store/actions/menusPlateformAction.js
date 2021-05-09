import axios from 'axios';
import { menusURL } from "../../constants";
import * as Types from '../actions/types';


/*
    Here Menu means menu platefrom
*/

// Create menu actions
export const createPlateformMenuAction = menus => dispatch => {
    axios.post(menusURL, menus)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: Types.CREATE_MENUS,
                payload: {
                    menuPlatefrom: res.data,
                }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}

// Show menu list action
export const menuPlateformListAction = () => dispatch => {
    axios.get(menusURL)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.FETCH_MENUS,
                payload:{
                    menuPlatefrom: res.data
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
export const menusDetailsAction = id => dispatch => {
    axios.get(`${menusURL}${id}/`)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.DETAIL_MENUS,
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

// Update menu 
export const menuUpdateAction = (id, menus) => dispatch => {
    axios.put(`${menusURL}${id}/`, menus)
        .then((res) => {
            dispatch({
                type: Types.UPDATE_MENUS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}
