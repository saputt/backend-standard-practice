const { moviesCount, getMovies } = require("../repositories/moviesRepository")
const { addMovieService, removeMovieService, editMovieService } = require("../services/movieService")

const addMovie = async (req, res) => {
    try {
        await addMovieService(req.body, req.user.id)
        
        console.log(req)

        return res.status(200).json({
            status: "success",
            message : "Movie created" 
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }

}

const removeMovie = async (req, res) => {
    try {
        await removeMovieService(req.params.id, req.user.id)
        return res.status(200).json({
            status: "success",
            message : "Movie has been deleted" 
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

const editMovie = async (req, res) => {
    try {
        await editMovieService(req.params.id, req.user.id, req.body)
        return res.status(200).json({
            status: "success",
            message : "Movie has been updated" 
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

const countMovies = async (req, res) => {
    const movies = await moviesCount()
    console.log(movies)
}

const allMovies = async (req, res) => {
    const movies = await getMovies()
    console.log(movies)
}

module.exports = {
    addMovie,
    removeMovie,
    editMovie,
    countMovies,
    allMovies
}