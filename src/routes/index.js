const { Router } = require("express");
const productRoute = require("./productRoute")
const authRoute = require("./authRoute")
const watchlistRoute = require("./watchlistRoute")
const movieRoute = require("./movieRoute")
const userRoute = require("./userRoute")

const router = Router()

router.use(productRoute)
router.use(authRoute)
router.use(watchlistRoute)
router.use(movieRoute)
router.use(userRoute)

module.exports = router