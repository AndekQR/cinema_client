import {axiosInstance} from "../helpers/axiosInstance";

export const moviesApi = {
    getMoviesPage,
    makeReservation,
    getChairsByCinema,
    getChairsByCinemaHall,
    getCinemas,
    getCinema,
    getCinemaHallsByCinema,
    getCinemaHall,
    getAllGenres,
    getMoviesByGenre
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

/**
 *
 * @param chairIds {[number]} - lista z id foteli do zarezerwowania
 * @param movieId {number}
 * @param price {number}
 * @returns {Promise<AxiosResponse<any>>}
 */
function makeReservation(chairIds, movieId, price) {
    return axiosInstance(true, true)
        .post("/reservation", {
            chairIds, movieId, price
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.response)
        })
}

function getChairsByCinemaHall(cinemaHallId) {
    return axiosInstance(true, true)
        .get("/cinemaHall/"+cinemaHallId+"/chairs")
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getChairsByCinema(cinemaId) {
    return axiosInstance(true, true)
        .get("/cinema/"+cinemaId+"/chairs")
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getCinemas() {
    return axiosInstance(true, true)
        .get("/cinema")
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getCinema(cinemaId) {
    return axiosInstance(true, true)
        .get("/cinema/"+cinemaId)
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getCinemaHallsByCinema(cinemaId) {
    return axiosInstance(true, true)
        .get("/cinema/"+cinemaId+"/cinemaHall")
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getCinemaHall(cinemaHallId) {
    return axiosInstance(true, true)
        .get("/cinema/cinemaHall/"+cinemaHallId)
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getAllGenres() {
    return axiosInstance(true, true)
        .get("/genres")
        .then(response => response.data)
        .catch(error => console.log(error.response))
}

function getMoviesByGenre(genre) {
    return axiosInstance(true, true)
        .get("/cinema/"+genre)
        .then(response => response.data)
        .catch(error => console.log(error.response))
}