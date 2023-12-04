import {configureStore} from "@reduxjs/toolkit";
import {movieReducers} from "./slice/MovieSlice";
import {genreReducer} from "./slice/GenreSlice";
import {searchReducer} from "./slice/SearchSlice";

const store = configureStore({
    reducer:{
        movie:movieReducers,
        genres:genreReducer,
        search:searchReducer
    }
})

export {
    store
}