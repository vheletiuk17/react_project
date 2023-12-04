import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interface/MovieInterfaces";
import {IGenre, IGenres} from "../../interface/GenresInterfaces";
import {genresService} from "../../service";
import {AxiosError} from "axios";


interface IState {
    genres: IGenre[]
    page: null | number
    movies: IMovie[]
}

const initialState: IState = {
    movies: [],
    page: null,
    genres: []

}

const getAll=createAsyncThunk<IGenres,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await genresService.getAll()
            return data
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

const getById=createAsyncThunk<IMovies,{id:number,page:number}>(
    'genreSlice/getById',
    async ({id,page},{rejectWithValue})=>{
        try {
            const {data}=await genresService.getById(id,page)
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }

)

const setPage = createAction<number>('genreSlice/setPage');


const GenreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder.addCase(getAll.fulfilled,(state, action)=>{
            state.genres=action.payload.genres
        })
            .addCase(getById.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.page=action.payload.page
            })
            .addCase(setPage,(state, action)=>{
                state.page=action.payload
            })
});

const {reducer:genreReducer,actions}=GenreSlice

const genreActions={
    ...actions,
    getAll,
    getById,
    setPage
}

export {
    genreReducer,
    genreActions
}