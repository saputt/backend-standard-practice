const { prisma } = require("../config/db");

const findWatchlist = async (userId, movieId) => await prisma.watchListItem.findUnique({
    where : { 
        userId_movieId : {
            userId,
            movieId
        }
    }
})

const findWatchlistById = async id => await prisma.watchListItem.findUnique({
    where : {id}
})

const deleteWatchlistById = async id => await prisma.watchListItem.delete({
    where : {id}
})

const createWatchList = async data => await prisma.watchListItem.create({
    data : {
        userId : data.userId,
        movieId : data.movieId,
        status : data.status,
        rating : data.rating,
        notes : data.notes
    }
})

module.exports = {
    findWatchlist,
    createWatchList,
    findWatchlistById,
    deleteWatchlistById
}