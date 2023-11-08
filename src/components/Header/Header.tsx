import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
           <NavLink to={'movie'}>Movie</NavLink>
           <NavLink to={'genres'}>Genres</NavLink>
           <NavLink to={'movie'}>Search</NavLink>

        </div>
    );
};

export {Header};