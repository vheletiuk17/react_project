import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import css from './Search.module.css'
import {urls} from "../../../constants";
import {IMovie} from "../../../interface/MovieInterfaces";
import {RatingStars} from "../../moviesContainer/stars/Rating";



interface IProps {
    trendsMovie: IMovie

}

const Search: FC<IProps> = ({trendsMovie}) => {
    const {id, poster_path, original_title, vote_average} = trendsMovie;

    const imgMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : ''
    return (
        <div className={css.MovieTrendsBlock}>
            <NavLink to={`/movie/${id}`}> <img className={css.poster} src={imgMovie} alt={original_title}/></NavLink>
            <div>{original_title}</div>
            <div><RatingStars value={+vote_average}/></div>
        </div>
    );
};

export {Search};
