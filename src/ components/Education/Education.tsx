import "./Education.css"
import collegeLogo from "./../../../public/logos/Cornell_University_Logo.png"




const Course = (props: { number: string, name: string }) => {
  return (
    <li className="course">
      <div>{props.number}:  </div>
      <div>{props.name}</div>
    </li >
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
            marginBottom: "20px"
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
          <Course number="CS 3110" name="Functional Programming and Data Structures" />
          <Course number="CS 3410" name="Computer System Organization and Programming" />
          <Course number="CS 4820" name="Introduction to Analysis of Algorithms" />
          <Course number="MATH 2210" name="Linear Algebra" />
          <Course number="MATH 2220" name="Multivariable Calculus" />
          <Course number="ECON 1120" name="Introductory Macroeconomics" />
          <Course number="RUSSA 3305" name="Russian Reading and Writing for Heritage Speakers" />
        </div>
      </div>

    </div >
  )
}



export default function Education() {
  return (
    <div id="education">
      <CollegeEducation />
    </div>
  )
}