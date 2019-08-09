'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const morgan = require( 'morgan' );
const path = require( 'path' );
const PORT = 1502;

const { connectDb, models } = require('./db');
const users = require( './db/mockdata/mock-users' );
const items = require( './db/mockdata/mock-items' );

app.use( morgan( 'dev' ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( express.static( path.join( __dirname, '../public' ) ) );
app.use( express.static( path.join( __dirname, '../node_modules' ) ) );

app.use((req, res, next) => {
  req.context = {
    models,
    me: users[0],
  };
  next();
});

app.use( '/api', require( './api' ) );

app.get( '*', (req, res) => {
  res.sendFile( path.join( __dirname, '../public/index.html' ) );
});


app.use( (err, req, res) => {
  console.error( err );
  console.error( err.stack );
  res.status( err.status || 500 ).send( err.message || 'Internal server error.' );
});

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Item.deleteMany({})
    ]);
    createUsers();
    createItems();
  }
  app.listen(PORT, () => console.log(`Gettin litty on port ${PORT}`));
});

const createUsers = () => {
  users.forEach(async user => {
    const newUser = new models.User({
      name: user.name,
    });
    await newUser.save();
  });
};

const createItems = () => {
  items.forEach(async item => {
    const newItem = new models.Item({
      name: item.name,
    });
    await newItem.save();
  });
};
