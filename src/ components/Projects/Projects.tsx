import ProjectDisplay, { ProjectDisplayProps } from "../ProjectDisplay/ProjectDisplay"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./Projects.css"

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
        output: "bind: Option a -> (a -> Option b) -> Option b"
      },
      {
        input:
          `(Just 42) >>= (fun x -> Just (x + 1))
          >>= (fun x -> Just (x * x))
          `,
        output: "Just (86): Option Int"
      },
      {
        input:
          `None
    >>= (fun x -> Just (x + 1))
    >>= (fun x -> Just (x * x))
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
          `let rec lift f tree =
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
  }

]

const LambdaScriptDemo = () => {
  return (
    <>
      <SectionHeader text="Example Usages" />
      <div className="lambdascript-demo">

        {
          demoProps.map(props => {
            return (
              <div className="ls-demo">
                <h1 className="ls-ex-desc">
                  {props.description}
                </h1>

                <div className="ls-demo-instance">
                  <h2>Input:</h2>
                  <h2>Output:</h2>
                  {
                    props.pairs.map(pair => {
                      return (
                        <>
                          <pre className="ls-input">
                            {pair.input}
                          </pre>
                          <pre className="ls-output">
                            {pair.output}
                          </pre>
                        </>
                      )
                    })
                  }
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
    description: "Lambdascript is a statically-typed functional programming language designed to make it easy to write elegant and expressive code.",
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