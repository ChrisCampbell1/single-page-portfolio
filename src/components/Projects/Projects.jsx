import styles from "./Projects.module.css"
import { projectsArray } from "../../data/projects"
import ProjectsList from "../ProjectsList/ProjectsList"

const ProjectsComp = () => {
  return (  
    <div className={styles.container}>
      <h1>this is a projects component</h1>
        <ProjectsList projectsArray={projectsArray}/>
    </div>
  )
}

export default ProjectsComp
