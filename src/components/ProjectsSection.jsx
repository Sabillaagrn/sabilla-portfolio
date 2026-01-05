import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "../data/projects" // data projects
import ProjectCard from "../components/ProjectCard"   // import ProjectCard

export default function ProjectsSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium uppercase tracking-wider text-indigo-400 mb-3"
            >
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60">
              A collection of my recent work — each with its own story and unique challenges
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl
                         text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl
                         text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects scroll area */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="shrink-0 snap-start w-[340px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
