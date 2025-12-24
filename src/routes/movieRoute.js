const { Router } = require("express");
const { addMovie, removeMovie, editMovie, countMovies, allMovies } = require("../controllers/movieController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = Router()

router.use(authMiddleware)

router.post("/api/movie", addMovie)
router.delete("/api/movie/:id", removeMovie)
router.patch("/api/movie/:id", editMovie)
router.get("/api/movies/count", countMovies)
router.get("/api/movies", allMovies)

module.exports = router