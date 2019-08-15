const express = require('express');
const router = express.Router();
const {models} = require('../db');
// const mockUsers = require('../db/mockdata/mock-users');


router.get('/', async (req, res) => {
  try {
    const items = await models.Item.find();
    return res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async(req, res) => {
  try {
    const newItem = new models.Item(req.body);
    const response = await newItem.save();
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const response = await models.Item.deleteOne({ _id: req.params.id }).exec();
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
