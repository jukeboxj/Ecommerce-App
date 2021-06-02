import express from 'express'
import Product from '../models/productModel.mjs'

import { getProducts } from '../controllers/productController.mjs'
// import {
//     getProducts,
//     // getProductById,
//     // deleteProduct,
//     // createProduct,
//     // updateProduct,
//     // createProductReview,
//     // getTopProducts,
// } from '../controllers/productController'

const router = express.Router()

router.route('/').get(getProducts)
// .post(protect, admin, createProduct)

// router.route('/:id/reviews').post(protect, createProductReview)

// router.get('/top', getTopProducts)

// router
//     .route('/:id')
//     .get(getProductById)
//     .delete(protect, admin, deleteProduct)
//     .put(protect, admin, updateProduct)

export default router
