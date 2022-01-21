import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./loginActionTypes";

const initialState = {
    loading: false,
    user: null,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;

        case LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
            break;

        case LOGIN_FAILURE:
            return {
                loading: false,
                user: null,
                error: action.payload
            }
            break;

        default: return state;
    }
}

export default loginReducer;