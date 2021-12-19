// Import redux from node modules
const redux = require('redux');

const BUY_CAKE = 'BUY_CAKE';

// Action is a plain javascript object
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// Declare initial state
const initialState = {
    numOfCakes: 10
}

// Reducer
const reducer = (state = initialState, action) => {
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

// Create a Redux store that holds the application state
const store = redux.createStore(reducer);

console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
// dispatch (action) to update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
// unsubscribe to the changes
unsubscribe();


/*
Three core concepts of Redux
----------------------------
- Store (Holds entire application state)
- Action (action carries some information from application to the redux store)
- Reducer
*/


/*
Redux store responsibilities
----------------------------
- Holds entire application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Register listeners via subscribe(listener)
- Handles unregistering of listeners vai the function returned by subscribe(listener)
*/