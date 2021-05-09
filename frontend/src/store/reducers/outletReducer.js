import * as Types from '../actions/types';

const outletReducer = (state=[], action) => {
    switch (action.type){
        case Types.FETCH_OUTLET:
            return action.payload.outlets
        case Types.CREATE_OUTLET:
            let results = [...state];
            results.unshift(action.payload.outlets);
            return results;
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default outletReducer;
