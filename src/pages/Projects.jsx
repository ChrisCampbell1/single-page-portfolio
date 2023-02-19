import { projectsArray } from "../data/projects"
import ProjectsList from "../components/ProjectsList/ProjectsList"

const Projects = () => {
  return (  
    <div className="pageContainer">
      <h1>Projects Page</h1>
      <ul>
        <ProjectsList projectsArray={projectsArray}/>
      </ul>
    </div>
  )
}

export default Projects
