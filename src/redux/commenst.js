import * as ActionTypes from "./ActionTypes";

export const Comments = (state = {
    isLoading: false,
    errMess: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT: {
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return {
                ...state,
                isLoading: false,
                errMess: null,
                comments: [
                    ...state.comments,
                    comment
                ]
            };
        }
        case ActionTypes.ADD_COMMENTS: {
            const comments = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess: null,
                comments
            }
        }
        case ActionTypes.COMMENTS_FAILED: {
            const errMess = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess,
                comments: []
            }
        }

        case ActionTypes.COMMENTS_LOADING: {
            return {
                ...state,
                isLoading: true,
                errMess: null,
                comments: []
            }
        }
        default:
            return state;
    }
};
