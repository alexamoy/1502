const mongoose = require( 'mongoose' );
const { User } = require( './user' );
const { Item } = require( './items' );

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017/1502', { useNewUrlParser: true });
};

const models = { User, Item };

module.exports = { connectDb, models };
