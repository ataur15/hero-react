// Import redux and logger from node modules
const redux = require('redux');
const reduxLogger = require('redux-logger');

// Variables declare
const BUY_CAKE = 'Buy cake';
const BUY_ICECREAM = 'Buy ice cream';

// Actions
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// Declare initial state
const cakeInitialState = {
    numOfCakes: 10
}

const iceCreamInitialState = {
    numOfIceCreams: 20
}

// Reducers
const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            break;

        default: return state
    }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            break;

        default: return state
    }
}

// Combine reducer
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// Create a Redux store that holds the application state
const store = redux.createStore(rootReducer, redux.applyMiddleware(reduxLogger.createLogger()));
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => { });
// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();


/*
Three core concepts of Redux
----------------------------
- Store (Holds the state of entire application)
- Action (Action is a plain JavaScript object that contains information. Action has a type field that tells what kind of action to perform. Action only describes what happened but don't describes how the applications state changes )
- Reducer ( A reducer is a pure function that takes previous state and an action and returns the new state)
*/


/*
Redux store responsibilities
----------------------------
- Holds entire application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action) method
- Allows to Register listeners via subscribe(listener) method
- Unsubscribe the store by calling the function that was returned by subscribe(listener) method
*/


/*
Package:
--------
redux-logger
axios
redux-thunk
*/
