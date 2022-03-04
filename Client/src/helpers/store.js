import { createStore, compose } from "redux";
import rootReducer from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log(composeEnhancers());

export const store = createStore(rootReducer, composeEnhancers());
