import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"

const Projects = () => {
  return (  
    <div className="pageContainer">
      <h1>Projects Page</h1>
      <ul>
        <ProjectsList projects={projects}/>
      </ul>
    </div>
  )
}

export default Projects
