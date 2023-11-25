import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectDisplay, { ProjectDisplayProps } from "../ProjectDisplay/ProjectDisplay"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./Projects.css"
import { faCss3, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { useEffect } from "react"


const projectInfo: ProjectDisplayProps[] = [
  {
    name: "AlgoSandbox",
    pictures: [],
    description: "AlgoSandbox is a powerful tool designed to help you grasp complex algorithms and data structures through visual representation. Whether you're a student, educator, or developer, AlgoSandbox provides an intuitive platform to experiment, learn, and teach algorithms in an engaging way.",
    technologies: [
      {
        name: "React",
        icon: "react"
      },
      {
        name: "TypeScript",
        icon: "typescript"
      },
      {
        name: "SASS",
        icon: "sass"
      },
      {
        name: "Framer-Motion",
        icon: "css3"
      }
    ],
    github: "a link",
    features: [
      "Animated home page",
      "Animated sandboxes for each algorithm/data structure",
      "Home page that's searchable by tags",
      "Responsive design",
    ]
  },
  {
    name: "LambdaScript",
    pictures: [],
    description: "Lambdascript is a statically-typed functional programming language designed to make it easy to write elegant and expressive code. It has key features that allow users to write clean and expressive code.",
    technologies: [
      {
        name: "OCaml",
        icon: "ocaml"
      }
    ],
    github: "a link",
    features: [
      "Pattern matching",
      "Type inference",
      "Higher order functions",
      "Currying",
      "Recursive functions",
      "Anonymous functions",
      "Closures"
    ]
  }
]

export default function Projects() {

  return (

    <div id="projects">
      <SectionHeader text="Projects" />
      {

        projectInfo.map(project =>
          <ProjectDisplay {...project} />
        )
      }
    </div>
  )
}