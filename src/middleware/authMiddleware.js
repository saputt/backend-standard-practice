const jwt = require("jsonwebtoken")
const { findUserById } = require("../repositories/userRepository")
const verifyToken = require("../utils/verifyToken")

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        return res.status(400).json({message : "Not authorized"})
    }

    try {
        const decoded = verifyToken(token, process.env.JWT_SECRET)

        const user = await findUserById(decoded.id)

        if(!user) {
            return res.status(400).json({message : "User no longer exist"})
        }

        req.user = user

        console.log(req.user)

        next()
    } catch (error) {
        return res.status(401).json({message : "Not authorized, token failed"})
    }
}

module.exports = {
    authMiddleware
}