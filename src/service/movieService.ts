import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovies} from "../interface/movieinterfaces";

const movieService = {
    getAll:(page='1'): IRes<IMovies> => axiosService.get(urls.movie.base, {params:{page}})

}

export {
    movieService
}