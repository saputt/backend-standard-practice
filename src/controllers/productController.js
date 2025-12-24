const { validationResult, matchedData } = require("express-validator")
const { product } = require("../utils/constants")

const postProduct = (req, res) => {
    const result = validationResult(req)
    if(!result.isEmpty()) return res.status(400).send({error : result.array()})
    const data = matchedData(req)
    const findProduct = product.find((product) => product.idProduct === data.idProduct)
    if(findProduct) return res.status(202).send({msg : "product is already in database"})
    product.push(data)
    return res.status(200).send(data)
}

const getProduct = (req, res) => {
    console.log(req.session)
    console.log(req.session.id)
    return res.send(product)
}

const deleteProduct = (req, res) => {
    const {idProduct} = req.params
    const parseId = parseInt(idProduct)
    try {
        const findProduct = product.findIndex((product) => product.idProduct === parseId)
        console.log(findProduct)
        if(findProduct == -1) return res.sendStatus(401)
        product.splice(findProduct, 1)
        res.status(200).send({status : "success"})
    } catch (error) {
        res.sendStatus(400).send(error)
    }
}



module.exports = {
    postProduct,
    getProduct,
    deleteProduct
}