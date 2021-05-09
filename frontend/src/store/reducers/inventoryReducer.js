import * as Types from '../actions/types';

export const inventoryReducer = (state=[], action) =>{
    switch (action.type){
        case Types.FETCH_INVENTORY:
            // console.log(action.payload.inventory_list);
            return action.payload.inventory_list
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
