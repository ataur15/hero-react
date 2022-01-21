import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import loginReducer from "../auth/loginReducer";
import cakeReducer from "../cake/cakeReducer";
import iceCreamReducer from "../iceCream/iceCreamReducer";
import mangoReducer from "../mango/mangoReducer";
import userReducer from "../user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    mango: mangoReducer,
    users: userReducer,
    auth: loginReducer,
});

// const store = createStore(cakeReducer);
// const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;