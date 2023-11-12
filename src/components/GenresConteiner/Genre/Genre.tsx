import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../../interface/genresInterfaces";
import css from './Genre.module.css'

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <div className={css.Genre}>

            <NavLink className={css.GenreName} to={`${id}`}>{name}</NavLink>
        </div>
    );
};

export {Genre};