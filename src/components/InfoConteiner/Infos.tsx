import React, {useEffect, useState} from 'react';
import {infoService} from "../../service/infoService";
import {useParams} from "react-router-dom";
import {Info} from "./Info";
import {IInfo} from "../../interface/infoInterface";


const Infos = () => {

    const [infos, setInfos] = useState<IInfo>([])
    const {id} = useParams()

    useEffect(() => {
        infoService.getById(+id).then(({data}) =>setInfos(data))
    }, [id]);
    return (
        <div>
            {infos.map(info =><Info key={info.id} info={info}/>)}
        </div>
    );
};

export {Infos};