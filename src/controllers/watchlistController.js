const { WatchListService, RemoveWatchListService } = require("../services/watchlistService")

const addToWatchList = async (req, res) => {
    try {
        const watchlist = await WatchListService(req.body)
        console.log(watchlist)
        return res.status(200).json({
            status: "success",
            data: {
                watchlist
            }
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

const removeFromWatchList = async (req, res) => {
    try {
        await RemoveWatchListService(req.params.id, req.user.id)
        return res.status(200).json({
            status: "success",
            message : "Movie removed from watchlist"
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

module.exports = {
    addToWatchList,
    removeFromWatchList
}