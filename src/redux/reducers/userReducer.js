import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
  } from "../../actions/types";


const initialState = {
  loggingIn: false,
  loggedIn: false,
  user: null,
  username: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return initialState;
        case LOGOUT:
            return initialState;
        default:
            return state
    }
}