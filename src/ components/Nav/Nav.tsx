import { useAnimate } from "framer-motion"
import "./Nav.css"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion as m } from "framer-motion"
import resume from "./../../../public/resume.pdf"

interface navButtonProps {
  text: string,
  link: string,
  appState: any,
  appAnimate: any,
  navScope: any,
  navAnimate: any
}

const NavButton = (props: navButtonProps) => {

  const state = props.appState
  const animate = props.appAnimate


  const animateFunction = async () => {
    await animate(state.current, { opacity: 0, x: 200 }, { duration: 0.5 })
  }

  return (
    <div className="nav-button"
      onClick={
        async () => {
          await animateFunction()
          //await props.navAnimate(props.navScope.current, { y: -200 }, { duration: 0.5, ease: "easeInOut" })

          window.location.href = props.link

        }
      }
    >
      {props.text}
    </div >
  )
}

const openEmail = () => {
  // Change 'your.email@example.com' to your actual email address
  var emailAddress = 'alex.kozik@yahoo.com';

  // Creating a mailto link
  var mailtoLink = 'mailto:' + emailAddress;

  // Opening the email client or a new tab/window with the mailto link
  window.location.href = mailtoLink;

}

const openPage = (link: string) => window.open(link, '_blank');


const EmailButton = () => {
  return (
    <div className="nav-button">
      <EmailIcon onClick={openEmail} className={"contact-me-button"} />
    </div>
  )
}

const githubLink = "https://github.com/LambdaAK"

const linkedinLink = "https://www.linkedin.com/in/alex-kozik/"

const GitHubButton = () => {
  return (
    <div className="nav-button">
      <GitHubIcon onClick={() => openPage(githubLink)} className={"contact-me-button"} />
    </div>
  )
}

const LinkedInButton = () => {
  return (
    <div className="nav-button">
      <LinkedInIcon onClick={() => openPage(linkedinLink)} className={"contact-me-button"} />
    </div>
  )
}

interface NavProps {
  appState: any,
  appAnimate: any,
}

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="contact-me-header">Contact Me: </div>
      <EmailButton />
      <GitHubButton />
      <LinkedInButton />
    </div>
  )
}

const downloadResume = () => {

  const link = document.createElement('a')
  link.href = resume
  link.download = 'AlexanderKozikResume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Nav(props: NavProps) {

  const [scope, animate] = useAnimate()


  return (
    <>
      <m.div
        ref={scope}
        id="nav">
        <NavButton text="Welcome" link="/" appState={props.appState} appAnimate={props.appAnimate} navScope={scope} navAnimate={animate} />
        <NavButton text="Projects" link="/projects" appState={props.appState} appAnimate={props.appAnimate} navScope={scope} navAnimate={animate} />
        <NavButton text="Education" link="/education" appState={props.appState} appAnimate={props.appAnimate} navScope={scope} navAnimate={animate} />
        <NavButton text="Experience" link="/experience" appState={props.appState} appAnimate={props.appAnimate} navScope={scope} navAnimate={animate} />
        <div className="nav-button"
          onClick={downloadResume}
        >
          Resume
        </div>
        <ContactMe />
      </m.div></>
  )
}