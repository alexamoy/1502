const express = require('express');
const router = express.Router();
// const mockUsers = require('../db/mockdata/mock-users');


router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

module.exports = router;
