import React, {FC} from 'react';

import {IGenre} from "../../../interface/genresInterfaces";
import css from './Genre.module.css'

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {name} = genre
    return (
        <div className={css.GenreName}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};