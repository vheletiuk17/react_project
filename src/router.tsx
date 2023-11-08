import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayouts} from "./Layouts/MainLayouts";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([

    {path:'' , element:<MainLayouts/>, children:[

            {index:true, element:<Navigate to={'movie'}/>},
            {path:'movie', element:<MoviesPage/>},
            {path:`movie/:id`, element:<MovieDetailsPage/>},
            {path:'genres', element:<GenresPage/>},
            {path:'search', element:<SearchPage/>},

        ]}


])
export {
    router
}