const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    const payload = {id}
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRED
    })
    return token
}

const generateRefreshToken = (id) => {
    const payload = {id}
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn : process.env.JWT_REFRESH_EXPIRED
    })
    return refreshToken
}

module.exports = {
    generateToken,
    generateRefreshToken
}