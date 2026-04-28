function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 text-white">
      
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Let’s Connect
        </h2>

        <p className="text-slate-400 mb-8">
          I’m currently looking for opportunities as a developer. 
          If you have a role, project, or just want to connect — feel free to reach out.
        </p>

        <div className="flex justify-center gap-8 text-sm">

          <a 
            href="mailto:spandanap3011@gmail.com" 
            className="text-slate-300 hover:text-white transition"
          >
            Email
          </a>

          <a 
            href="https://github.com/Spandana-30" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition"
          >
            GitHub
          </a>

          <a 
            href="https://linkedin.com/in/spandana-p-b2bb453a7" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

        <p className="text-xs text-slate-500 mt-6">
          Bengaluru, India • Open to full-time roles
        </p>

      </div>

    </section>
  )
}

export default Contact