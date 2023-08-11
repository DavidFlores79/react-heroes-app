import { types } from "../types/types";

/**No se deben llamar funciones externas (ni al console.log) desde el REDUCER */

export const authReducer = (state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                logged: false,
                user: null,
            };
        default:
            return state;
    }
}