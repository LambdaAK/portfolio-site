import { useEffect, useState } from "react"
import "./WelcomeSection.css"
import { Parallax } from "react-scroll-parallax"
import { motion, useAnimate } from "framer-motion"

function sleep(seconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

const phrases: string[] = [
  "full-stack web developer",
  "software engineer",
  "machine learning enthusiast",
  "PL enthusiast",
  "dog lover",
]

const ImA = () => {

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [state, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(state.current, { opacity: 0, x: -100 }, { duration: 0 })
    await sleep(2)
    await animate(state.current, { x: 0, opacity: 100 }, { duration: 2, ease: "easeInOut" })
  }

  useEffect(() => {
    animateFunction()
    const id = setInterval(() => {
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }, 2000)

    return () => clearTimeout(id)
  }, [])

  return (
    <motion.div ref={state} className="im-a"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 3 } }}
      transition={{ duration: 1 }}
    >
      <h2 className="second-welcome-line">I'm a</h2>
      <h1 id="im-a-phrase">
        {phrases[phraseIndex]}
      </h1>
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
      <h2 className="third-welcome-line">Welcome to my website.</h2>

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
    await animate(scope.current, { x: -100 }, { duration: 2 })
    await animate(scope.current, { x: 0 }, { duration: 0.5 })
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

    await animate(scope.current, { x: 100 }, { duration: 2 })
    await animate(scope.current, { x: 0 }, { duration: 0.5 })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >
      <h1 className="first-welcome-line">I'm <span className="name">Alex</span>.</h1>

    </motion.div>
  )
}

export default function WelcomeSection() {
  return (
    <div id="welcome">
      <div className="welcome-text">
        <Parallax opacity={[1, 0]}>
          <Hi />
          <ImAlex />
        </Parallax>
        <ImA />
        <Parallax translateX={['100px', '-100px']}>
          <Welcome />
        </Parallax>
      </div>
    </div>
  )
}