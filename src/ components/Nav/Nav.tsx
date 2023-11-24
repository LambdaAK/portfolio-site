import { motion } from "framer-motion"
import "./Nav.css"

interface navButtonProps {
  text: string,
  link: string,
}

const NavButton = (props: navButtonProps) => {
  return (
    <div className="nav-button"
      onClick={
        () => {
          const element = document.getElementById(props.link.slice(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }

        }
      }
    >
      {props.text}
    </div>
  )
}

export default function Nav() {

  return (
    <motion.div
      id="nav"
      // make it float in from the top
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <NavButton text="Welcome" link="#welcome" />
      <NavButton text="Projects" link="#projects" />
      <NavButton text="Education" link="#education" />
      <NavButton text="Experience" link="#experience" />
      <NavButton text="Courses" link="#courses" />
      <NavButton text="Contact" link="#contact" />
    </motion.div>
  )
}