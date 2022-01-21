const redux = require("redux");

const BUY_CAKE = "Buy cake";
const BUY_ICECREAM = "Buy Ice Cream";

// Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "My First Redux"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// Initial state
const cakeState = {
    numOfCakes: 15
}
const iceCreamState = {
    numOfIceCreams: 20
}

// Reducer
const cakeReducer = (state = cakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            break;

        default: return state;
    }
}

const iceCreamReducer = (state = iceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            break;

        default: return state;
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

// Create a store
const store = redux.createStore(rootReducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
