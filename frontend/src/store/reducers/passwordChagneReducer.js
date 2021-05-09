import * as Types from '../actions/types';

export const passwordChangeReduer = (state=[], action) =>{
    switch (action.type){
        case Types.PASSWORD_UPDATE:
            let user = [...state]
            user.unshift(action.payload.passwordChange)
            return user
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
