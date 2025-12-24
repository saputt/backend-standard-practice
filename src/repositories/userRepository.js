const { prisma } = require("../config/db")

const createUser = async data => await prisma.user.create({
    data : {
        name : data.name,
        email : data.email,
        password : data.password
    }
})

const findUserByEmail = async (email) => await prisma.user.findUnique({
    where : {email}        
})

const findUserById = async (id) => await prisma.user.findUnique({
    where : {id},      
})

const findUserByIdNameOnly = async (id) => await prisma.user.findUnique({
    where : {id},
    select : {
        id : false,
        name : true,
        email : true,
        password : false,
        refreshToken : false
    }
})

const deleteUser = async id => await prisma.user.delete({
    where : {id}
})

const updateRefreshToken = async (userId, token) => await prisma.user.update({
    where : {id : userId},
    data : {refreshToken : token}
})

const findUserByRefreshToken = async (token) => await prisma.user.findUnique({
    where : {refreshToken : token}
})

const findUserWithMovies = async (id) => await prisma.user.findUnique({
    where : {id},
    include : {
        movies : true
    }
})

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    deleteUser,
    updateRefreshToken,
    findUserByRefreshToken,
    findUserWithMovies,
    findUserByIdNameOnly
}