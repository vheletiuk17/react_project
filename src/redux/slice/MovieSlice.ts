import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interface/MovieInterfaces";
import {AxiosError} from "axios";
import {movieService} from "../../service";

interface IState {
    movies: IMovie[]
    page: null | number
    total_pages: number
    movieDetails: IMovie
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
    movieDetails: null
}
const getAll = createAsyncThunk<IMovies, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const setPage =createAction<number>('movie/Slice/setPage')

const  getById = createAsyncThunk<IMovie ,{id:number}>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} =await movieService.getById(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            return  rejectWithValue(err.response.data)
        }
    }
)
const MovieSlice = createSlice({
    name: 'MovieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.page = action.payload.page
                state.total_pages = action.payload.total_pages
            })
            .addCase(getById.fulfilled, (state, action) =>{
                state.movieDetails =action.payload
            })
            .addCase(setPage, (state, action) =>{
                state.page= action.payload
            })
})

const {reducer: movieReducers, actions} = MovieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    setPage
}
export {
    movieActions,
    movieReducers
}