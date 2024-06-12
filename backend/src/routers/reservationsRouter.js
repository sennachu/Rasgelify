// src/routers/reservationRouter.js
const express = require('express');
const router = express.Router();
const { createReservation, getReservations, getReservationById, updateReservation, deleteReservation } = require('../controllers/reservationsController'); // Örnek olarak reservationController eklenmeli
const auth = require('../middlewares/authMiddleware');
const methodNotAllowed = require('../middlewares/methodNotAllowed');

/**
 * @route POST /reservations
 * @group reservations - Operations about reservations
 * @param {string} userId.body.required - User ID
 * @param {string} boatId.body.required - Boat ID
 * @param {string} startDate.body.required - Reservation start date
 * @param {string} endDate.body.required - Reservation end date
 * @returns {object} 200 - An array of reservation info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', auth, createReservation);

/**
 * @route GET /reservations
 * @group reservations - Operations about reservations
 * @returns {object} 200 - An array of reservation info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', auth, getReservations);

/**
 * @route GET /reservations/{id}
 * @group reservations - Operations about reservations
 * @param {string} id.path.required - Reservation ID
 * @returns {object} 200 - An array of reservation info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', auth, getReservationById);

/**
 * @route PUT /reservations/{id}
 * @group reservations - Operations about reservations
 * @param {string} id.path.required - Reservation ID
 * @param {string} userId.body.required - User ID
 * @param {string} boatId.body.required - Boat ID
 * @param {string} startDate.body.required - Reservation start date
 * @param {string} endDate.body.required - Reservation end date
 * @returns {object} 200 - An array of reservation info
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', auth, updateReservation);

/**
 * @route DELETE /reservations/{id}
 * @group reservations - Operations about reservations
 * @param {string} id.path.required - Reservation ID
 * @returns {object} 200 - An array of reservation info
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', auth, deleteReservation);

router.all('/', methodNotAllowed);

module.exports = router;
