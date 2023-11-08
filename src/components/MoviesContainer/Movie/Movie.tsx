import React, {FC} from 'react';

import {IMovie} from "../../../interface/movieinterfaces";



interface IProps {
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {poster_path, original_title,vote_average} = movie
    return (
        <div>
            <img className={'poster'} src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="img"/>
            <div>{original_title}</div>
            <div>{vote_average}</div>
        </div>
    );
};

export {Movie};