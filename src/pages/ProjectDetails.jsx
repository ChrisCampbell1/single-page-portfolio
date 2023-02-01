import { projectsArray } from "../data/projects"

const ProjectDetails = () => {
  return (  
  <div className="pageContainer">
    <h1>{projectsArray[0].title}</h1>
  </div>
  )
}

export default ProjectDetails
