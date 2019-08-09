const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    unique: false
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = { Item };
