// src/routers/boatsRouter.js
const express = require('express');
const router = express.Router();
const { createBoat, getBoats, getBoatById, updateBoat, deleteBoat } = require('../controllers/boatsController');
const auth = require('../middlewares/authMiddleware');
const methodNotAllowed = require('../middlewares/methodNotAllowed');

/**
 * @route POST /boats
 * @group boats - Operations about boats
 * @param {string} name.body.required - Boat name
 * @param {string} type.body.required - Boat type
 * @param {string} description.body.required - Boat description
 * @param {number} price.body.required - Boat price
 * @returns {object} 200 - An array of boat info
 * @returns {Error}  default - Unexpected error
 */
router.post('/',createBoat);
//router.post('/', auth, createBoat);

/**
 * @route GET /boats
 * @group boats - Operations about boats
 * @returns {object} 200 - An array of boat info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', getBoats);

/**
 * @route GET /boats/{id}
 * @group boats - Operations about boats
 * @param {string} id.path.required - Boat ID
 * @returns {object} 200 - An array of boat info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', getBoatById);

/**
 * @route PUT /boats/{id}
 * @group boats - Operations about boats
 * @param {string} id.path.required - Boat ID
 * @param {string} name.body.required - Boat name
 * @param {string} type.body.required - Boat type
 * @param {string} description.body.required - Boat description
 * @param {number} price.body.required - Boat price
 * @returns {object} 200 - An array of boat info
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', auth, updateBoat);

/**
 * @route DELETE /boats/{id}
 * @group boats - Operations about boats
 * @param {string} id.path.required - Boat ID
 * @returns {object} 200 - An array of boat info
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', auth, deleteBoat);

router.all('/', methodNotAllowed);

module.exports = router;
