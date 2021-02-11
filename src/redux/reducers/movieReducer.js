import {
    GET_ALL_MOVIES, GET_ALL_RECOMMENDATION
  } from "../../actions/types";

const initialState = {
    movies: [],
    recommended: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_MOVIES:
        return {
          ...state,
          movies: action.payload
        };
        case GET_ALL_RECOMMENDATION:
        return {
          ...state,
          recommended: action.payload
        };
      default:
        return state;
    }
  }