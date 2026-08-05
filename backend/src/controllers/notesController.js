import Note from "../models/Note.js";


async function getAllNotes (req, res) {
    try {
        // const notes = await Note.find();
        const notes = await Note.find().sort({createdAt : -1}); 
        // sorts in Descending order of created at field i.e. latest note appears first

        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

async function get_Note_By_id (req, res) {
    try {
        const notes = await Note.findById(req.params.id);
        if(!notes) return res.status(404).json({message : "Note not found"});
        res.json(notes);
    } catch (error) {
        console.error("Error in get_Note_By_id controller ", error);
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
    try {

        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content}, {new : true,});

        if(!updatedNote) return res.status(404).json({message : "Note not found"});

        res.status(200).json(updatedNote);

    } catch (error) {
        console.error("Error in updateNote controller ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

async function deleteNote (req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message : " Note not found "});
        res.status(200).json({message: "Note deleted successfully !!"})
    } catch (error) {
        console.error("Error in deleteNote controller ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

export { getAllNotes, get_Note_By_id, createNote, updateNote, deleteNote };