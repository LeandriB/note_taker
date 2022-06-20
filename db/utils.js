const fs = require('fs');
const path = require('path');

function addNewNote(note, notesArr) {
    notesArr.push(note);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArr
        }, null, 2)
    )
    return note;
}

function deleteNote(notesArr, id) {
    let removeNote = parseInt(id);
    notesArr.splice(removeNote, 1);

    for (let i = removeNote; i < notesArr.length; i++) {
        notesArr[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArr
        }, null, 2)
    )
    
}

module.exports = {
    addNewNote, 
    deleteNote
}