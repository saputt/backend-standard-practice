const { Router } = require("express");
const { checkSchema } = require("express-validator");
const { productValidationSchema } = require("../utils/validationSchema");
const { postProduct, getProduct, deleteProduct } = require("../controllers/productController");

const router = Router()

router.post('/api/product', checkSchema(productValidationSchema), postProduct)
router.get('/api/products', getProduct)
router.delete('/api/product/:idProduct', deleteProduct)

module.exports = router