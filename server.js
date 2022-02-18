const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid')

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db.json');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ note: notesArray }, null, 2)
    );

    return note;
};



// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);

    req.body.id = uniqid();

    const note = createNewNote(req.body, notes);

    res.json(note);
});

app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}!`)
});
