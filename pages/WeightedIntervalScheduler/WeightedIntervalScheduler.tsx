import { AlgoPage, AlgoPageProps, Complexity, Implementation } from "../../components/AlgoPage/AlgoPage"
import { ArrayDisplay, IntervalDisplay } from "../../components/sandboxUtils/sandboxUtils"
import "./WeightedIntervalScheduler.css"




const pythonCode: string = "placeholder"

const javaCode: string = "placeholder"

const cppCode: string = "placeholder"

const jsCode: string = "placeholder"

const implementations: Implementation[] = [
  {
      language: "python",
      code: pythonCode
  },
  {
      language: "java",
      code: javaCode
  },
  {
      language: "cpp",
      code: cppCode
  },
  {
      language: "javascript",
      code: jsCode
  }
]

const complexity: Complexity = {
  bestCaseTime: "O(n)",
  averageCaseTime: "O(n)",
  worstCaseTime: "O(n)",
  bestCaseSpace: "O(n)",
  averageCaseSpace: "O(n)",
  worstCaseSpace: "O(n)"
}

function WeightedIntervalSchedulerSandbox(props: object) {
  return (
    <div className = "weighted-interval-scheduler-sandbox">
      <input type="text" className = "interval-input" placeholder = "Input intervals"/>
      <IntervalDisplay
      elements = {[
        {
          a: 1,
          b: 2,
          properties: []
        },
        {
          a: 10,
          b: 200,
          properties: []
        }
      ]}
      />
    </div>
  )
}

interface Interval {
  a: number,
  b: number
}

interface WeightedIntervalSchedulerState {
  pValues: number[],
  OPTValues: number[],
  optimalSet: Interval[]

}


function parseIntervals()

function weightedIntervalSchedulerStateGenerator(input: string): WeightedIntervalSchedulerState[] {
  return []
}

const props: AlgoPageProps = {
  name: "Weighted Interval Scheduler",
  implementations: implementations,
  overview: [
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
  ],
  complexity: complexity,
  sandbox: () => <WeightedIntervalSchedulerSandbox/>

}

export default function WeightedIntervalScheduler() {
  return (
    <AlgoPage {...props}/>
  )
}