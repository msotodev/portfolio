import './App.css'
import Home from './components/Home/Home'
import './helpers/LanguageHelper';
import { Routes, Route } from 'react-router-dom'
import ProjectDetail from './components/Home/Projects/Project/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App