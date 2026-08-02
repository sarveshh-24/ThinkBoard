const getAllNotes = (req, res) => {
    res.status(200).send("You just got 10 notes from the notesController.js file");
}

const createNote = (req, res) => {
    res.status(201).json({message: "Note created successfully"});
}

const updateNote = (req, res) => {
    res.status(200).json({message: "Note updated successfully"});
}

const deleteNote = (req, res) => {
    res.status(200).json({message: "Note deleted successfully"});
}

export { getAllNotes, createNote, updateNote, deleteNote };