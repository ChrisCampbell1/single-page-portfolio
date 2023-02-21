import styles from "./ProjectCard.module.css"

const ProjectCard = (props) => {
  const handleBtnClick = () => {
    props.setShowDetails(true)
    props.setProjectState(props.project)
  }

  return (  
    <div className={styles.container}>
      <h2>
          {props.project.title}
      </h2>
      <img 
          src={props.project.image} 
          alt={props.project.title}
      />
      <div className={styles.buttons}>
        <a href={props.project.respositoryLink} target="_blank" rel="noreferrer">GitHub</a>
        <a href={props.project.deploymentLink} target="_blank" rel="noreferrer">Deployed App</a>
        <a href="#details" onClick={() => handleBtnClick()}>
          Learn More
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;
