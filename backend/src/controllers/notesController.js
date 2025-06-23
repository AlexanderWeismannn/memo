import Note from "../models/Note.js";
export async function getAllNotes(req,res) {
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async  function getNoteById(req,res){
    try{
        const noteById = await Note.findById(req.params.id)
        if (!noteById) return res.status(404).json({message:"No note found"})
        res.status(200).json(noteById)
    }catch(error){
        res.status(500).json({message:"Error in getNoteById Controller"})
    }
}

export async function createNote(req,res) {
    try{
        const {title,content} = req.body
        const note = new Note({title:title,content:content})

        const savedNote = await note.save()
        res.status(201).json(savedNote)

    }catch(error){
        res.status(500).json({message:"Internal server error"})
    }
}

export async function updateNote(req,res) {
    try{
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{
            new: true,
        })
        if (!updatedNote) return res.status(404).json({message:"Note ID not found"}) 
        res.status(200).json(updatedNote)

    }catch(error){
        res.status(500).json({message:"Error in updateNote Controller"})
    }

}

export async function deleteNote(req,res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"No note found to delete"})
        res.status(200).json(deletedNote)
    }catch(error){
        res.status(500).json({message:"Error in deleteNote Controller"})
    }
}

