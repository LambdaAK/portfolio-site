import "./ProjectDisplay.css"

import TerminalIcon from '@mui/icons-material/Terminal';
import GithubIcon from '@mui/icons-material/GitHub';

export interface ProjectDisplayProps {
  name: string,
  pictures: string[],
  description: string,
  technologies: Technology[],
  github: string,
  features: string[],
  url: string, // url to the project
  extraComponents: (() => JSX.Element)[]
}

const ProjectName = (props: { name: string }) => {
  return (
    <div className="project-name">
      {props.name}
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
          // need to check whether it's a png or mp4
          if (pictureDir.endsWith(".mp4")) return (
            <video src={pictureDir} autoPlay loop muted className="project-picture"

            />
          )

          else return (

            <img src={pictureDir} alt="" className="project-picture"
            />

          )
        })
      }

    </div>
  )
}

interface TryProps {
  url: string,
  projectName: string
}

const Try = (props: TryProps) => {
  if (props.url != "") return (
    <div className="try"
      onClick={
        () => {
          window.open(props.url)
        }
      }
    >
      <TerminalIcon
        style={
          {
            transform: "scale(1.5)",
            marginRight: "10px",
            marginTop: "auto",
            marginBottom: "auto"
          }
        }
      />
      Try {props.projectName}
    </div>
  )
  else return <></>
}

const RepoLink = (props: { link: string, projectName: string }) => {
  if (props.link != "") return (
    <div className="repo-link"
      onClick={
        () => {
          window.open(props.link)
        }
      }
    >
      <GithubIcon
        style={
          {
            transform: "scale(1.5)",
            marginRight: "10px",
            marginTop: "auto",
            marginBottom: "auto"
          }
        }
      />
      {props.projectName} repository
    </div>
  )
  else return <></>
}

export default function ProjectDisplay(props: ProjectDisplayProps) {

  return (
    <div className="project-display">
      <ProjectName name={props.name} />
      <ProjectDescription description={props.description} />
      <br />

      <TechnologiesUsed technologies={props.technologies} />

      <Try url={props.url} projectName={props.name} />

      <RepoLink link={props.github} projectName={props.name} />

      <ProjectDisplayPictures pictures={props.pictures} />
      {
        props.extraComponents.map(component => <div className="extra-component">{component()}</div>)
      }
    </div>
  )
}