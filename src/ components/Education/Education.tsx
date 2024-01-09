import "./Education.css"
import collegeLogo from "./../../../public/logos/Cornell_University_Logo.png"
import hsLogo from "./../../../public/logos/central-bucks-south.png"



const Course = (props: { number: string, name: string }) => {
  return (
    <div className="course">
      <div><span
        style={
          {
            fontWeight: "bold",
            fontSize: "30px"
          }
        }
      >{props.number}</span>  {props.name}</div>
    </div >
  )
}

const CollegeEducation = () => {
  return (
    <div className="college-education">
      <div
        className="college-header"
      >
        <img src={collegeLogo} className="college-logo" />
        <h1 className="education-header">Cornell University</h1>
      </div>

      <div className="education-content">
        <div style={
          {
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px",
          }
        }>
          <p>Major: Computer Science, Mathematics</p>
          <p>Date: 2022 - Present</p>
          <p>Grade: 3.963 / 4</p>
          <p>Applicable Courses: </p>
        </div>

        <div className="courses">
          <Course number="CS 2112" name="Honors Object Oriented Design and Data Structures" />
          <Course number="CS 2800" name="Discrete Structures" />
          <Course number="CS 3110" name="Data Structures and Functional Programming" />
          <Course number="CS 3410" name="Computer System Organization and Programming" />
          <Course number="CS 4820" name="Introduction to Analysis of Algorithms" />
          <Course number="CS 4780" name="Introduction to Machine Learning (Currently Taking)" />
          <Course number="CS 4110" name="Programming Languages and Logics (Currently Taking)" />
          <Course number="MATH 2210" name="Linear Algebra" />
          <Course number="MATH 2220" name="Multivariable Calculus" />
          <Course number="MATH 4710" name="Probability (Currently Taking)" />
          <Course number="ECON 1120" name="Introductory Macroeconomics" />
          <Course number="RUSSA 3305" name="Russian Reading and Writing for Heritage Speakers" />


        </div>
      </div>

    </div >
  )
}

const HighSchoolEducation = () => {
  return (
    <div className="college-education">
      <div
        className="college-header"
      >
        <img src={hsLogo} className="college-logo" />
        <h1 className="education-header">Central Bucks High School South</h1>
      </div>

      <div className="education-content">
        <div style={
          {
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px"
          }
        }>
          <p>Date: 2019-2022</p>
          <p>Grade: 4.32 / 4</p>
          <p>Applicable Courses: </p>
        </div>
        <div className="courses">
          <Course number={"AP"} name={"Computer Science A"} />
          <Course number={"AP"} name={"Calculus AB"} />
          <Course number={"AP"} name={"Calculus BC"} />
          <Course number={"AP"} name={"Statistics"} />
          <Course number={"AP"} name={"Physics C : Mechanics"} />
          <Course number={"AP"} name={"Chemistry"} />
          <Course number={"AP"} name={"Biology"} />
          <Course number={"AP"} name={"Microeconomics"} />

        </div>


      </div>

    </div >
  )
}

export default function Education() {
  return (
    <div id="education">
      <CollegeEducation />
      <HighSchoolEducation />
    </div>
  )
}