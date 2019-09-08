import * as ActionTypes from "./ActionTypes";
import {DISHES} from "../share/dishes";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId,
        rating,
        author,
        comment
    }
});

function dishesLoading() {
    return {
        type: ActionTypes.DISHES_LOADING
    };
}

function addDished(dished) {
    return {
        type: ActionTypes.ADD_DISHED,
        payload: dished
    };
}

function dishedFailed(errMes) {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errMes
    }
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    setTimeout(() => {
        dispatch(addDished(DISHES));
    }, 2000);
};
