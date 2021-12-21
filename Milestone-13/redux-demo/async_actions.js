const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// Variables declare
const FETCH_USERS_REQUEST = 'Fetch users request';
const FETCH_USERS_SUCCESS = 'Fetch users success';
const FETCH_USERS_FAILURE = 'Fetch users failure';

// Actions
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Initial state
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
            break;

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// Async action creator that returns an action
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

// Create a store
const store = redux.createStore(reducer, redux.applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers());