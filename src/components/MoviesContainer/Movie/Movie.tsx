import React, {FC} from 'react';

import {IMovie} from "../../../interface/movieinterfaces";

import css from './Movie.module.css'
import {NavLink} from "react-router-dom";
import {RatingStars} from "../Stars/Rating";


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title, vote_average} = movie
    return (
        <div className={css.MovieBlock}>
            <NavLink to={`/movie/${id}`}> <img className={css.poster}
                                               src={"https://image.tmdb.org/t/p/w300" + poster_path}
                                               alt="img"/></NavLink>
            <div className={css.textBlock}>{original_title}</div>
            <div><RatingStars value={+vote_average}/></div>
        </div>
    );
};

export {Movie};