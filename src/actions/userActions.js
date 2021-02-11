import { LOGIN_SUCCESS } from "./types";
import { userApi } from "../API/userApi";
import { moviesApi } from "../API/moviesApi";

export const postLogin = ({ username, password }, history) => async (
  dispatch
) => {

  try {
    return userApi.login(username, password).then((userData) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userData,
      });
      history.push("/");
    });

  } catch (err) {}
};

export const makeReservation = ({ chairIds, moveId, price }, history) => async (
    dispatch
  ) => {
    try {
      return moviesApi.makeReservation(chairIds, moveId, price).then((response) => {
        console.log(response);
        history.push("/");
      });

    } catch (err) {}
  };

  
 
