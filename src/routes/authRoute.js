const { Router } = require("express");
const { register, login, logout, refreshToken } = require("../controllers/authConstroller");
const validateRequest = require("../middleware/validateRequest");
const { registerValidator } = require("../validators/authValidator");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = Router()

router.post("/api/register", validateRequest(registerValidator), register)
router.post("/api/login", login)
router.post("/api/logout", authMiddleware, logout)
router.post("/api/refresh", refreshToken)

module.exports = router