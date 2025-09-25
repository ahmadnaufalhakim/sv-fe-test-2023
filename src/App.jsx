import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import AllPosts from './pages/AllPosts'

import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <div className='p-6'>
          <nav className='flex gap-4 mb-6'>
            <Link to="/">All Posts</Link>
          </nav>
          <Routes>
            <Route path="/" element={<AllPosts />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
