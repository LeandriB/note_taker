const express = require('express').Router();
const { addNewNote} = require('../../db/utils');
const { notes } = require('../../db/db.json')

// GET Route
express.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

// POST Route
express.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = addNewNote(req.body, notes);
    res.json(note);
});

module.exports = express;
