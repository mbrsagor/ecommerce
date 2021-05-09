import axios from 'axios';
import { brandingURL } from "../../constants";
import * as Types from '../actions/types';


// Details branding
export const brandingDetailsAction = id => dispatch => {
    axios.get(`${brandingURL}${id}/`)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.RETRIVE_BRANDING,
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

// Update branding
export const brandingUpdateAction = (id, menus) => dispatch => {
    axios.put(`${brandingURL}${id}/`, menus)
        .then((res) => {
            dispatch({
                type: Types.UPDATE_BRANDING,
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
