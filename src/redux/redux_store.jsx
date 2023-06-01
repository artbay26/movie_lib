import {combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux';
import reviewsReducer from "./reviewsReducer";

let reducers = combineReducers({
    reviewsPage: reviewsReducer,
});
let store = createStore(reducers);

export default store;