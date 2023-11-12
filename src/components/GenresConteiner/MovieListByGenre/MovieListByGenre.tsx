import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {NavLink, useParams, useSearchParams} from "react-router-dom";
import {IMovie} from "../../../interface/movieinterfaces";
import {genresService} from "../../../service/genresService";
import {urls} from "../../../constants/urls";
import css from './MovieListByGenre.module.css'

interface IProps extends PropsWithChildren{}

const MovieListByGenre: FC<IProps> = () => {
    const {genreId} = useParams<{ genreId: string }>();
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})

    const page: string = query.get('page') || '1';
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        genresService.getById(+`${genreId}`, +page).then(({data}) => {
                setMovies(data.results)
                setTotalPage(data.total_pages)
            }
        )
    }, [genreId, page]);


    const PrevPage = () => {
        setQuery(prev => {
                prev.set('page', `${+page - 1}`)
                return prev
            }
        )
    }
    const NextPage = () => {
        setQuery(prev => {
                prev.set('page', `${+page + 1}`)
                return prev
            }
        )
    }


    return (

        <div>
            <h2>Movies by Genre</h2>
            <div className={css.contentGenre}>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <NavLink to={`/movie/${movie.id}`}><img className={css.img}
                            src={`${urls.movie.imgUrl}${movie.poster_path}`} alt={movie.original_title}/></NavLink>
                        <h4>{movie.original_title}</h4>

                    </li>
                ))}
            </ul>
            <div>
                <button onClick={PrevPage} disabled={page === '1'}> &lt; </button>
                <span> Page: {page}</span>
                <button onClick={NextPage} disabled={page === `${totalPage}`}> &gt; </button>
            </div>
            </div>
        </div>

    );
}
export {MovieListByGenre}