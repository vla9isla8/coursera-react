import {combineReducers, createStore} from "redux";
import {Comments} from "./commenst";
import {Promotions} from "./promotions";
import {Leaders} from "./leaders";
import {Dished} from "./dishes";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            dishes: Dished,
            leaders: Leaders,
            promotions: Promotions
        })
    );
    return store;
};
