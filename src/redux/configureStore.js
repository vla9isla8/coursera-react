import {applyMiddleware, combineReducers, createStore} from "redux";
import {Comments} from "./commenst";
import {Promotions} from "./promotions";
import {Leaders} from "./leaders";
import {Dished} from "./dishes";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createForms} from "react-redux-form";
import {InitialFeedback} from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            dishes: Dished,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
