const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')

const { getProducts } = require('../controllers/productController')
// import {
//     getProducts,
//     // getProductById,
//     // deleteProduct,
//     // createProduct,
//     // updateProduct,
//     // createProductReview,
//     // getTopProducts,
// } from '../controllers/productController'

router.route('/').get(async (req, res) => {
    const keyword = req.query.keyword
        ? {
              name: {
                  $regex: req.query.keyword,
                  $options: 'i',
              },
          }
        : {}

    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword })

    res.json({ products })
})
// .post(protect, admin, createProduct)

// router.route('/:id/reviews').post(protect, createProductReview)

// router.get('/top', getTopProducts)

// router
//     .route('/:id')
//     .get(getProductById)
//     .delete(protect, admin, deleteProduct)
//     .put(protect, admin, updateProduct)

module.exports = router
