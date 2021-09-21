import { createStore } from "redux";
import rootreducers from "./rootReducers";
const store = createStore(rootreducers);
export default store;
