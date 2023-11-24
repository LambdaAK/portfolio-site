import GitHubLink from "../GitHubLink/GitHubLink"
import "./ProjectDisplay.css"

export interface ProjectDisplayProps {
  name: string,
  pictures: string[],
  description: string,
  technologies: string[],
  github: string,
}

const ProjectName = (props: { name: string, link: string }) => {
  return (
    <div className="project-name">
      {props.name}

      <GitHubLink
        link={props.link}
      />


    </div >
  )
}

const ProjectDescription = (props: { description: string }) => {
  return (
    <div className="project-description">
      {props.description}
    </div>
  )
}

const ProjectTechnologies = (props: { technologies: string[] }) => {
  return (
    <div className="project-technologies">
      {props.technologies.map(technology =>
        <div className="project-technology">
          {technology}
        </div>
      )}
    </div>
  )

}

export default function ProjectDisplay(props: ProjectDisplayProps) {
  return (
    <div className="project-display">
      <ProjectName name={props.name} link="a" />
      <ProjectDescription description={props.description} />
      <ProjectTechnologies technologies={props.technologies} />
    </div>
  )
}