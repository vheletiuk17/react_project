import React, {useEffect, useState} from 'react';

import {IMovie} from "../../../interface/movieinterfaces";
import {movieService} from "../../../service/movieService";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'



const Movies = () => {

    const [movies, setMovies] = useState<{page: number, results: IMovie[]}>({page: null, results: []});

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies({page: data.page, results: data.results}));
    }, []);
    console.log(movies);
    return (
        <div className={css.Movies}>
            {movies.results.map(movie =><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};