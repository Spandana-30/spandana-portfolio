import { Button } from "./components/ui/button"

function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold">
          Spandana
        </h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-slate-300">About</a>
          <a href="#skills" className="hover:text-slate-300">Skills</a>
          <a href="#projects" className="hover:text-slate-300">Projects</a>
          <a href="#contact" className="hover:text-slate-300">Contact</a>
        </div>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Resume</Button>
        </a>
      
    </div>

    </nav>
  )
}

export default Navbar
