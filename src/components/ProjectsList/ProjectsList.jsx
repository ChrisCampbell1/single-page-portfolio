import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import styles from "./ProjectsList.module.css"

const ProjectsList = (props) => {
  return (
    <div className={styles.container}>
      {props.projectsArray.map((project, idx) =>
      <ProjectPreview key={idx} project={project}/>
      )}
    </div>
  )
}

export default ProjectsList;
