import * as Types from '../actions/types';

export const modifierReduer = (state=[], action) =>{
    switch (action.type){
        case Types.CREATE_MODIFIER:
            let results = [...state]
            results.unshift(action.payload.modifier);
            return results
        case Types.UPDATE_MODIFIER:
            let modifier = [...state]
            modifier.unshift(action.payload.types)
            return modifier
        case Types.RETRIVE_MODIFIER:
            return{
                ...state,
                modifier: action.payload
            }
        case Types.DELETE_MODIFIER:
            return action.payload
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
