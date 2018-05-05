const express = require('express');

const users = require('../../../services/users');

const router = express.Router();

router.post('/', async ({ body }, res) => {
  const user = await users.login(body);

  res.json({
    user,
  })
});

module.exports = router;
