import './styles/App.css'
import './styles/Navbar.css'
import './styles/HomeContent.css'
import './styles/AboutContent.css'
import './styles/SkillContent.css'
import './styles/ProjectContent.css'
import './styles/ContactContent.css'
import Navbar from './components/Navbar.jsx'
import HomeContent from './components/HomeContent.jsx'
import AboutContent from './components/AboutContent.jsx'
import SkillContent from './components/SkillContent.jsx'
import ProjectContent from './components/ProjectContent.jsx'
import Contact from './components/ContactContent.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/About' element={<AboutContent />} />
            <Route path='/Skill' element={<SkillContent />} />
            <Route path='/Project' element={<ProjectContent />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
