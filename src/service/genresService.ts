import {IGenres} from "../interface/genresInterfaces";
import {axiosService, IRes} from "./axiosService";

import {urls} from "../constants/urls";

const genresService ={
getAll:(): IRes<IGenres> => axiosService.get(urls.genres.base)
}

export {
    genresService
}
