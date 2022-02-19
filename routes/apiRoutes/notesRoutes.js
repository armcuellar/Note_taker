// foutes for notes
const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNewNote, findById, deleteId } = require('../../lib/notes');
// access unique id npm package
const uniqid = require('uniqid');

// get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// adds notes
router.post('/notes', (req, res) => {
    // creates unique id
    req.body.id = uniqid();

    const note = createNewNote(req.body, notes);

    res.json(note);
});

// deltes notes
router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);

    if (result) {
        const result = deleteId(req.params.id, notes)
        res.json(result);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;