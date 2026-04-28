import { Card, CardContent } from "@/components/ui/card"

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950 text-white">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Programming */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Programming</h3>
              <p className="text-slate-400">
                Python, JavaScript
              </p>
            </CardContent>
          </Card>

          {/* Frontend */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Frontend</h3>
              <p className="text-slate-400">
                React, HTML, CSS, Tailwind CSS
              </p>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Backend</h3>
              <p className="text-slate-400">
                Node.js, Express.js
              </p>
            </CardContent>
          </Card>

          {/* Database */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Database</h3>
              <p className="text-slate-400">
                MongoDB, SQL
              </p>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-lg text-cyan-500 font-semibold mb-4">Tools</h3>
              <p className="text-slate-400">
                Git, GitHub, VS Code
              </p>
            </CardContent>
          </Card>

        </div>

      </div>

    </section>
  )
}

export default Skills