import * as Types from '../actions/types';


export const WebsiteOrderingReducer = (state=[], action) =>{
    switch (action.type){
        case Types.RETRIVE_WEBSITEORDRING:
            return{
                ...state,
                website: action.payload
            }
        case Types.UPDATE_WEBSITEORDRING:
            let updateWebsite = [...state]
            updateWebsite.unshift(action.payload.website)
            return updateWebsite
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
