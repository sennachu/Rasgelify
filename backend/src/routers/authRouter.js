const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');


/**
 * register
 * @route POST /auth/register
 * @group auth - Operations about auth
 * @returns {object} 200 - An array of example info
 * @returns {Error}  default - Unexpected error
 */
router.post('/register', register);

/**
 * login
 * @route POST /auth/login
 * @group auth - Operations about auth
 * @returns {object} 200 - An array of example info
 * @returns {Error}  default - Unexpected error
 */
router.post('/login', login);

module.exports = router;

