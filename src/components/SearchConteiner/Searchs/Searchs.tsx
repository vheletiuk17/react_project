import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {SearchForm} from "../SearchForms";
import {Search} from "../Search";
import css from './Searchs.module.css'
import {movieService} from "../../../service";
import {IMovie} from "../../../interface/movieinterfaces";

const Searchs = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [params, setParams] = useSearchParams({page: '1', query: ''});

    const page: string = params.get('page') || '1';
    const query: string = params.get('query') || '';

    const searchMovies = (queryParam: string, pageParam: string) => {
        movieService.getMoviesSearchForm(queryParam, pageParam)
            .then(({data}) => {
                setMovies(data.results);
                setTotalPages(data.page);
            });
    };

    useEffect(() => {
        if (query) {
            searchMovies(query, page);
        } else {
            movieService.getTrendsMovies(query, page).then(({data}) => {
                setMovies(data.results);
                setTotalPages(data.page);
            })
        }
    }, [query, page]);


    const handlePagePrev = () => {
        setParams(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setParams(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        if (form && form.elements) {
            const query: string = (form.elements.namedItem('search') as HTMLInputElement)?.value || '';
            setParams(prev => {
                prev.set('query', query);
                prev.set('page', '1');
                return prev;
            });
        }
    }

    return (
        <div className={css.Content}>
            <div className={css.Form}>
                <SearchForm onSubmit={handleSearchSubmit}/>
            </div>
            <div className={css.searchContent}>
                {movies.map(trendsMovie => <Search key={trendsMovie.id} trendsMovie={trendsMovie}/>)}
            </div>
            <div className={css.Page}>
                <button onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                <span> Page: {page}</span>
                <button onClick={handlePageNext} disabled={page === `${totalPages}`}> &gt; </button>
            </div>
        </div>
    );
};

export {Searchs};