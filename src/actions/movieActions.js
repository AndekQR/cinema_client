import { GET_ALL_MOVIES } from "./types";
import { moviesApi } from "../API/moviesApi";

export const getAllMovies = (
  pageNumber = 0,
  pageSize = 5,
  sortBy = "title",
  sortOrder = "asc",
  searchQuery = ""
) => async (dispatch) => {

  try {
    return moviesApi
      .getMoviesPage(pageNumber, pageSize, sortBy, sortOrder, searchQuery)
      .then((movies) => {
        dispatch({
          type: GET_ALL_MOVIES,
          payload: movies,
        });
      });


  } catch (err) {}
};
