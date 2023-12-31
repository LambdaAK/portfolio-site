import "./Experience.css"
import cornellLogo from "./../../../public/logos/Cornell_University_Logo.png"
import staplesLogo from "./../../../public/logos/staples-logo.png"


const Skill = (props: { name: string }) => {
  return (
    <div className="skill">
      {props.name}
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

        <div className="position-name">Full Stack Software Engineer</div>
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
        <Skill name={"Git"} />


      </div>

      <div className="responsibilities">
        Responsibilities:
        <ul>
          <li>Developed a system where professors and TAs can use a CSV spreadsheet to efficiently grant extensions to students</li>
          <li>Frontend coding in HTML, CSS, JS, React</li>
          <li>Backend coding in Java</li>
          <li>Testing and reviewing code</li>
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
          <li>Facilitating office hours to help with assignments and exam preparation</li>
          <li>Grading homework assignments/projects and exams</li>
          <li>Leading recitations</li>
          <li>Managing small groups of students in completing a final project</li>
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
      <CMSXExperience />
      <TAExperience />
      <StaplesExperience />
    </div>
  )
}