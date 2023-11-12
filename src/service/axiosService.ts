import axios, {AxiosResponse} from "axios";

import {API_KEY, baseURL} from "../constants";

export type IRes<T> = Promise<AxiosResponse<T>>
const axiosService = axios.create({baseURL, headers: {Authorization: API_KEY}})

export {
    axiosService
}