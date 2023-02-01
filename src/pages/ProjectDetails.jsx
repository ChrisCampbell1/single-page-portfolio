import { projectsArray } from "../data/projects"

const ProjectDetails = () => {
  return (  
  <div className="pageContainer">
    <h1>{projectsArray[0].title}</h1>
    <p>
    {projectsArray[0].description}
    </p>
    <img src={projectsArray[0].image} alt="app screenshot" width="75%"/>
    <a href={projectsArray[0].respositoryLink} target="_blank" rel="noreferrer">GitHub</a>
    <a href={projectsArray[0].deploymentLink} target="_blank" rel="noreferrer">Deployed App</a>
  </div>
  )
}

export default ProjectDetails
