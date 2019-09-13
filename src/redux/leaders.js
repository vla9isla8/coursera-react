import * as ActionTypes from "./ActionTypes";

export const Leaders = (state = {
    isLoading: false,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS: {
            const leaders = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess: null,
                leaders
            }
        }
        case ActionTypes.LEADERS_FAILED: {
            const errMess = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess,
                leaders: []
            }
        }

        case ActionTypes.LEADERS_LOADING: {
            return {
                ...state,
                isLoading: true,
                errMess: null,
                leaders: []
            }
        }
        default:
            return state;
    }
};
