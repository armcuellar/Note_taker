const fs = require("fs");
const path = require("path");

// creates new notes
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
};

// searches for id of note and returns ir
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id);

    return result;
}

// deletes note based on id
function deleteId(id, notesArray) {
    const result = notesArray.filter(note => note.id === id);
    const indexItem = notesArray.indexOf(result[0])

    // splices array based on index in the array
    notesArray.splice(indexItem, 1);

    // rewrites file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return notesArray;
}


module.exports = {
    createNewNote,
    findById,
    deleteId
} 