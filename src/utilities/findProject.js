import { projectsArray } from "../data/projects"
import { hyphenateWords } from "./hyphenateWords"

function findProject(str) {
  let project = projectsArray.filter((project) => hyphenateWords(project.title) === str)
  return project[0]
}

export{
  findProject
}
