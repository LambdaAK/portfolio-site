import ProjectDisplay, { ProjectDisplayProps } from "../ProjectDisplay/ProjectDisplay"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./Projects.css"

interface InputOutputPair {
  input: string,
  output: string
}

const pairs: InputOutputPair[] = [
  {
    input: `bind rec map f arr <-
    switch arr =>
      | [] -> []
      | h :: t -> f h :: map f t
    end
  in
  map`,
    output: "(t1 -> t2) -> [t1] -> [t2]: function"
  },
  {
    input: `bind rec filter f arr <-
    switch arr =>
      | [] -> []
      | h :: t ->
        if f h then h :: filter t
        else filter t
      end
  in
  filter`,
    output: `(t1 -> bool) -> [t1] -> [t1]: function`
  },
  {
    input: `bind rec fold op arr acc <-
    switch arr =>
    | [] -> acc
    | h :: t -> fold op t (op acc h)
    end
  in
  fold`,
    output: `(t1 -> t2 -> t1) -> [t2] -> t1 -> t1: function`
  },
  {
    input: `bind rec fold op arr acc <-
    switch arr =>
    | [] -> acc
    | h :: t -> op h (fold op t acc)
    end
  in
  fold`,
    output: `(t1 -> t2 -> t1) -> [t1] -> t2 -> t2: function`
  }
]

const LambdaScriptDemo = () => {
  return (
    <>
      <SectionHeader text="Example Usages" />
      <div className="lambdascript-demo">

        {
          pairs.map(pair => {
            return (
              <div className="lambdascript-in-out">
                <div className="lambdascript-input">
                  <div>
                    Input:
                  </div>
                  <pre className="lambdascript-input-text">
                    {pair.input}
                  </pre>
                </div>
                <div className="lambdascript-output">
                  <div>Output: </div>
                  <pre className="lambdascript-output-text">{pair.output}</pre>
                </div>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

const projectInfo: ProjectDisplayProps[] = [
  {
    name: "AlgoSandbox",
    pictures: [
      "./../../../public/readme pictures/algos.png",
      "./../../../public/readme pictures/home_page.png",
      "./../../../public/readme pictures/merge_sort.png",
      "./../../../public/readme pictures/tags.png"
    ],
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
      },
    ],
    github: "https://github.com/LambdaAK/AlgoSandbox",
    features: [
      "Animated home page",
      "Animated sandboxes for each algorithm/data structure",
      "Home page that's searchable by tags",
      "Responsive design",
    ],
    extraComponents: []
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
    ],
    extraComponents: [LambdaScriptDemo()]
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