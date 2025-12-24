const { Router } = require("express");
const { removeUser, getUser } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = Router()

router.use(authMiddleware)

router.delete("/api/user", removeUser)
router.get("/api/user/:id", getUser)

module.exports = router