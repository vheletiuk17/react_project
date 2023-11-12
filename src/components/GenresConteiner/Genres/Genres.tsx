import React, {useEffect, useState} from 'react';

import {genresService} from "../../../service/genresService";
import {IGenre} from "../../../interface/genresInterfaces";
import {Genre} from "../Genre";
import css from './Genres.module.css'

const Genres = () => {

    const [genres, setGenres] = useState<{ genres: IGenre[] }>({genres: []})


    useEffect(() => {
        genresService.getAll().then(({data}) => setGenres({genres: data.genres}))
    }, []);
    return (
        <div className={css.Father}>
            <div className={css.Genres}>
                {genres.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};
