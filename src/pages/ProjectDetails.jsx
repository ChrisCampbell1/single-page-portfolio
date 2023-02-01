import { useParams } from "react-router-dom"
import { findProject } from "../utilities/findProject"

const ProjectDetails = () => {
  const {projectDetails} = useParams()
  console.log(projectDetails, "details")
  let project = findProject(projectDetails)
  console.log(project, "should be in the h1")
  return (  
  <div className="pageContainer">
    <h1>{project[0].title}</h1>
    <p>
    {project[0].description}
    </p>
    <img src={project[0].image} alt="app screenshot" width="75%"/>
    <a href={project[0].respositoryLink} target="_blank" rel="noreferrer">GitHub</a>
    <a href={project[0].deploymentLink} target="_blank" rel="noreferrer">Deployed App</a>
  </div>
  )
}

export default ProjectDetails
