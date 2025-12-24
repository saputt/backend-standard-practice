const { createUser, findUserByEmail, updateRefreshToken, findUserByRefreshToken, findUserById } = require("../repositories/userRepository")
const { generateToken, generateRefreshToken } = require("../utils/generateToken")
const { hashPassword, comparePassword } = require("../utils/hashPassword")
const verifyToken = require("../utils/verifyToken")

const registerService = async data => {
    //check user exist
    const userExist = await findUserByEmail(data.email)

    //validation if user already exist
    if(userExist) throw new Error("Email ini sudah terdaftar, silakan gunakan email lain.")

    const newData = {
        ...data,
        password : await hashPassword(data.password)
    }

    return createUser(newData)
}

const loginService = async (data) => {
    //check user exist
    const user = await findUserByEmail(data.email)

    //validation if user doesnt exist
    if(!user) throw new Error("User not found")

    const correctPassword = await comparePassword(data.password, user.password)

    if(!correctPassword) throw new Error("Password incorrect")
    
    const accessToken = generateToken(user.id)
    const refreshToken = generateRefreshToken(user.id)

    console.log("accesstoken. " + accessToken)
    console.log("refreshtoken. " + refreshToken)

    await updateRefreshToken(user.id, refreshToken)

    const {password, ...userDetail} = user

    return {...userDetail, accessToken, refreshToken}
}

const refreshTokenService = async token => {
    if(!token) throw new Error("User not exist")

    verifyToken(token, process.env.JWT_REFRESH_SECRET)

    const userToken = await findUserByRefreshToken(token)

    if(!userToken) throw new Error("Invalid session")

    const newToken = generateToken(userToken.id)

    return newToken
}

const logoutService = async id => {
    return updateRefreshToken(id, null)
}

module.exports = {
    registerService,
    loginService,
    refreshTokenService,
    logoutService
}