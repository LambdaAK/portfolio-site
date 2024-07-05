import ProjectDisplay, { ProjectDisplayProps } from "../ProjectDisplay/ProjectDisplay"
import "./Projects.css"

import algoSandboxWelcomeVideo from "./../../../public/AlgoSandbox pictures/algosandbox title video.mp4"
import algoSandboxMergeSortVideo from "./../../../public/AlgoSandbox pictures/merge_sort_video-1.mp4"
import algoSandboxBubbleSortVideo from "./../../../public/AlgoSandbox pictures/bubble_sort_video.mp4"
import algoSandboxLeftBisectVideo from "./../../../public/AlgoSandbox pictures/left_bisect_video.mp4"
import algoSandboxSearchDemo from "./../../../public/AlgoSandbox pictures/tags_demo.mp4"
import algoSandboxSelectionSortOverview from "./../../../public/AlgoSandbox pictures/selection_sort_overview.mp4"

import hsHome from "./../../../public/HabitStack pictures/home.png"
import hsHabitStacks from "./../../../public/HabitStack pictures/stacks.png"
import hsHabitCreator from "./../../../public/HabitStack pictures/good_habits3.png"
import hsServer from "./../../../public/HabitStack pictures/servers.png"
import hsTasks from "./../../../public/HabitStack pictures/tasks.png"
import hsStacks2 from "./../../../public/HabitStack pictures/stacks2.png"

import critterWorldCode from "./../../../public/critter world pictures/critter_world_code.png"
import critterWorldTitle from "./../../../public/critter world pictures/critter_world_title.png"

import critterWorldRecording1 from "./../../../public/critter world pictures/critter_world_recording_1.mp4"
import spiralCritter from "./../../../public/critter world pictures/spiral_critter.mp4"

import linearRegression from "./../../../public/ML Library pictures/linear_regression.png"
import univarOptimizer from "./../../../public/ML Library pictures/univar_optimizer.png"

import code from "./lsCode"

const StaticallyTypedFeature = () => {
  return (
    <div className="ls-feature">
      <h1 className="feature-header">
        Statically-Typed
      </h1>
      <p className="feature-desc">
        Every expression in LambdaScript has a type which is determined at compile time. All types that are composed using function application have to match up.
        If they don't, the compiler will reject the program.

        Not only does the type system prevent runtime errors, but it is also a lanauge in itself for expressing the structure of a program.
      </p>
      <div className="expand-button"
        onClick={
          () => {
            const demo = document.getElementById("statically-typed-demo")
            if (demo) {
              if (demo.style.display === "none") {
                demo.style.display = "flex"
              }
              else {
                demo.style.display = "none"
              }
            }
          }
        }
      >
        Click to expand
      </div>
      <div id="statically-typed-demo"
        style={
          {
            display: "none"
          }
        }
      >
        <pre
          className="demo-code"
        >
          {
            (() => {
              const in1 = "let x = 1\n\n"
              const out1 = "x = 1: Int\n\n"
              const in2 = "let f x = x + 1\n\n"
              const out2 = "f = (Int -> Int): function\n\n"
              return (
                <>
                  <span className="input">{in1}</span>
                  <span className="output">{out1}</span>
                  <span className="input">{in2}</span>
                  <span className="output">{out2}</span>
                  <span className="input">{code.foo2}</span>
                  <span className="output">{code.foo2Type}</span>
                </>
              )
            })()
          }
        </pre>
      </div>
    </div>
  )
}

const TypeInferenceFeature = () => {
  return (
    <div className="ls-feature">
      <h1 className="feature-header">
        Type Inference
      </h1>
      <p className="feature-desc">
        LambdaScript's powerful type inference mechanism makes it so you don't have to write out the types of expressions.

        During compile time, the type inference engine will infer the most general type of most expressions, and assign that type to the expression in the static environment.

      </p>
      <div className="expand-button"
        onClick={
          () => {
            const demo = document.getElementById("type-inference-demo")
            if (demo) {
              if (demo.style.display === "none") {
                demo.style.display = "flex"
              }
              else {
                demo.style.display = "none"
              }
            }
          }
        }
      >
        Click to expand
      </div>
      <div id="type-inference-demo"
        style={
          {
            display: "none"
          }
        }
      >
        <pre
          className="demo-code"
        >
          <span className="input">{code.map}</span>
          <span className="output">{code.mapType}</span>
          <span className="input">{code.foo}</span>
          <span className="output">{code.fooType}</span>
        </pre>
      </div>
    </div>
  )
}

const PolymorphicADTsFeatures = () => {
  return (
    <div className="ls-feature">
      <h1 className="feature-header">
        Polymorphic ADTs
      </h1>
      <p className="feature-desc">
        Sum and product types are the building blocks of data structures in LambdaScript.
      </p>
      <div className="expand-button"
        onClick={
          () => {
            console.log("clicked")
            const demo = document.getElementById("poly-adts-demo")
            if (demo) {
              console.log("demo found")
              if (demo.style.display === "none") {
                console.log('display is none, setting to flex')
                demo.style.display = "flex"
              }
              else {
                console.log("display is flex setting to none")
                demo.style.display = "none"
              }
            }
          }
        }
      >
        Click to expand
      </div>
      <div id="poly-adts-demo"
        style={
          {
            display: "none"
          }
        }
      >
        <pre
          className="demo-code"
        >
          {
            (() => {
              return (
                <>
                  <span className="input">{code.option}</span>
                  <span className="output">{code.optionType}</span>

                </>
              )
            })()
          }
        </pre>
        <div className="explanation">
          Here, <span className="input">Option</span> is a type constructor, and <span className="input">a</span> is a type variable
        </div>
        <div className="explanation">
        </div>
        <pre
          className="demo-code"
        >
          {
            (() => {
              return (
                <>
                  <span className="input">{code.tree}</span>
                  <span className="output">{code.treeType}</span>

                </>
              )
            })()
          }
        </pre>
      </div>
    </div >
  )
}
const KindsFeature = () => {
  return (
    <div className="ls-feature">
      <h1 className="feature-header">
        Higher-kinded types
      </h1>
      <p className="feature-desc">
        Kinds are the types of types. They are used to express the functionality of type constructors.
      </p>
      <div className="expand-button"
        onClick={
          () => {
            const demo = document.getElementById("kinds-demo")
            if (demo) {
              if (demo.style.display === "none") {
                demo.style.display = "flex"
              }
              else {
                demo.style.display = "none"
              }
            }
          }
        }
      >
        Click to expand
      </div>
      <div id="kinds-demo"
        style={
          {
            display: "none"
          }
        }
      >
        <pre
          className="demo-code"
        >
          {
            (() => {
              return (
                <>
                  <span className="input">{code.app}</span>
                  <span className="output">{code.appType}</span>
                  <span className="input">{code.app2}</span>
                  <span className="output">{code.app2Type}</span>
                </>
              )
            })()
          }
        </pre>
      </div>
    </div>
  )
}

const PatternMatchingFeature = () => {
  return (
    <div className="ls-feature">
      <h1 className="feature-header">
        Pattern Matching
      </h1>
      <p className="feature-desc">
        Pattern matching is a powerful tool for deconstructing data structures and performing different computations based on the structure of the data.
      </p>
      <div className="expand-button"
        onClick={
          () => {
            const demo = document.getElementById("pattern-matching-demo")
            if (demo) {
              if (demo.style.display === "none") {
                demo.style.display = "flex"
              }
              else {
                demo.style.display = "none"
              }
            }
          }
        }
      >
        Click to expand
      </div>
      <div id="pattern-matching-demo"
        style={
          {
            display: "none"
          }
        }
      >
        <div className="explanation">Here's how we can use pattern matching to define an option monad</div>
        <pre
          className="demo-code">
          <span className="input">{code.option}</span>
          <span className="output">{code.optionType}</span>
          <span className="input">{code.optionReturn}</span>
          <span className="output">{code.optionReturnType}</span>
          <span className="input">{code.optionBind}</span>
          <span className="output">{code.optionBindType}</span>
        </pre>
      </div>
    </div>
  )
}

const InfixFeature = () => {
  return (
    <div className="ls-feature">
      <h1 className="feature-header">
        Custom Infix Functions
      </h1>
      <p className="feature-desc">
        Custom infix functions allow you to define your own operators and use them in your code, making it more concice and readable.
      </p>
      <div className="expand-button"
        onClick={
          () => {
            const demo = document.getElementById("infix-demo")
            if (demo) {
              if (demo.style.display === "none") {
                demo.style.display = "flex"
              }
              else {
                demo.style.display = "none"
              }
            }
          }
        }
      >
        Click to expand
      </div>
      <div id="infix-demo"
        style={
          {
            display: "none"
          }
        }
      >
        <div className="explanation">
          Here's how we can define a function application operator
        </div>

        <pre
          className="demo-code">
          <span className="input">{code.infix1}</span>
          <span className="output">{code.infix1Type}</span>
        </pre>

        <div className="explanation">
          Here's how we can define a function composition operator
        </div>

        <pre className="demo-code">
          <span className="input">{code.infix2}</span>
          <span className="output">{code.infix2Type}</span>
        </pre>

        <div className="explanation">
          This infix operator takes a subsequence of the natural numbers
        </div>

        <pre className="demo-code">
          <span className="input">{code.infix3}</span>
          <span className="output">{code.infix3Type}</span>
        </pre>

      </div>
    </div>
  )
}

const LSFeatures = () => {
  return (
    <>
      <h1
        className="ls-features-header"
      >
        Features
      </h1>
      <div className="ls-features">
        <StaticallyTypedFeature />
        <TypeInferenceFeature />
        <PolymorphicADTsFeatures />
        <KindsFeature />
        <PatternMatchingFeature />
        <InfixFeature />
      </div>
    </>
  )
}

const projectInfo: ProjectDisplayProps[] = [

  {
    name: "LambdaScript",
    pictures: [],
    description: `
    LambdaScript is a statically-typed functional programming language designed to make it easy 
    to write elegant and expressive code.

    It features a powerful type system underpinned by "kinds", which allows for higher-order arithmetic on types.

    It also features a type inference engine similar to the Hindley-Milner algorithm, which can infer the types of most expressions, so you don't have to write them out.

    After working on LambdaScript for about a year, I identified a few key areas where I could improve the interpreter. I decided to start from scratch and rewrite the interpreter for a similar language in TypeScript.
    
    This new version of LambdaScript has a similar syntax to the original, but with a more robust and reliable compiler architecture that is easier to maintain and extend.

    `,
    technologies: [
      {
        name: "OCaml",
        icon: "ocaml"
      },
      {
        name: "TypeScript",
        icon: "typescript"
      }
    ],
    url: "",
    github: "https://github.com/LambdaAK/LambdaScript",
    features: [
      "Pattern matching",
      "Type inference",
      "Parametric polymorphism",
      "Recursion",
      "Algebraic data types"
    ],
    extraComponents: [LSFeatures]
  }, 
  {
    name: "AlgoSandbox",
    pictures: [
      algoSandboxWelcomeVideo,
      algoSandboxSelectionSortOverview,
      algoSandboxMergeSortVideo,
      algoSandboxBubbleSortVideo,
      algoSandboxLeftBisectVideo,
      algoSandboxSearchDemo
    ],
    description: `
    
    AlgoSandbox is a powerful tool designed to help you grasp complex algorithms and 
    data structures through visual representation.

    It features a variety of algorithms and data structures, including:
      selection sort, insertion sort, merge sort, bubble sort, binary search (left bisect and right bisect), stack, queue, and more.

    Each algorithm and data stucture has a sandbox where you can give it sample inputs and watch it run.

    Each algorithm and data structure also has information regarding its time/space complexity, a description of how it works, and a few implementations.

    Each algorithm and data structure has a list of tags, which can be used to searching by tags. There is also a search bar to search by name.
    
    `,
    url: "http://algosandbox.alexkozik.com",
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
    name: "Critter World",
    pictures: [
      critterWorldRecording1,
      spiralCritter,
      critterWorldTitle,
      critterWorldCode,

    ],
    url: "",
    description: `
    Critter World is an interactive artificial life simulator. It features a custom programming language, which represents the genome (behavior) of each critter species. Critters can be programmed to move, eat, reproduce, and attack other critters.
    When a critter reproduces, the offspring inherits the genome (program) of its parent, but with mutations. The mutations are modeled as random, but valid changes in the program that controls the critter.
    This was my final project for CS 2112, completed in a group of 3.
    `,
    technologies: [
      {
        name: "Java",
        icon: "java"
      },
      {
        name: "JavaFX",
        icon: "Java"
      }
    ],
    github: "",
    features: [],
    extraComponents: []
  },
  {
    name: "HabitStack",
    url: "",
    pictures: [
      hsHome,
      hsHabitStacks,
      hsHabitCreator,
      hsServer,
      hsStacks2,
      hsTasks
    ],
    description: "HabitStack is a habit tracker that helps you build good habits and break bad ones. It features chat functionality between users, a calendar to track your progress, and a habit stack creator for implementing habits into your daily routine.",
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
        name: "JavaScript",
        icon: "javascript"
      },
      {
        name: "SASS",
        icon: "sass"
      },
      {
        name: "Framer-Motion",
        icon: "css3"
      },
      {
        name: "Express.js",
        icon: "JavaScript"
      },
      {
        name: "Firebase",
        icon: "firebase"
      }
    ],
    github: "https://github.com/LambdaAK/HabitStack",
    features: [],
    extraComponents: []
  },
  {
    name: "ML Library",
    url: "",
    pictures: [linearRegression, univarOptimizer],
    description: "A machine learning library implemented in Python. It features a variety of machine learning algorithms, including linear regression, perceptron, PCA, clustering, and more!",
    technologies: [
      {
        name: "Python",
        icon: "python"
      },
      {
        name: "NumPy",
        icon: "numpy"
      },
      {
        name: "SymPy",
        icon: "sympy"
      }
    ],
    github: "https://github.com/LambdaAK/ML-Library",
    features: [],
    extraComponents: []
  },
  {
    name: "Portfolio Website",
    url: "",
    pictures: [],
    description: "",
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
    github: "https://github.com/LambdaAK/portfolio-site",
    features: [],
    extraComponents: []
  }
]


export default function Projects() {
  return (
    <div id="projects">
      {
        projectInfo.map(project => <ProjectDisplay {...project} />)
      }
    </div>
  )
}