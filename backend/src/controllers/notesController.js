import Note from "../models/Note.js";


async function getAllNotes (req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

async function createNote (req, res) {
    try {
        const {title, content} = req.body
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message : "New Note successfully created"});
    } catch (error) {
        console.error("Error in createNote controller ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

async function updateNote (req, res) {
    res.status(200).json({message: "Note updated successfully"});
}

async function deleteNote (req, res) {
    res.status(200).json({message: "Note deleted successfully"});
}

export { getAllNotes, createNote, updateNote, deleteNote };