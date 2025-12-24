const { findUserById, deleteUser } = require("../repositories/userRepository")

const removeUserService = async id => {
    const userExist = await findUserById(id)

    if(!userExist) throw new Error("User doesnt exist")

    return deleteUser(id)
}

module.exports = {
    removeUserService
}