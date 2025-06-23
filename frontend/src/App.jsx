import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailsPage from './pages/NoteDetailsPage'
 

const App = () => {
  return (
    <div className='relative h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(100%_100%_at_50%_2%,#000_60%,#1e0057_100%)]" />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/create" element={<CreatePage />}/>
          <Route path="/note/:id" element={<NoteDetailsPage />}/>
        </Routes>
    </div>    
  )
}

export default App


