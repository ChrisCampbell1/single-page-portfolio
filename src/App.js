import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import AboutComp from './components/About/About';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Contact from './components/Contact/Contact';

function App() {
  const [showDetails, setShowDetails] = useState(false)
  const [projectState, setProjectState] = useState({})

  
  return (
    <div className='app'>
      {/* <NavBar /> */}
      <Welcome />
      <AboutComp />
      <Skills />
      <Projects setShowDetails={setShowDetails} setProjectState={setProjectState}/>
      {showDetails && <ProjectDetails project={projectState} setShowDetails={setShowDetails}/>}
      <Contact />
    </div>
  );
}

export default App;
