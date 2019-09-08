import * as ActionTypes from "./ActionTypes";

export const Dished = (state = {
    isLoading: false,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHED: {
            const dishes = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess: null,
                dishes
            }
        }
        case ActionTypes.DISHES_FAILED: {
            const errMess = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess,
                dishes: []
            }
        }

        case ActionTypes.DISHES_LOADING: {
            return {
                ...state,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        }
        default:
            return state;
    }
};
