import './App.css'
import './Navbar.css'
import './HomeContent.css'
import './AboutContent.css'
import './SkillContent.css'
import './ProjectContent.css'
import './ContactContent.css'
import Navbar from './Navbar.jsx'
import HomeContent from './HomeContent.jsx'
import AboutContent from './AboutContent.jsx'
import SkillContent from './SkillContent.jsx'
import ProjectContent from './ProjectContent.jsx'
import Contact from './ContactContent.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/About' element={<AboutContent />} />
          <Route path='/Skill' element={<SkillContent />} />
          <Route path='/Project' element={<ProjectContent />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
