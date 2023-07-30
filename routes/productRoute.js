const express = require('express')
const router = express.Router();
const Product = require('../models/productModel')
const {getProducts,getProductById,updateProduct,deleteProduct,addProduct} = require('../controllers/productController')

//get all saved data
router.get('/',getProducts)

//get by id
router.get('/:id', getProductById)

//add product
router.post('/',addProduct)

//update based on id and selected request
router.put('/:id',updateProduct)

//delete
router.delete('/:id', deleteProduct)

module.exports = router