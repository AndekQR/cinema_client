import axios from "axios";
import { credentialsConstants } from "./credentials.constants";
import {userApi} from "../API/userApi";


const baseAddress = "http://localhost:8080";


export const axiosInstance = (requestInterceptor, responseInterceptor) => {
    let instance = axios.create({
        baseURL: baseAddress,
    });
    if (requestInterceptor) {
        instance.interceptors.request.use((config) => {
            const token = credentialsConstants.get().token;
            if (token) {
                config.headers["Authorization"] = "Bearer " + token;
            }
            config.headers["Content-Type"] = "application/json; charset=utf-8";
            return config;
        }, (error) => {
            Promise.reject(error);
        });
    }
    if (responseInterceptor) {
        instance.interceptors.response.use((response) => {
            return response;
        }, function (error) {
            const originalRequest = error.config;
            console.log("interceptor: " + originalRequest.url);
            console.log(error.response)
            if (error.response.status === 401 &&
                originalRequest.url === "/auth/refreshToken") {
                console.log("next 401 refresh: logout");
                credentialsConstants.remove();
                return Promise.reject(error);
            }
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                return userApi.refreshToken().then(() => {
                    const token = credentialsConstants.get().token;
                    originalRequest.headers["Authorization"] = "Bearer " + token;
                    return axios(originalRequest);
                });
            }
        });
    }
    return instance;
};