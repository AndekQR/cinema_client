import axios from "axios";
import { LOGIN_SUCCESS } from "./types";

export const postLogin = ({ username, password }, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
          },
    }
    try {
        return await axios.post(`http://localhost:8080/auth/login`, { username, password }, config).then(res=> {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            history.push('/');
        });
    } catch (err) {}
}