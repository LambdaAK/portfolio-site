import { motion, useAnimate } from "framer-motion"
import "./Nav.css"
import { useEffect } from "react"

interface navButtonProps {
  text: string,
  link: string,
}

const NavButton = (props: navButtonProps) => {
  return (
    <div className="nav-button"
      onClick={
        () => {
          window.location.href = props.link
        }
      }
    >
      {props.text}
    </div>
  )
}

export default function Nav() {

  const [state, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(state.current, { opacity: 1 }, { duration: 1 })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      id="nav"
      ref={state}>
      <NavButton text="Welcome" link="/" />
      <NavButton text="Projects" link="/projects" />
      <NavButton text="Education" link="/education" />
      <NavButton text="Experience" link="/experience" />
    </motion.div >
  )
}