import './App.css'
import Nav from './ components/Nav/Nav'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'

function App() {

  return (

    <div id="app">
      <Nav />

      <WelcomeSection />
      <Projects />

    </div>
  )
}

export default App
