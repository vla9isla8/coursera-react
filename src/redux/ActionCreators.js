import * as ActionTypes from "./ActionTypes";
import {baseUrl} from "../share/baseUrl";

const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId,
        rating,
        author,
        comment
    };
    newComment.date = new Date().toISOString();
    fetch(baseUrl + "comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
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
        .then(comment => dispatch(addComment(comment)))
        .catch(error => {
            console.log('post comments', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};


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

function leadersLoading() {
    return {
        type: ActionTypes.LEADERS_LOADING
    };
}

function addLeaders(leaders) {
    return {
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
    };
}

function leadersFailed(errMes) {
    return {
        type: ActionTypes.LEADERS_FAILED,
        payload: errMes
    }
}

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
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
        .then(promos => dispatch(addLeaders(promos)))
        .catch(reason => dispatch(leadersFailed(reason.message)));
};

export const postFeedback = (feedback) => dispatch => {
    fetch(baseUrl + "feedback", {
        method: "POST",
        body: JSON.stringify(feedback),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
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
        .then(feedback => alert(JSON.stringify(feedback)))
        .catch(error => {
            console.log('post comments', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};
