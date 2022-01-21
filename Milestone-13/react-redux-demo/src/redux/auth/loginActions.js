import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./loginActionTypes";

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const login = (data) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            // let response = await user;
            dispatch(loginSuccess(data));
        }
        catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
}