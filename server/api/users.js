const express = require('express');
const router = express.Router();
const mockUsers = require('../db/mockdata/mock-users');


router.get('/', (req,res) => {
  res.json(mockUsers);
});

module.exports = router;
