import React, {useEffect, } from 'react';

import {Movie} from "../movie";
import css from './Movies.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slice/MovieSlice";



const Movies = () => {
    const {movies,page,total_pages} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(movieActions.getAll({page}))
    }, [page,dispatch]);


    const PrevPage = () => {
       dispatch(movieActions.setPage(page-1))
    }
    const NextPage = () => {
        dispatch(movieActions.setPage(page+1))
    }
    return (
        <div className={css.background}>

            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                <div className={css.Pages}>
                    <button className={css.prev} onClick={PrevPage} disabled={page === 1}>prev</button>Page:{page}
                    <button className={css.next} onClick={NextPage} disabled={page>total_pages}>next</button>
                </div>
            </div>

        </div>
    );
};

export {Movies};