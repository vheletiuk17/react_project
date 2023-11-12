import React, {FC} from 'react';

import {IMovie} from "../../../interface/movieinterfaces";
import {urls} from "../../../constants/urls";
import css from './MovieInfo.module.css'
import {RatingStars} from "../../MoviesContainer/Stars/Rating";

interface IProps {
    info: IMovie
}

const Info: FC<IProps> = ({info}) => {
    const {poster_path, original_title, overview, vote_average} = info;

    const imgMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : ''


    return (
        <div className={css.content}>
            <img className={css.posterPath} src={imgMovie} alt={original_title}/>
            <div className={css.info}>
                <div className={css.title}>Title:{original_title}</div>
                <p>Overview:</p>
                <div className={css.overview}>{overview}</div>
                <div className={css.stars}><p>Ranting</p>: <RatingStars value={+vote_average}/></div>
            </div>
        </div>
    );
};

export {Info};