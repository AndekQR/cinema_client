import { LOGIN_SUCCESS } from "./types";
import { userApi } from "../API/userApi";
import { moviesApi } from "../API/moviesApi";

export const postLogin = ({ username, password }, history) => async (
  dispatch
) => {
  // const config = {
  //     headers: {
  //         'Content-Type': 'application/json'
  //       },
  // }
  try {
    return userApi.login(username, password).then((userData) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userData,
      });
      history.push("/");
    });
    // return await axios.post(`http://localhost:8080/auth/login`, { username, password }, config).then(res=> {
    //     dispatch({
    //         type: LOGIN_SUCCESS,
    //         payload: res.data
    //     });
    //     history.push('/');
    // });
  } catch (err) {}
};

export const makeReservation = ({ chairIds, movieId, price }, history) => async (
    dispatch
  ) => {
    try {
      return moviesApi.makeReservation(chairIds, movieId, price).then((response) => {
        console.log(response);
        history.push("/");
      });

    } catch (err) {}
  };

  
 
