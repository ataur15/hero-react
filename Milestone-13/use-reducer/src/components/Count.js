import React, { useReducer } from 'react';

const countState = {
    count: 0,
    clicks: 0,
    active: true
};

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
            break;
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
            break;
        default:
            return state;
            break;
    }
}

const Count = () => {
    const [state, dispatch] = useReducer(countReducer, countState);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
        </div>
    );
};

export default Count;