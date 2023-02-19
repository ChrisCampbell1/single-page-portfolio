import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsList = (props) => {
  return (
    <>
    {props.projectsArray.map((project, idx) =>
    <ProjectPreview key={idx} project={project}/>
    )}
    </>
  )
}

export default ProjectsList;
