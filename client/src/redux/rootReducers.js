import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceReducer from "./iceCreams/iceReducers";

const rootreducers=combineReducers({
    cake:cakeReducer,
    ice:iceReducer
});
export default rootreducers;