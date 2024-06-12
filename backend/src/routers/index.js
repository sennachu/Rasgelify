// src/routers/index.js
const express = require('express');
const boatsRouter = require('./boatsRouter');
const usersRouter = require('./usersRouter');
const ordersRouter = require('./ordersRouter');
const authRouter = require('./authRouter');
const reservationsRouter = require('./reservationsRouter');
const router = express.Router();

router.use('/boats', boatsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/auth', authRouter);
router.use('/reservations', reservationsRouter);

module.exports = router;
