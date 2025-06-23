// What an individual note contains
import mongoose from "mongoose";

//create schema
const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true
        },
        content:{
            type:String,
            required: true
        },
    },
    {timestamps: true} // contains created_at and updated_at metrics
);

//create model based off of schema
const Note = mongoose.model("Note",noteSchema)
export default Note
