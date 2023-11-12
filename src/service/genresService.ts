import {IGenres} from "../interface/genresInterfaces";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/";
import {IMovies} from "../interface/movieinterfaces";

const genresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genres.base),
    getById: (genreId: number, page: number): IRes<IMovies> => axiosService.get(urls.genres.byId(+genreId), {params: {page}})
}

export {
    genresService
}
