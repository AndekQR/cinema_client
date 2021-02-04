import {axiosInstance} from "../helpers/axiosInstance";

export const moviesApi = {
    getMoviesPage
}


function getMoviesPage(pageNumber,
                       pageSize,
                       sortBy,
                       sortOrder,
                       searchQuery) {
    return axiosInstance(true, true)
        .get("/movies", {
            params: {
                pageNumber,
                pageSize,
                sortBy,
                sortOrder,
                searchQuery
            }
        }).then((response) => {
            console.log("then")
            console.log(response)
            if (response.status === 200) {
                return response.data
            }
        })
        .catch((error) => {
            console.log("getMoviesPage")
            console.log(error.response);
            return Promise.reject(error)
        })

}