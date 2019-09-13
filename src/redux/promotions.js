import * as ActionTypes from "./ActionTypes";

export const Promotions = (state = {
    isLoading: false,
    errMess: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOTIONS: {
            const promotions = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess: null,
                promotions
            }
        }
        case ActionTypes.PROMOTIONS_FAILED: {
            const errMess = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess,
                promotions: []
            }
        }

        case ActionTypes.PROMOTIONS_LOADING: {
            return {
                ...state,
                isLoading: true,
                errMess: null,
                promotions: []
            }
        }
        default:
            return state;
    }
};
