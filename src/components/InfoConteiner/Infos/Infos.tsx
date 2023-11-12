import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";


import {movieService} from "../../../service/movieService";
import css from './MoviesInfos.module.css'
import {Info} from "../Info";
import {IMovie} from "../../../interface/movieinterfaces";


const Infos = () => {

    const [infos, setInfos] = useState<IMovie | null>(null)
    const {id} = useParams()

    useEffect(() => {
        movieService.getById(+id).then(({data}) => setInfos(data))
    }, [id]);
    return (

        <div className={css.infoContent}>
            {infos && <Info info={infos} key={infos.id}/>}

        </div>
    );
};

export {Infos};