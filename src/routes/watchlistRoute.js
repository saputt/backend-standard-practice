const { Router } = require("express");
const { addToWatchList, removeFromWatchList } = require("../controllers/watchlistController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = Router()

router.use(authMiddleware)

router.post("/api/watchlist", addToWatchList)
router.delete("/api/watchlist/:id", removeFromWatchList)

module.exports = router