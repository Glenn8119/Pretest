
export const setSelectedMovies = (movies) => {
    return {
        type: "FETCH_MOVIES",
        payload: movies
    }
}