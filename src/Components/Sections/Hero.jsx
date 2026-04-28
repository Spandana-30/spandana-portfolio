import { Button } from "../ui/button"

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <p className="text-slate-400 mb-4">Hi, I'm</p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
          Spandana P
        </h1>

        <p className="text-slate-400 max-w-xl mx-auto mb-6">
          I enjoy building simple, clean and meaningful web applications. 
  Currently exploring full-stack development while working on real-world projects and improving my problem-solving skills.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects">
           <Button>View Projects</Button>
         </a>
          <a href="#contact">
            Contact me →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
