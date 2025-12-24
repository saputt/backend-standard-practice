const jwt = require("jsonwebtoken")

const verifyToken = (token, secret) => {
    if(!token) throw new Error("Token missing")
    return jwt.verify(token, secret)
}

module.exports = verifyToken