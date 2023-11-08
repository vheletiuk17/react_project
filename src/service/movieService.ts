import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovies} from "../interface/movieinterfaces";

const movieService = {
    getAll:(): IRes<IMovies> => axiosService.get(urls.movie.base)

}

export {
    movieService
}