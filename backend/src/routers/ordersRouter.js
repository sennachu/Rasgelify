const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/ordersController');
const auth = require('../middlewares/authMiddleware');
const methodNotAllowed = require('../middlewares/methodNotAllowed');

/**
 * orders
 * @route POST /orders
 * @group orders - Operations about orders
 * @param {string} name.body.required - Order name
 * @param {number} amount.body.required - Order amount
 * @returns {object} 200 - An array of order info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', auth, createOrder);

/**
 * orders
 * @route GET /orders
 * @group orders - Operations about orders
 * @returns {object} 200 - An array of order info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', auth, getOrders);

/**
 * orders/{id}
 * @route GET /orders/{id}
 * @group orders - Operations about orders
 * @param {string} id.path.required - Order ID
 * @returns {object} 200 - An array of order info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', auth, getOrderById);

/**
 * /orders/{id}
 * @route PUT /orders/{id}
 * @group orders - Operations about orders
 * @param {string} id.path.required - Order ID
 * @param {string} name.body.required - Order name
 * @param {number} amount.body.required - Order amount
 * @returns {object} 200 - An array of order info
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', auth, updateOrder);

/**
 * /orders/{id}
 * @route DELETE /orders/{id}
 * @group orders - Operations about orders
 * @param {string} id.path.required - Order ID
 * @returns {object} 200 - An array of order info
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', auth, deleteOrder);

router.all('/', methodNotAllowed);

module.exports = router;
