import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

export const NoteCard = ({note,setNotes}) => {
  const handleDelete = async (e,id) => {
    e.preventDefault(); // prevents clicking on the trash icon navigating to another page
    if(!window.confirm("Do you want to delete this note?")) return;
    
    try {
        await api.delete(`/notes/${id}`)
        setNotes((prev) => prev.filter(note => note._id !== id))
        toast.success("Note deleted!")
    } catch (error) {
        console.log("Error in handleDelete:",error)
        toast.error("Failed to delete note")
    }

  }
  return <Link to={`/note/${note._id}`}
  className="card bg-base-100 border-t-4 border-[#ffd900] transition-transform duration-200 hover:-rotate-1 hover:scale-[1.02] shadow-[0_0_0px_transparent] hover:shadow-[0_0_10px_#bfc0cc]"
  >

    <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
            <span className='text-sm text-base-content/60'>
                {formatDate(new Date (note.createdAt))}
            </span>
            <div className='flex items-center gap-1'>
                <button className='btn btn-ghost btn-xs'>
                    <PenSquareIcon className='size-5'/>    
                </button>
                <button className='btn btn-ghost btn-xs text-error'>
                    <Trash2Icon className='size-5' onClick={(e) => handleDelete(e,note._id)}/>
                </button>
            </div>
        </div>
    </div>

  </Link> 
}

export default NoteCard
