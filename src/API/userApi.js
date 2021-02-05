import {credentialsConstants} from "../helpers/credentials.constants";
import {axiosInstance} from "../helpers/axiosInstance";

export const userApi = {
    refreshToken,
    login,
    logout,
    register
}

function login(username, password) {
    return axiosInstance(false, false)
        .post("/auth/login", {
            username,
            password,
        })
        .then((credentials) => {
            console.log("login");
            const {token, refreshToken, expires, user} = credentials.data;
            credentialsConstants.set({token, refreshToken, expires, user});
            return user;
        });
}

function refreshToken() {
    return axiosInstance(false, true)
        .post("/auth/refreshToken", {refreshToken: credentialsConstants.get().refreshToken})
        .then((response) => {
            if (response.status === 200) {
                const {token, refreshToken, expires, user} = response.data;
                console.log("Zaktualizowano na: " + JSON.stringify(response.data.token));
                credentialsConstants.set({token, refreshToken, expires, user});
            }
        })
        .catch((error) => {
            let er = JSON.parse(JSON.stringify(error));
            console.log(er);
        });
}

function logout() {
    return axiosInstance(true, true)
        .get("auth/logout")
        .then(_ => {
            credentialsConstants.remove()
        })
}

function register(firstName, lastName, email, password) {
    return axiosInstance(false, false)
        .post("/auth/register", {firstName, lastName, email, password})
        .catch(error => {
            console.log(error.response)
        })
}