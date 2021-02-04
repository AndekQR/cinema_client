import axios from "axios";
import { GET_ALL_MOVIES } from "./types";

export const getAllMovies = (token) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(token)
    
    try {
        dispatch({
            type: GET_ALL_MOVIES
        });
        return await axios.get(`http://localhost:8080/movies?pageNumber=0&pageSize=5&sortBy=title&sortOrder=asc&searchQuery=`,
        config).then(res=> {
            dispatch({
                type: GET_ALL_MOVIES,
                payload: res.data
            });
        });
    } catch (err) {}
}