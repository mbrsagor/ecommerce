import * as Types from '../actions/types';

export const brandingReducer = (state=[], action) =>{
    switch (action.type){
        case Types.FETCH_MENU:
            return action.payload.menus
        case Types.DETAIL_MENU:
            return{
                ...state,
                branding: action.payload
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
