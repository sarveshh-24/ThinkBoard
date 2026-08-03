import mongoose from "mongoose";

// 1 - First create a schema 
// 2 - Then create a model based off of that schema

const noteSchema = new mongoose.Schema(
    {
    title:{
        type : String,
        required : true,
    },
    content:{
        type : String,
        required : true,
    },
    },
    {timestamps : true} // created at , updated at
);

const Note = mongoose.model("Note", noteSchema); 
// a model 'Note' is created off that schema 'noteSchema'

export default Note;