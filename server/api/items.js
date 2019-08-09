const express = require('express');
const router = express.Router();
// const mockUsers = require('../db/mockdata/mock-users');


router.get('/', async (req, res) => {
  const items = await req.context.models.Item.find();
  return res.send(items);
});

module.exports = router;
