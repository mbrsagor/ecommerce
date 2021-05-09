import * as Types from '../actions/types';


const restaurantOrderReducer = (state=[], action) =>{
    switch (action.type){
        case Types.FETCH:
            return action.payload.orders
        case Types.FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export default restaurantOrderReducer;
