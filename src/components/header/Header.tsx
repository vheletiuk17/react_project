import React, {FC, useState} from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header: FC = () => {
    const [, setLightMode] = useState(false)
    const toggleMode = () => {
        setLightMode((prevMode) => !prevMode);
        document.body.classList.toggle('lightMode')
    }
    return (
        <div>

            <div className={css.Header}>
                <div className={css.MovieVH}><h2>MovieDB</h2></div>
                <div className={css.Nav}>
                    <NavLink to={'movie'}>Movie</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                    <NavLink to={'search'}>Search</NavLink>
                </div>
                <button className={css.mode} onClick={toggleMode}>Theme Mode</button>
                <div className={css.Login}>
                    <img className={css.loginIcon} src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt=""/>
                    <p>Aveniu17</p>
                </div>

            </div>
        </div>
    );
};

export {Header};