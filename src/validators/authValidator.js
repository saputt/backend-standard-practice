const { z } = require("zod");

const registerValidator = z.object({
    name : z
        .string("Name must be a string")
        .min(1, "Name must be fill"),
    email : z
        .string("Email must be a string")
        .email({message : "Not a valid email"})
        .min(1, "Name must be fill"),
    password : z
        .string()
        .min(5, "Password length must be 5-15")
        .max(15, "Password length must be 5-15")
})

module.exports = {
    registerValidator
}