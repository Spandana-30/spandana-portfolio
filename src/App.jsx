import Navbar from "./Components/Layout/Navbar"
import Hero from "./Components/Sections/Hero"
import About from "./Components/Sections/About"
import Skills from "./Components/Sections/Skills"
import Projects from "./Components/Sections/Projects"
import Contact from "./Components/Sections/Contact"
import Footer from "./Components/Layout/Footer"


function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white relative overflow-hidden">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
