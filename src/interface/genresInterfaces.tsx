export interface IGenre {
    id: number
    name: string
    genre_ids: number[]
    total_pages: number

}

export interface IGenres {
    genres: IGenre[]
    results: IGenre[]
}