import { GET_CHAIRS_BY_HALL, ADD_SELECTED_SEAT, DELETE_SELECTED_SEAT, GET_RESERVATED_CHAIRS_BY_HALL } from "./types";
import { moviesApi } from "../API/moviesApi";

export const getChairsByCinemaHall = (cinemaHallID) => async (dispatch) => {
  try {
    return moviesApi.getChairsByCinemaHall(cinemaHallID).then((chairs) => {
      dispatch({
        type: GET_CHAIRS_BY_HALL,
        payload: chairs,
      });
    });
  } catch (err) {}
};

export const getReservatedChairsByHall = (cinemaHallID, movieId) => async (dispatch) => {
  try {
    console.log("object")
    return moviesApi.getReservatedChairsByHall(cinemaHallID, movieId).then((chairs) => {
      dispatch({
        type: GET_RESERVATED_CHAIRS_BY_HALL,
        payload: chairs,
      });
    });
  } catch (err) {}
};

export const addSelectedSeat = (selectedSeat) => {
  return {
    type: ADD_SELECTED_SEAT,
    payload: selectedSeat,
  };
};

export const deleteSelectedSeat = (id) => {
  return {
    type: DELETE_SELECTED_SEAT,
    payload: id,
  };
};