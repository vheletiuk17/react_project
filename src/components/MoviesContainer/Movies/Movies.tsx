import React, {useEffect, useState} from 'react';

import {IMovie} from "../../../interface/movieinterfaces";
import {movieService} from "../../../service/movieService";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'
import {useSearchParams} from "react-router-dom";



const Movies = () => {

    const [movies, setMovies] = useState<{page: number | null, results: IMovie[]}>({page: null, results: []});
    const [query, setQuery] = useSearchParams({page: '1'});

    const page:string = query.get('page') || '1';

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => {
            setMovies({page: data.page, results: data.results})

        });
    }, [page]);



    const PrevPage =() =>{
        setQuery(prev => {
                prev.set('page', `${+page - 1}`)
                return prev
            }
        )}
    const NextPage =() =>{
        setQuery(prev => {
                prev.set('page', `${+page + 1}`)
                return prev
            }
        )}
    return (
        <div className={css.background}>

        <div className={css.Movies}>
            {movies.results.map(movie =><Movie key={movie.id} movie={movie}/>)}
            <button  onClick={PrevPage} disabled={page === '1'}>prev</button>
            <button  onClick={NextPage}>next</button>
        </div>

        </div>
    );
};

export {Movies};