import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsList.module.css"

const ProjectsList = (props) => {
  return (
    <div className={styles.container}>
      {props.projectsArray.map((project, idx) =>
      <ProjectCard key={idx} project={project}/>
      )}
    </div>
  )
}

export default ProjectsList;
