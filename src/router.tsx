import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {MoviesPage,} from "./pages/moviesPage";
import {MovieDetailsPage} from "./pages/movieDeatailsPage";
import {GenresPage} from "./pages/genresPage";
import {SearchPage} from "./pages/searchPage";
import {MovieListByGenre} from "./components/genresConteiner/movieListByGenre";
import './style.index.css'

const router = createBrowserRouter([

    {
        path: '', element: <MainLayouts/>, children: [

            {index: true, element: <Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviesPage/>},
            {path: `movie/:id`, element: <MovieDetailsPage/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'search', element: <SearchPage/>},
            {path: 'genres/:genreId', element: <MovieListByGenre/>}

        ]
    }


])
export {
    router
}