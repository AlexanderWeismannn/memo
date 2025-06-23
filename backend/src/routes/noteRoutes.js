import express from "express"
import  {getNoteById,getAllNotes,createNote,updateNote,deleteNote} from "../controllers/notesController.js"

const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNote);
// localhost:5001/api/notes/2134545  <- ID
router.put("/:id",updateNote);
// get rid of a post (delete from the database)
router.delete("/:id",deleteNote);

export default router
