import { motion } from "framer-motion"
import ProjectsSection from "../components/ProjectsSection"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden
      bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900
      py-2"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10">
        <ProjectsSection projects={projects} />
      </div>
    </section>
  )
}

export default Projects
