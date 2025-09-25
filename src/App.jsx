import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import AllPosts from './pages/AllPosts'

import './App.css'
import AddNew from './pages/AddNew'
import EditPost from './pages/EditPost'
import Preview from './pages/Preview'

const App = () => {
  return (
    <>
      <Router>
        <div className='p-6'>
          <nav className='flex gap-4 mb-6'>
            <Link to="/">All Posts</Link>
            <Link to="/add">Add New</Link>
            <Link to="/preview">Preview</Link>
          </nav>
          <Routes>
            <Route path="/" element={<AllPosts />} />
            <Route path="/add" element={<AddNew />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
