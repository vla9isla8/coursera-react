import {DISHES,COMMENTS,LEADERS,PROMOTIONS} from "../share/dishes";

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

export const Reducer = (state = initialState, action) => {
    return state;
};
