import React, {useEffect} from 'react';

import {Genre} from "../genre";
import css from './Genres.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {genreActions} from "../../../redux/slice/GenreSlice";

const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.Father}>
            <div className={css.Genres}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};
