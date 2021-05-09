import * as Types from '../actions/types';


export const liveAllOrderReducer = (state=[], action) =>{
    switch (action.type){
        case Types.ALL_ORDERS:
            return action.payload.all_orders
        case Types.FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}


export const liveNewOderReducer = (state=[], action) =>{
    switch (action.type){
        case Types.NEW_ORDERS:
            return action.payload.new_orders
        case Types.FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}


export const liveKitchenOderReducer = (state=[], action) =>{
    switch (action.type){
        case Types.IN_KITCHEN:
            return action.payload.kitchen_orders
        case Types.FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}


export const liveReadyOderReducer = (state=[], action) =>{
    switch (action.type){
        case Types.IN_ROUTE_READY:
            return action.payload.ready_orders
        case Types.FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
