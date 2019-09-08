import {COMMENTS} from "../share/dishes";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return [
                ...state,
                comment
            ];
        default:
            return state;
    }
};
