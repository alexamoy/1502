const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    unique: false
  },
  store: {
    type: String,
    enum: ['Target', '99 Ranch Market', 'Amazon']
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = { Item };
