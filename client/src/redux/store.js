import { createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootreducers from "./rootReducers";
import logger from "redux-logger"
const store = createStore(rootreducers,composeWithDevTools(applyMiddleware(logger)));
export default store;
