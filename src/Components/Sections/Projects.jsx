import { Card, CardContent } from "./Components/ui/card"
import { Badge } from "./Components/ui/badge"

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 text-white">
      
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* MERN Project */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              
              <h3 className="text-xl text-cyan-500 font-semibold">
                Secure User Management System
              </h3>

              <p className="text-slate-400">
                Built a full-stack MERN application with JWT-based authentication, 
                protected routes, and role-based access control for secure user management.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>MongoDB</Badge>
                <Badge>JWT</Badge>
              </div>

              <div className="flex gap-4 text-sm">
                <a href="#" className="text-slate-300 hover:text-white">GitHub</a>
              </div>

            </CardContent>
          </Card>

          {/* Rate Limiter Project */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              
              <h3 className="text-xl text-cyan-500 font-semibold">
                API Rate Limiter & Monitoring System
              </h3>

              <p className="text-slate-400">
                Developed a backend system to limit API requests per user/IP, 
                using middleware to track request frequency and improve system reliability.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Middleware</Badge>
              </div>

              <div className="flex gap-4 text-sm">
                <a href="#" className="text-slate-300 hover:text-white">GitHub</a>
              </div>

            </CardContent>
          </Card>

          {/* Python Project */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              
              <h3 className="text-xl text-cyan-500 font-semibold">
                Video Streaming Data Analysis
              </h3>

              <p className="text-slate-400">
                Performed data cleaning, analysis, and visualization using Python 
                to identify user behavior and generate content recommendations.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Pandas</Badge>
                <Badge>Matplotlib</Badge>
                <Badge>SQL</Badge>
              </div>

              <div className="flex gap-4 text-sm">
                <a href="#" className="text-slate-300 hover:text-white">GitHub</a>
              </div>

            </CardContent>
          </Card>

        </div>

      </div>

    </section>
  )
}

export default Projects
