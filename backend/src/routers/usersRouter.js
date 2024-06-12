const express = require('express');
const router = express.Router();
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/usersController');
const auth = require('../middlewares/authMiddleware');
const methodNotAllowed = require('../middlewares/methodNotAllowed');

/**
 * users
 * @route GET /users
 * @group users - Operations about users
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', auth, getUsers);

/**
 * /users/{id}
 * @route GET /users/{id}
 * @group users - Operations about users
 * @param {string} id.path.required - User ID
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', auth, getUserById);

/**
 * /users/{id}
 * @route PUT /users/{id}
 * @group users - Operations about users
 * @param {string} id.path.required - User ID
 * @param {string} name.body.required - User name
 * @param {string} email.body.required - User email
 * @param {string} password.body.required - User password
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', auth, updateUser);

/**
 * /users/{id}
 * @route DELETE /users/{id}
 * @group users - Operations about users
 * @param {string} id.path.required - User ID
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', auth, deleteUser);

router.all('/', methodNotAllowed);

module.exports = router;
