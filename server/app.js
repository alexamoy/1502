'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const morgan = require( 'morgan' );
const path = require( 'path' );
const PORT = 1502;
app.use( morgan( 'dev' ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( express.static( path.join( __dirname, '../public' ) ) );
app.use( express.static( path.join( __dirname, '../node_modules' ) ) );

app.use( '/api', require( './api' ) );

app.get( '*', (req, res) => {
  res.sendFile( path.join( __dirname, '../public/index.html' ) );
});

app.use( (err, req, res) => {
  console.error( err );
  console.error( err.stack );
  res.status( err.status || 500 ).send( err.message || 'Internal server error.' );
});

app.listen( PORT, () => console.log(`Gettin litty on port ${PORT}`) );

