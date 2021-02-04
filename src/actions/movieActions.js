import axios from "axios";
import { GET_ALL_MOVIES } from "./types";
import {moviesApi} from "../API/moviesApi";

export const getAllMovies = (pageNumber = 0,
                             pageSize = 5,
                             sortBy = "title",
                             sortOrder = "asc",
                             searchQuery = "") => async dispatch => {
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    // console.log(token)
    //
    try {

        return moviesApi.getMoviesPage(pageNumber,
            pageSize, sortBy, sortOrder, searchQuery).then(movies => {
            dispatch({
                type: GET_ALL_MOVIES,
                payload: movies
            });
        })

        // return await axios.get(`http://localhost:8080/movies?pageNumber=0&pageSize=5&sortBy=title&sortOrder=asc&searchQuery=`,
        // config).then(res=> {
        //     dispatch({
        //         type: GET_ALL_MOVIES,
        //         payload: res.data
        //     });
        // });
    } catch (err) {}
}