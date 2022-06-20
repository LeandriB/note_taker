const express = require('express').Router();
const { addNewNote, deleteNote } = require('../../db/utils');
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

// DELETE Route
express.delete('./notes/:id', (req, res) => {
    deleteNote(notes, req.params.id)
    res.json(notes)
});

module.exports = express;
