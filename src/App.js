import { Routes, Route } from 'react-router-dom';

import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar/NavBar';
import ProjectDetails from './pages/ProjectDetails';
import AboutComp from './components/About/About';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className='app'>
      {/* <NavBar /> */}
      <Welcome />
      <AboutComp />
      <Skills />
      <Routes>
        {/* <Route path='/' element={<About />}/> */}
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/projects/:projectDetails' element={<ProjectDetails />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </div>
  );
}

export default App;
