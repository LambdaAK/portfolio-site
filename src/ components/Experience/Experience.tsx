import "./Experience.css"
import cornellLogo from "./../../../public/logos/Cornell_University_Logo.png"
import staplesLogo from "./../../../public/logos/staples-logo.png"
import cmuLogo from "./../../../public/logos/cmu-logo.jpg"


const Skill = (props: { name: string }) => {
  return (
    <div className="skill">
      {props.name}
    </div>
  )
}

const REUSEExperience = () => {
  return (
    <div className="experience-instance">
      <div className="cursor-on-hover">
        <div className="experience-instance-header">
          <img src={cmuLogo} alt="" className="experience-logo" />
          <div className="employer"
            onClick={() => {
              window.open("https://www.cmu.edu/scs/s3d/reuse/")
            }}
          >
            Carnegie Mellon University - Software and Societal Systems Department
          </div>
        </div>

        <div className="position-name">Software Engineer Intern</div>
      </div>

      <div className="date">
        May 2024 - Aug 2024
      </div>

      <div className="skills-header">Skills: </div>
      <div className="skills">

        <Skill name={"Java"} />
        <Skill name={"Python"} />
        <Skill name={"Programming Languages"} />
        <Skill name={"Mathematics"} />

      </div>

      <div className="responsibilities">
        Responsibilities:
        <ul>
        <li>Used Java to implement a polymorphic module system in SASyLF, a proof assistant, drastically improving code reusability.</li>
        <li>Leveraged JavaCC, a parser generator, to implement a recursive descent parser for an extension to SASyLF’s syntax.</li>
        <li>Engineered a highly efficient deep cloning algorithm for a class hierarchy with 100+ classes, utilizing a caching
        mechanism to prevent redundant cloning and infinite loops, ensuring reliable duplication of abstract syntax trees.</li>
        <li>Developed a substitution algorithm designed to switch out parts of an abstract syntax tree with other nodes.</li>
        <li>Created a modular testing framework using Python to automate unit tests and integration tests, ensuring code reliability.</li>
        </ul>
      </div>
    </div>
  )
}

const CMSXExperience = () => {
  return (
    <div className="experience-instance">
      <div className="cursor-on-hover">
        <div className="experience-instance-header">
          <img src={cornellLogo} alt="" className="experience-logo" />
          <div className="employer"
            onClick={() => {
              window.open("https://www.cs.cornell.edu/projects/cms/cmsx/")

            }}
          >Cornell Computer Science Course Management System X (CMSX)</div>
        </div>

        <div className="position-name">Full Stack Software Engineer and Treasurer</div>
      </div>

      <div className="date">
        Aug 2023 - Present
      </div>

      <div className="skills-header">Skills: </div>
      <div className="skills">

        <Skill name={"JavaScript"} />
        <Skill name={"TypeScript"} />
        <Skill name={"React"} />
        <Skill name={"Java"} />
        <Skill name={"Java Server Pages (JSP)"} />
        <Skill name={"Redux"} />
        <Skill name={"Git"} />


      </div>

      <div className="responsibilities">
        Responsibilities:
        <ul>
          <li>Maintain Cornell’s official CS course management system, used by 10,000+ students, ensuring efficiency and reliability.</li>
          <li>Lead a team of developers in rewriting our JSP website in React, modernizing the platform and enhancing responsiveness.</li>
          <li>Migrated CMSX from Redux to a component-level state system, creating a scalable foundation for future development.</li>
          <li>Designed 10+ APIs and serializable data structures, allowing secure data transfer between the backend and frontend.</li>
          <li>Implemented a parser for CSVs in Java and UI in JSP, enabling professors to grant assignment extensions via file upload.</li>
        </ul>
      </div>
    </div>
  )
}

const TAExperience = () => {
  return (
    <div className="experience-instance">
      <div className="cursor-on-hover"
        onClick={() => {
          window.open("https://cis.cornell.edu/")
        }}
      >
        <div className="experience-instance-header">
          <img src={cornellLogo} alt="" className="experience-logo" />
          <div className="employer">Cornell Bowers CIS</div>
        </div>

        <div className="position-name">Teaching Assistant</div>
      </div>

      <div className="date">
        Aug 2023 - Present
      </div>
      <div style={
        {
          display: "flex",
          flexDirection: "column",
        }
      }>
        <div className="skills-header">Skills: </div>
        <div className="skills">

          <Skill name={"OCaml"} />
          <Skill name={"Teaching"} />
          <Skill name={"Grading"} />
          <Skill name={"Leadership"} />

        </div>
      </div>

      <div className="skills-header"></div>
      <div className="responsibilities">
        Responsibilities:
        <ul>
          <li>Recipient of the CS Course Staff Award for providing exceptional service to students (awarded to less than 10% of TAs).</li>
          <li>Lead presentation-style recitations, giving clear and engaging explanations of course content to 30+ students per week.</li>
          <li>Hold office hours to help students grasp rigorous proofs about greedy, dynamic programming, and graph algorithms.</li>
          <li>Assist in debugging code using Python, Java, C++, and OCaml, and evaluating projects, problem sets, and exams.</li>
          <li>Mentored 5 groups of 3-5 students as they completed final projects, providing technical insights and problem-solving advice.</li>
        </ul>
      </div>
    </div>
  )
}

const StaplesExperience = () => {
  return (
    <div className="experience-instance">
      <div className="experience-instance-header">
        <img src={staplesLogo} alt="" className="experience-logo" />
        <div className="employer">Staples</div>
      </div>

      <div className="position-name">Sales Associate</div>
      <div className="date">
        Jul 2021 - Sep 2021
      </div>
      <div style={
        {
          display: "flex",
          flexDirection: "column",
        }
      }>
        <div className="skills-header">Skills: </div>
        <div className="skills">

          <Skill name={"Casheering"} />
          <Skill name={"Supplies Stocking"} />
          <Skill name={"Sales"} />
        </div>
      </div>

      <div className="skills-header"></div>
      <div className="responsibilities">
        Responsibilities:
        <ul>
          <li>Casheering</li>
          <li>Stocking office supplies</li>
          <li>Demonstrated the ability to work quickly and efficiently</li>
        </ul>
      </div>
    </div>
  )
}


export default function Experience() {
  return (
    <div className="">
      <REUSEExperience />
      <CMSXExperience />
      <TAExperience />
      <StaplesExperience />
    </div>
  )
}