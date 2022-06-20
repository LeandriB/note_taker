const express = require('express').Router();
const notes = require('./notes');

express.use(notes);

module.exports = express;
