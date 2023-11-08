export interface IMovie{
    id: number,
    original_title: string,
    poster_path: string,
    vote_average: number,

}
export interface IMovies{
   page:number | null,
    results:IMovie[]
}

