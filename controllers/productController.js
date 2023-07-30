const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
const getProducts =  async(req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product)

    } catch (error) {
        res.status(404);
        throw new Error(`cannot find any product with id ${id}`);
    }
}

const getProductById = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(404);
        throw new Error(`cannot find any product with id ${id}`);

    }
})

const updateProduct = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if (!product) {
            res.status(404);
            throw new Error(`cannot find any product with id ${id}`);
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteProduct = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404);
            throw new Error(`cannot find any product with id ${id}`);
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const addProduct = asyncHandler(async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts, getProductById,updateProduct,deleteProduct,addProduct
}