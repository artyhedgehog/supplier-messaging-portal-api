const express = require('express');
const customerRouter = require('./customer');
const supplierRouter = require('./supplier');

const router = express.Router();

router.use('/customer', customerRouter);
router.use('/supplier', supplierRouter);

module.exports = router;
