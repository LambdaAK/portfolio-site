import { useEffect } from "react"
import "./WelcomeSection.css"

import { motion, useAnimate } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import me from "./../../../public/me.jpg"


function sleep(seconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

/*
const phrases: string[] = [
  "full-stack web developer",
  "software engineer",
  "machine learning enthusiast",
  "PL enthusiast",
  "dog lover",
]
*/


const ImA = () => {

  /*const [phraseIndex, setPhraseIndex] = useState(0)*/
  const [state, animate] = useAnimate()


  const animateFunction = async () => {
    await animate(state.current, { opacity: 0 }, { duration: 0 })
    await sleep(2)
    await animate(state.current, { opacity: 100 }, { duration: 2, ease: "easeInOut" })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  const delay: number = 2000

  return (
    <motion.div ref={state}>
      <h2 className="second-welcome-line">
        I'm a
      </h2>
      <motion.pre ref={state} className="second-welcome-line">
        <TypeAnimation
          sequence={[
            'Software engineer',
            delay,
            'Machine learning enthusiast',
            delay,
            'PL enthusiast',
            delay,
            "Web developer",
            delay,
            "Chess enjoyer",
            delay,
            "Rubik's cube solver",
            delay,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
      </motion.pre >
    </motion.div>
  )
}

const Welcome = () => {

  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await sleep(4)
    await animate(scope.current, { opacity: 100 }, { duration: 2 })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >

    </motion.div>
  )
}

const Hi = () => {

  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await animate(scope.current, { opacity: 100 }, { duration: 0.5 })
    await sleep(0.5)
    await animate(scope.current, { rotate: 90 }, { duration: 0.5 })
    await animate(scope.current, { rotate: 0 }, { duration: 0.5 })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >
      <h1 className="first-welcome-line">Hi.</h1>

    </motion.div>
  )
}

const ImAlex = () => {

  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await sleep(0.5)
    await animate(scope.current, { opacity: 100 }, { duration: 0.5 })

    await animate(scope.current, { y: 10 }, { duration: 0.5 })
    await animate(scope.current, { y: 0 }, { duration: 0.5 })

  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >
      <h1 className="first-welcome-line">I'm <span>Alex</span>.</h1>

    </motion.div>
  )
}

const Portrait = () => {
  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await animate(scope.current, { opacity: 100 }, { duration: 0.5, ease: "easeInOut" })

  }

  useEffect(() => {
    animateFunction()
  }, [])
  return (

    <motion.img src={me} alt="" className="portrait welcome-element" ref={scope} />

  )
}

const WelcomeContent = () => {
  return (
    <div id="welcome-content" className="welcome-element">
      <div>
        <Hi />
        <ImAlex />
        <ImA />
        <Welcome />
      </div>
    </div>
  )
}

/*const BriefIntro = () => {
  return (
    <div id="brief-intro" className="welcome-element">
      <h1>Hi, I'm Alex.</h1>
      <h2>I'm a full-stack web developer, software engineer, machine learning enthusiast, and PL enthusiast.</h2>
      <h2>Welcome to my website.</h2>
    </div>
  )
}*/


const intro = [
  `Hi there! I'm Alex. I'm Junior at Cornell studying Computer Science and Mathematics.`,
  `I am passionate about software engineering, programming languages, and machine learning.`,
  `Welcome to my website!`

]

export default function WelcomeSection() {

  useEffect(() => {
    console.log("setting exit animation function")
  }, [])

  return (
    <motion.div id="welcome">
      <div className="first-container">
        <div className="second-container">
          <Portrait />
          <WelcomeContent />
        </div>
        <div className="intro">
          {
            intro.map(line => {
              return (
                <div>
                  <p>{line}</p>
                </div>
              )
            })
          }

        </div>

      </div>

    </motion.div>
  )
}