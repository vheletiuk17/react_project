const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJjMjcwMzQ5YzMzYTFkYzNmNjI5MWY4YzBlNDI0MiIsInN1YiI6IjY1NGE4ZDNjNmJlYWVhMDEyYzkwNDFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IFAapPvqyWaXZEMGaVgh3XF5GyAR_ftLR-iB6n0jU8E'

const movie = '/discover/movie';

const urls ={
    movie:{
        base: movie

    }
}


export {
    baseURL,
    urls,
    API_KEY
}