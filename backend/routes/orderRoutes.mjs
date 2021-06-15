import express from 'express'
const router = express.Router()
import { addOrder } from '../controllers/orderController.mjs'

router.route('/').post(addOrder)

export default router
