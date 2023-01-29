import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  return (
    <>
    {props.projects.map((project, idx) =>
    <ProjectPreview key={idx} project={project}/>
    )}
    </>
  )
}

export default ProjectsList;
