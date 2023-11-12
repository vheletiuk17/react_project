import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./Layouts";
import {MoviesPage,} from "./pages/MoviesPage";
import {MovieDetailsPage} from "./pages/MovieDeatailsPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {MovieListByGenre} from "./components/GenresConteiner/MovieListByGenre";
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