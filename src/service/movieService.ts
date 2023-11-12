import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants";
import {IMovie, IMovies, ISearch} from "../interface/movieinterfaces";

const movieService = {
    getAll: (page = '1'): IRes<IMovies> => axiosService.get(urls.movie.base, {params: {page}}),
    getById: (id: number): IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    getMoviesSearchForm: (query: string, page: string): IRes<ISearch> => axiosService.get(urls.movie.searchMovies(), {params: {page, query}}),
    getTrendsMovies: (query: string, page = '1'): IRes<ISearch> => axiosService.get(urls.movie.trends(), {params: {page, query}})

}

export {
    movieService
}