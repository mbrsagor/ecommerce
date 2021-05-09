import axios from 'axios';
import { modifierURL } from "../../constants";
import * as Types from '../actions/types';


// CREATE MODIFIRE action
export const createModifierAction = modifier => dispatch => {
    axios.post(modifierURL, modifier)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.CREATE_MENUS,
                payload: {
                    modifier: res.data,
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

// Details Modifier
export const modifierDetailsAction = id => dispatch => {
    axios.get(`${modifierURL}${id}/`)
        .then((res) => {
            dispatch({
                type: Types.RETRIVE_MODIFIER,
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

// Update Modifier 
export const modifierUpdateAction = (id, modifier) => dispatch => {
    axios.put(`${modifierURL}${id}/`, modifier)
        .then((res) => {
            dispatch({
                type: Types.UPDATE_MODIFIER,
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

// Details Modifier
export const modifierDeleteAction = id => dispatch => {
    axios.delete(`${modifierURL}${id}/`)
        .then((res) => {
            dispatch({
                type: Types.DELETE_MODIFIER
            })
        })
        .catch(err =>{
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}
