import './App.css'
import Nav from './ components/Nav/Nav'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'

function App() {

  return (

    <div id="app">
      <Nav />

      <i className="devicon-react-original"></i>

      <i className="devicon-typescript-plain"></i>


      <WelcomeSection />
      <Projects />

    </div>
  )
}

export default App
