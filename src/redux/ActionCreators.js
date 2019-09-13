import * as ActionTypes from "./ActionTypes";
import {baseUrl} from "../share/baseUrl";

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
    return fetch(baseUrl + 'dishes')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error('Error ' + response.status + ": " + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            reason => {
                const error = new Error(reason.message);
                throw error;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDished(dishes)))
        .catch(reason => dispatch(dishedFailed(reason.message)));
};

function commentsLoading() {
    return {
        type: ActionTypes.COMMENTS_LOADING
    };
}

function addComments(comments) {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    };
}

function commentsFailed(errMes) {
    return {
        type: ActionTypes.COMMENTS_FAILED,
        payload: errMes
    }
}

export const fetchComments = () => (dispatch) => {
    dispatch(commentsLoading());
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error('Error ' + response.status + ": " + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            reason => {
                const error = new Error(reason.message);
                throw error;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(reason => dispatch(commentsFailed(reason.message)));
};


function promosLoading() {
    return {
        type: ActionTypes.PROMOTIONS_LOADING
    };
}

function addPromos(promos) {
    return {
        type: ActionTypes.ADD_PROMOTIONS,
        payload: promos
    };
}

function promosFailed(errMes) {
    return {
        type: ActionTypes.PROMOTIONS_FAILED,
        payload: errMes
    }
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error('Error ' + response.status + ": " + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            reason => {
                const error = new Error(reason.message);
                throw error;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(reason => dispatch(promosFailed(reason.message)));
};
