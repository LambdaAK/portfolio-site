import { motion } from "framer-motion"
import ProjectDisplay, { ProjectDisplayProps } from "../ProjectDisplay/ProjectDisplay"
import "./Projects.css"
import { TypeAnimation } from "react-type-animation"

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

interface InputOutputPair {
  input: string,
  output: string,
}

interface DemoProps {
  description: string,
  pairs: InputOutputPair[]
}

const demoProps: DemoProps[] = [
  {
    description: "Option Monad",
    pairs: [
      {
        input:
          `type Option a =
  | None
  | Just (a)`
        ,
        output: "Option: * -> *"
      },
      {
        input:

          `let lift f x =
  switch x =>
  | None -> None
  | Just v -> Just (f v)
  end`,
        output: "lift: (a -> b) -> Option a -> Option b"

      },
      {
        input:
          `let (>>=) x f =
  switch x =>
  | None -> None
  | Just v -> f v
  end`,
        output: "(>>=): Option a -> (a -> Option b) -> Option b"
      },
      {
        input:
          `(Just 42) >>= (\\ x -> Just (x + 1))
          >>= (\\ x -> Just (x * x))
          `,
        output: "Just (86): Option Int"
      },
      {
        input:
          `None
    >>= (\\ x -> Just (x + 1))
    >>= (\\ x -> Just (x * x))
          `,
        output: "None: Option Int"
      }
    ]
  },
  {
    description: "Higher-Order Functions over lists",
    pairs: [
      {
        input: `let rec reduce_left op arr acc =
      switch arr =>
      | [] -> acc
      | h :: t -> reduce_left op t (op acc h)
      end`,
        output: "reduce_left: (a -> b -> a) -> [b] -> a -> a: function",
      },
      {
        input: `let rec reduce_right op acc arr =
      switch arr =>
      | [] -> acc
      | h :: t -> op h (reduce_right op acc t)
      end`,
        output: "reduce_right: (a -> b -> b) -> b -> [a] -> b: function",
      },
      {
        input: `let rec map f arr =
      switch arr =>
      | [] -> []
      | h :: t -> f h :: map f t
      end
        
        `,
        output: "map: (a -> b) -> [a] -> [b]: function",
      },
      {
        input: `let rec filter p arr =
      switch arr =>
      | [] -> []
      | h :: t ->
        if p h then h :: filter p t
        else filter p t
      end
        
        `,
        output: "filter: (a -> Bool) -> [a] -> [a]: function",
      }
    ]
  },
  {
    description: "Binary Tree Functor",
    pairs: [
      {
        input:
          `type Tree a =
  | Leaf
  | Node (a, Tree a, Tree a)`
        ,
        output: "Tree: * -> *"
      },
      {
        input:
          `let rec map_tree f tree =
  switch tree =>
  | Leaf -> Leaf
  | Node (v, l, r) ->
      Node (f v, lift f l, lift f r)
  end
        
        `,
        output: "map_tree: (a -> b) -> Tree a -> Tree b"
      },
      {
        input:
          `let rec inorder t =
  switch t =>
  | Leaf -> []
  | Node (l, v, r) ->
      inorder l ++ [v] ++ inorder r
  end
        `
        ,
        output: "inorder: Tree a -> [a]"
      }
    ]
  },
  {
    description: "Syntactic sugar for lists",
    pairs: [
      {
        input: "[x * x | x <- [1, 2, 3, 4, 5]]",
        output: "[1, 4, 9, 16, 25]: [Int]"
      },
      {
        input: "[x + y | x <- [1, 2, 3], y <- [4, 5, 6]]",
        output: "[5, 6, 7, 6, 7, 8, 7, 8, 9]: [Int]"
      },
      {
        input: "[1 ... 10]",
        output: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: [Int]"
      },
      {
        input: `let rec (++) a b = 
  switch a =>
  | [] -> b
  | h :: t -> h :: (t ++ b)
  end
        `,
        output: "(++): [a] -> [a] -> [a]"
      },
      {
        input: `[1, 2, 3, 4] ++ [5, 6, 7, 8]`,
        output: "[1, 2, 3, 4, 5, 6, 7, 8]: [Int]"
      }
    ]
  },
  {
    description: "Infinite Sequences as Polymorphic ADT",
    pairs: [
      {
        input: "type Seq a = | Cons (a, Unit -> Seq a)",
        output: "Seq: * -> *"
      },
      {
        input: `let rec from n = Cons (n, \\ () -> from (n + 1))`,
        output: "from: Int -> Seq Int"
      },
      {
        input: `let hd s =
        switch s =>
        | Cons (x, _) -> x
        end`,
        output: "hd: Seq a -> a"
      },
      {
        input: `let tl s =
        switch s =>
        | Cons (_, f) -> f ()
        end`,
        output: "tl: Seq a -> Seq a"
      },
      {
        input: `let rec map f s =
        switch s =>
        | Cons (x, g) -> Cons (f x, \\ () -> map f (g ()))
        end`,
        output: "map: (a -> b) -> Seq a -> Seq b"
      },
      {
        input: `let rec interleave s1 s2 =
        switch s1 =>
        | Cons (x, f) -> Cons (x, \\ () -> interleave s2 (f ()))
        end`,
        output: "interleave: Seq a -> Seq a -> Seq a"
      }
    ]
  }

]

const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const demoTextsFlattened: (string | number)[] = demoProps.map(demo => {
  /*
  demo is a description and a list of input/output pairs
  for each input/output pair, make a string

  then, make a list fo those strings
  
  */

  const inputOutputPairs: (string | number)[] = demo.pairs.map(pair => {
    return pair.input + "\n\n" + pair.output
  })

  return inputOutputPairs;

}).flat()

const demoTexts = shuffle(demoTextsFlattened).flatMap(text => [text, 4000])

const LambdaScriptDemo = () => {

  return (
    <motion.pre className="ls-demo">
      <TypeAnimation
        sequence={demoTexts}
        wrapper="span"
        speed={85}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
        className="ls-demo-text"
      />
    </motion.pre >
  )
}

const projectInfo: ProjectDisplayProps[] = [

  {
    name: "LambdaScript",
    pictures: [],
    description: "LambdaScript is a statically-typed functional programming language designed to make it easy to write elegant and expressive code.",
    technologies: [
      {
        name: "OCaml",
        icon: "ocaml"
      }
    ],
    github: "https://github.com/LambdaAK/LambdaScript",
    features: [
      "Pattern matching",
      "Type inference",
      "Higher order functions",
      "Currying",
      "Recursive functions",
      "Anonymous functions",
      "Closures"
    ],
    extraComponents: [LambdaScriptDemo]
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
    description: "AlgoSandbox is a powerful tool designed to help you grasp complex algorithms and data structures through visual representation.",
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
    name: "HabitStack",
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
    github: "",
    features: [],
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
    description: "Critter World is a game where you can create your own critters and watch them compete against each other. The critters are written in a custom language called CritterScript, which is a subset of OCaml.",
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
    name: "Portfolio Website",
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