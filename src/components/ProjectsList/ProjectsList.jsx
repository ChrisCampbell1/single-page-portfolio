import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsList.module.css"
import { useState } from "react";


const ProjectsList = (props) => {
  const [index, setIndex] = useState(0)
  const length =props.projectsArray.length - 1

  const handlePrevious = () => {
    const newIndex = index - 1
    if (newIndex < 0) {
      return
    } else {
      setIndex(newIndex)
    }
  }

  const handleNext = () => {
    const newIndex = index + 1
    if (newIndex > length) {
      return
    } else {
      setIndex(newIndex)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => handlePrevious()}>Prev</button>
      <ProjectCard project={props.projectsArray[index]} setShowDetails={props.setShowDetails} setProjectState={props.setProjectState}/>
      <button onClick={() => handleNext()}>Next</button>
    </div>
  )
}

export default ProjectsList;
