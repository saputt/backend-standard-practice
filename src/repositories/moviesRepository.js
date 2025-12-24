const { id } = require("zod/locales");
const { prisma } = require("../config/db");

const findMovieById = async (id) => await prisma.movie.findUnique({
    where : {id}
})

const createMovie = async data => await prisma.movie.create({
    data : {
        title : data.title,
        overview : data.overview,
        releaseYear : data.releaseYear,
        genres : data.genres,
        runtime : data.runtime,
        posterUrl : data.posterUrl,
        createdBy : data.createdBy
    }
})

const deleteMovie = async id => await prisma.movie.delete({
    where : {id}
})

const updateMovie = async (id, updateData) => await prisma.movie.update({
    where : {id},
    data : updateData
})

const moviesCount = async () => await prisma.movie.count()

const getMovies = async () => await prisma.movie.findMany({
    take : 5
})

module.exports = {
    findMovieById,
    createMovie,
    deleteMovie,
    updateMovie,
    moviesCount,
    getMovies
}