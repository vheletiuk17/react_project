import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants";
import {IMovie, IMovies, ISearch} from "../interface/MovieInterfaces";

const movieService = {
    getAll: (page:number): IRes<IMovies> => axiosService.get(urls.movie.base, {params: {page}}),
    getById: (id: number): IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    getMoviesSearchForm: (params: { query: string, page: number }): IRes<IMovies> => axiosService.get(urls.movie.searchMovies(), { params: { query: params.query, page: params.page } }),
    getTrendsMovies: (query: string, page = '1'): IRes<ISearch> => axiosService.get(urls.movie.trends(), {params: {page, query}})

}

export {
    movieService
}