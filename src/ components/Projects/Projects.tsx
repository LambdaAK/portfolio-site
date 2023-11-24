import ProjectDisplay, { ProjectDisplayProps } from "../ProjectDisplay/ProjectDisplay"
import "./Projects.css"


const projectInfo: ProjectDisplayProps[] = [
  {
    name: "Project 1",
    pictures: [],
    description: "This is a project",
    technologies: ["React", "TypeScript", "CSS"],
    github: "a link"
  },
  {
    name: "Project 2",
    pictures: [],
    description: "This is a project",
    technologies: ["React", "TypeScript", "CSS", "Haskell"],
    github: "a link"

  }
]

export default function Projects() {
  return (
    <div className="projects">
      {
        projectInfo.map(project =>
          <ProjectDisplay {...project} />
        )
      }
    </div>
  )
}