import { Link } from "react-router-dom";
import { hyphenateWords } from "../../utilities/hyphenateWords";
import styles from "./ProjectPreview.module.css"

const ProjectPreview = (props) => {
  let slug = hyphenateWords(props.project.title)

  return (  
    <div className={styles.container}>
      <h3>
          {props.project.title}
      </h3>
      <img 
          src={props.project.image} 
          alt={props.project.title}
      />
      <br />
      <Link to={`/projects/${slug}`}>
        <button>
          Learn more
        </button>
      </Link>
    </div>
  )
}

export default ProjectPreview;
