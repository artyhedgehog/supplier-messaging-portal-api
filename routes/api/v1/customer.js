const express = require('express');

const customers = require('../../../services/customers');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { body } = req;
  const customer = await customers.register(body);

  res.json({
    token: 'token',
    customer,
  })
});

module.exports = router;
