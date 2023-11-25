import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import GitHubLink from "../GitHubLink/GitHubLink"
import "./ProjectDisplay.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Parallax } from "react-scroll-parallax"
import { useEffect } from "react"

export interface ProjectDisplayProps {
  name: string,
  pictures: string[],
  description: string,
  technologies: Technology[],
  github: string,
  features: string[]
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

const Features = (props: { features: string[] }) => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
        else {
          entry.target.classList.remove("show")
        }
      })

    })

    const hidden = document.querySelectorAll(".hidden .feature")

    hidden.forEach(e => {
      observer.observe(e)
    })
  }, [])

  return (
    <div className="features">
      <h1>Features</h1>
      <ul className="features-list">
        {
          props.features.map(feature => {
            return (
              <li className="feature hidden">
                <FontAwesomeIcon icon="check" />
                {feature}
              </li>
            )
          })
        }
      </ul>
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
    <div className="project-display hidden">
      <ProjectName name={props.name} iconName="a" />
      <ProjectDescription description={props.description} />
      <TechnologiesUsed technologies={props.technologies} />
      <Features features={props.features} />
    </div>

  )
}