const express = require('express');

const customerRouter = require('./customers');
const supplierRouter = require('./suppliers');
const loginRouter = require('./login');

const router = express.Router();

router.use('/customers', customerRouter);
router.use('/suppliers', supplierRouter);
router.use('/login', loginRouter);

module.exports = router;
