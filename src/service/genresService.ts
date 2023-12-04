import {IGenres} from "../interface/GenresInterfaces";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/";
import {IMovies} from "../interface/MovieInterfaces";

const genresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genres.base),
    getById: (genreId: number, page: number): IRes<IMovies> => axiosService.get(urls.genres.byId(+genreId), {params: {page}})
}

export {
    genresService
}
