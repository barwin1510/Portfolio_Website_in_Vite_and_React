import './App.css'
import './Navbar.css'
import './Footer.css'
import './HomeContent.css'
import './AboutContent.css'
import './SkillContent.css'
import './ProjectContent.css'
import './ContactContent.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import HomeContent from './HomeContent.jsx'
import AboutContent from './AboutContent.jsx'
import SkillContent from './SkillContent.jsx'
import ProjectContent from './ProjectContent.jsx'
import Contact from './ContactContent.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar />
        <BrowserRouter basename='/Portfolio_Website_in_Vite_and_React'>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/About' element={<AboutContent />} />
            <Route path='/Skill' element={<SkillContent />} />
            <Route path='/Project' element={<ProjectContent />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
