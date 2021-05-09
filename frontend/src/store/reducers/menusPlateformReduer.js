import * as Types from '../actions/types';

export const menusPlateformReduer = (state=[], action) =>{
    switch (action.type){
        case Types.CREATE_MENUS:
            let results = [...state]
            results.unshift(action.payload.types);
            return results
        case Types.FETCH_MENUS:
            return action.payload.menuPlatefrom
        case Types.DETAIL_MENUS:
            return{
                ...state,
                menuPlatefrom: action.payload
            }
        case Types.UPDATE_MENUS:
            let updateMenus = [...state]
            updateMenus.unshift(action.payload.types)
            return updateMenus
        case Types.FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
