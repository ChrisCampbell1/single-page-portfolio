const ProjectPreview = (props) => {
  return (  
    <>
    <div className="projectPreview">
      <h3>
          {props.project.title}
      </h3>
      <img 
          src={props.project.image} 
          alt={props.project.title}
      />
      <br />
      <button>
        Learn more
      </button>
    </div>
    </>
  )
}

export default ProjectPreview;
