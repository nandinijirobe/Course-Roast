import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Course from './pages/Course'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} />
          {/* Paths for the future - as we work on them */}
          {/*<Route path="/review" element={< />} /> */}
      </Routes>
    </Router>
  )
}

export default App
