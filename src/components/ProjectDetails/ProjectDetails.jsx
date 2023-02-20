import styles from "./ProjectDetails.module.css"

const ProjectDetails = ({ project, setShowDetails }) => {
  const handleBtnClick = () => {
    setShowDetails(false)
  }

  return (  
    <div className={styles.container}>
      <h1>{project.title}</h1>
      <img src={project.image} alt={`screenshot of ${project.title}`} />
      <div className={styles.buttons}>
        <a href={project.respositoryLink} target="_blank" rel="noreferrer">GitHub</a>
        <a href={project.deploymentLink} target="_blank" rel="noreferrer">Deployed App</a>
      </div>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((technology, idx) =>
        <li key={idx}>{technology}</li>
        )}
      </ul>
      <button onClick={() => handleBtnClick()}>
        Close
      </button>
    </div>
  )
}

export default ProjectDetails
