import "./Experience.css"
import cornellLogo from "./../../../public/logos/Cornell_University_Logo.png"



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
      <div className="experience-instance-header">
        <img src={cornellLogo} alt="" className="experience-logo" />
        <div className="employer">Cornell Computer Science Course Management System X (CMSX)</div>
      </div>

      <div className="position-name">Full Stack Software Engineer</div>
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
          <li>Developed a system where professors and TAs can use a spreadsheet to efficiently grant extensions to students</li>
          <li>Testing and reviewing code</li>
        </ul>
      </div>
    </div>
  )
}

const TAExperience = () => {
  return (
    <div className="experience-instance">
      <div className="experience-instance-header">
        <img src={cornellLogo} alt="" className="experience-logo" />
        <div className="employer">Cornell Bowers CIS</div>
      </div>

      <div className="position-name">Teaching Assistant</div>
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
          <li>Grading homework assignments and exams</li>
          <li>Leading recitations</li>
          <li>Managing small groups of students in completing a final project</li>


        </ul>
      </div>
    </div>
  )
}


export default function Experience() {
  return (
    <div className="hidden">
      <CMSXExperience />
      <TAExperience />
    </div>
  )
}