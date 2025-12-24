const { createMovie, findMovieById, deleteMovie, updateMovie } = require("../repositories/moviesRepository")
const { findUserById } = require("../repositories/userRepository")

const addMovieService = async (data, idUser) => {
    const {title, overview, releaseYear, genres, runtime, posterUrl, createdBy} = data

    const newData = {
        title,
        overview : overview || "",
        releaseYear,
        genres,
        runtime : runtime || 0,
        posterUrl : posterUrl || "",
        createdBy : createdBy || idUser
    }

    return createMovie(newData)
}

const removeMovieService = async (movieId, userId) => {
    const movieExist = await findMovieById(movieId)
    
    if(!movieExist) throw new Error("Movie doesnt exist")
    
    if(movieExist.createdBy !== userId) throw new Error("You cannot remove this movie, not authorized")

    return deleteMovie(movieId)
}

const editMovieService = async (movieId, userId, data) => {
    const movieExist = await findMovieById(movieId)

    if(!movieExist) throw new Error("Movie doesnt exist")

    if(movieExist.createdBy !== userId) throw new Error("You cannot remove this movie, not authorized")

    return updateMovie(movieId, data)
}

module.exports = {
    addMovieService,
    removeMovieService,
    editMovieService
}