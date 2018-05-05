const express = require('express');

const suppliers = require('../../../services/suppliers');

const router = express.Router();

router.post('/invite', async ({ body }, res) => {
  const inviteLink = await suppliers.invite(body);

  res.json({
    inviteLink,
  })
});

router.post('/register', async ({ body }, res) => {
  const supplier = await suppliers.register(body);

  res.json({
    token: 'token',
    supplier,
  })
});

module.exports = router;
