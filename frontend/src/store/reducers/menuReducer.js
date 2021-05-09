import * as Types from '../actions/types';

export const menuReducer = (state=[], action) =>{
    switch (action.type){
        case Types.FETCH_MENU:
            return action.payload.menus
        case Types.DETAIL_MENU:
            return{
                ...state,
                menus: action.payload
            }
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
