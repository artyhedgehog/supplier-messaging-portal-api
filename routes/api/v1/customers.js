const express = require('express');

const customers = require('../../../services/customers');
const requests = require('../../../services/requests');

const router = express.Router();

router.post('/register', async ({ body }, res) => {
  const customer = await customers.register(body);

  res.status(201).json({
    token: 'token',
    customer,
  })
});

router.post('/:customerId/requests', async ({ body, params: { customerId } }, res) => {
  const request = await requests.create(customerId, body);

  res.status(201).json({
    request,
  })
});

router.get('/:customerId/requests', async ({ params: { customerId } }, res) => {
  const list = await requests.list(customerId);

  res.json(list);
}); 

module.exports = router;
