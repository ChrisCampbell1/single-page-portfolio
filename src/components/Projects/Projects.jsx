import styles from "./Projects.module.css"
import { projectsArray } from "../../data/projects"
import ProjectsList from "../ProjectsList/ProjectsList"

const Projects = (props) => {
  return (  
    <div className={styles.container}>
      <h1>Projects</h1>
        <ProjectsList projectsArray={projectsArray} setShowDetails={props.setShowDetails} setProjectState={props.setProjectState}/>
    </div>
  )
}

export default Projects
