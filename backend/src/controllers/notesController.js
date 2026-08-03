import Note from "../models/Note.js";


async function getAllNotes (req, res) {
    try {
        const Note = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
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