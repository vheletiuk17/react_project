import {axiosService, IRes} from "./axiosService";
import {IInfo} from "../interface/infoInterface";
import {urls} from "../constants/urls";

const infoService ={
    getById:(id:number): IRes<IInfo> =>axiosService.get(urls.info.byId(id))
}


export {
    infoService
}