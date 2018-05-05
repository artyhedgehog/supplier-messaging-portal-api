const express = require('express');

const suppliers = require('../../../services/suppliers');
const requests = require('../../../services/requests');

const router = express.Router();

router.get('/', async (req, res) => {
  const list = await suppliers.list();

  res.json(list);
});

router.post('/invite', async ({ body }, res) => {
  const inviteLink = await suppliers.invite(body);

  res.status(201).json({
    inviteLink,
  })
});

router.post('/register', async ({ body }, res) => {
  const supplier = await suppliers.register(body);

  res.status(201).json({
    token: 'token',
    supplier,
  })
});

router.get('/:supplierId/requests', async ({ params: { supplierId } }, res) => {
  const list = await requests.list(supplierId);

  res.json(list);
}); 

router.post('/:supplierId/requests/:requestId/reply', async ({ body, params: { supplierId, requestId } }, res) => {
  const request = await requests.reply(supplierId, requestId, body);

  res.json({ request });
});

module.exports = router;
