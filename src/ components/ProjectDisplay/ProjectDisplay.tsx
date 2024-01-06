import GitHubLink from "../GitHubLink/GitHubLink"
import "./ProjectDisplay.css"


export interface ProjectDisplayProps {
  name: string,
  pictures: string[],
  description: string,
  technologies: Technology[],
  github: string,
  features: string[],
  extraComponents: (() => JSX.Element)[]
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

export interface Technology {
  name: string,
  icon: string
}

const TechnologiesUsed = (props: { technologies: Technology[] }) => {
  return (


    <div className="technologies-used-content">

      {props.technologies.map(technology =>
        <div className="technology">
          {technology.name}
          <i className={`devicon-${technology.icon}-original`}></i>
        </div>
      )}
    </div>


  )
}

/*const Features = (props: { features: string[] }) => {

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
}*/

const ProjectDisplayPictures = (props: { pictures: string[] }) => {
  return (
    <div className="project-display-pictures">
      {
        props.pictures.map(pictureDir => {
          return (

            <img src={pictureDir} alt="" className="project-picture" style={
              {
                width: "500px"
              }
            } />

          )
        })
      }

    </div>
  )
}

export default function ProjectDisplay(props: ProjectDisplayProps) {

  return (
    <div className="project-display hidden">
      <ProjectName name={props.name} link={props.github} />
      <ProjectDescription description={props.description} />
      <br />

      <TechnologiesUsed technologies={props.technologies} />

      <ProjectDisplayPictures pictures={props.pictures} />
      {
        props.extraComponents.map(component => <div className="extra-component">{component()}</div>)
      }
    </div>

  )
}