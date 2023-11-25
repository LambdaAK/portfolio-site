import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import GitHubLink from "../GitHubLink/GitHubLink"
import "./ProjectDisplay.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Parallax } from "react-scroll-parallax"

export interface ProjectDisplayProps {
  name: string,
  pictures: string[],
  description: string,
  technologies: Technology[],
  github: string,
}

const ProjectName = (props: { name: string, iconName: string }) => {
  return (
    <div className="project-name">
      {props.name}
      <GitHubLink
        link={props.iconName}
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

export interface Technology {
  name: string,
  icon: string
}

const TechnologiesUsed = (props: { technologies: Technology[] }) => {
  return (
    <div className="technologies-used">
      <h1 className="technologies-used-header">Technologies used</h1>
      <div className="technologies-used-content">

        {props.technologies.map(technology =>
          <div className="technology">
            {technology.name}
            <i className={`devicon-${technology.icon}-original`}></i>
          </div>
        )}
      </div>
    </div>

  )
}

export default function ProjectDisplay(props: ProjectDisplayProps) {

  const array1 = [
    "-200px",
    "200px"
  ]

  const array2 = [
    "200px",
    "-200px"
  ]

  return (

    <div className="project-display">
      <Parallax translateX={['-200px', '200px']}>
        <ProjectName name={props.name} iconName="a" />
      </Parallax>
      <Parallax translateX={['-200px', '200px']}>
        <ProjectDescription description={props.description} />
      </Parallax>
      <Parallax translateX={['-200px', '200px']}>
        <TechnologiesUsed technologies={props.technologies} />
      </Parallax>
    </div>

  )
}