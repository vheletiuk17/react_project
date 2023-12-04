import exp from "constants";

export interface IMovie {
    adult: boolean
    backdrop_path: string
    genre_ids: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string
    popularity: number
    poster_path: string,
    release_data: string
    title: string
    video: boolean
    vote_average: string
    vote_count: number

}

export interface IMovies {
    total_pages: number
    page: number | null,
    results: IMovie[]
    prev: number | null,
    next: number | null,
}


export interface ISearch {
    title: string,
    page: number,
    results: IMovie[] | []
    prev: number | null,
    next: number | null,
}

