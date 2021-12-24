import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cakeReducer from "../cake/cakeReducer";
import rootReducer from "../rootReducer/rootReducer";

// const store = createStore(cakeReducer);
// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;