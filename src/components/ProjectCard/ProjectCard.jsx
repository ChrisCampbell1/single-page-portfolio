import { Link } from "react-router-dom";
import { hyphenateWords } from "../../utilities/hyphenateWords";
import styles from "./ProjectCard.module.css"

const ProjectCard = (props) => {
  let slug = hyphenateWords(props.project.title)

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
        <button>
          Learn more
        </button>
      </div>
    </div>
  )
}

export default ProjectCard;
