import { combineReducers } from "redux";
import hallReducer from "./hallReducer";
import movieReducer from "./movieReducer"
import userReducer from "./userReducer";

export default combineReducers({
    movies: movieReducer,
    user: userReducer,
    hall: hallReducer
});
