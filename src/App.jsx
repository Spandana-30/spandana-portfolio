import Navbar from "./Components/layout/Navbar"
import Hero from "./Components/sections/Hero"
import About from "./Components/sections/About"
import Skills from "./Components/sections/Skills"
import Projects from "./Components/sections/Projects"
import Contact from "./Components/sections/Contact"
import Footer from "./Components/layout/Footer"


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
