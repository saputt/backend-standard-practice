const { findMovieById } = require("../repositories/moviesRepository")
const { findWatchlist, createWatchList, findWatchlistById, deleteWatchlistById } = require("../repositories/watchlistRepository")

const WatchListService = async data => {
    const {movieId, userId, status, rating, notes} = data

    //check movie exist or no
    const movieExist = await findMovieById(movieId)

    //if movie doesnt exist
    if(!movieExist) throw new Error("Movie doesnt exist")

    //check movie is already in watchlist or no
    const watchlistExist = await findWatchlist(userId, movieId)

    //if movie already exist
    if(watchlistExist) throw new Error("Movie is already in watchlist")

    //data watchlist
    const dataWatchlist = {
        userId,
        movieId,
        status : status || "PLANNED",
        rating,
        notes : notes || ""
    }

    //add data wathclist
    return createWatchList(dataWatchlist)
}

const RemoveWatchListService = async (id, userId) => {
    //check watchlist exist or no
    const watchListExist = await findWatchlistById(id)

    //if watchlist doesnt exist
    if(!watchListExist) throw new Error("Watchlist doesnt exist")

    if(watchListExist.userId !== userId) throw new Error("Your cannot delete this watchlist")

    //remove data from wathclist
    return deleteWatchlistById(id)
}

module.exports = {
    WatchListService,
    RemoveWatchListService
}