import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import simpleParallax from 'simple-parallax-js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
  ,
)

setTimeout(() => {

  let welcome = document.getElementById("welcome")!
  let projects = document.getElementById("projects")!
  let courses = document.getElementById("courses")!
  let contact = document.getElementById("contact")!
  let experience = document.getElementById("experience")!
  let education = document.getElementById("education")!

  let elements = [
    welcome,
    projects,
    courses,
    contact,
    experience,
    education
  ]


}, 500)



