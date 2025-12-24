const { findUserWithMovies, findUserById, findUserByIdNameOnly } = require("../repositories/userRepository")
const { removeUserService } = require("../services/userService")

const removeUser = async (req, res) => {
    try {
        await removeUserService(req.user.id)
        return res.status(200).json({
            status: "success",
            message : "User has been deleted" 
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            error : error.message
        })
    }
}

const getUser = async (req, res) => {
    const user = await findUserByIdNameOnly(req.user.id)
    console.log(user)
}

module.exports = {
    removeUser,
    getUser
}