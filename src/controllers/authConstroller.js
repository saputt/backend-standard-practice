const { prisma } = require("../config/db")
const { registerService, loginService, logoutService, refreshTokenService } = require("../services/authService")

const register = async (req, res) => {
    try {
        const user = await registerService(req.body, req.user.id)
    
        return res.status(200).json({
            status: "success",
            data: {
                user: {
                    id : user.id,
                    name : user.name,
                    email : user.email
                }
            }
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }

}

const login = async (req, res) => {
    try {
        const user = await loginService(req.body)

        res.cookie("refreshToken", user.refreshToken, {
            httpOnly : true,
            secure : process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 * 7
        })

        return res.status(200).json({
            status: "success",
            data: {
                user: {
                    id : user.id,
                    email : user.email
                }
            },
            accessToken: user.accessToken
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

const refreshToken = async (req, res) => {
    try {
        const newToken = await refreshTokenService(req.cookies.refreshToken)
        console.log(newToken)
        return res.status(200).json({
            status: "success",
            accessToken: newToken
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
} 

const logout = async (req, res) => {
    try {
        console.log(req.user)
        await logoutService(req.user.id)
        res.clearCookie("refreshToken")
        return res.status(200).json({
            status: "success",
            message: "logout successfully"
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

module.exports = {
    register,
    login,
    logout,
    refreshToken
}