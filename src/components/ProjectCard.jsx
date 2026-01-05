// ProjectCard.js
import { motion } from "framer-motion"
import { Figma, Github } from "lucide-react"

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden
                 hover:border-white/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Figma Link */}
          <motion.a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20
                      hover:bg-white/20 transition-colors"
          >
            <Figma size={20} className="text-white" />
          </motion.a>

          {/* Github Link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20
                      hover:bg-white/20 transition-colors"
          >
            <Github size={20} className="text-white" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-white/60 mb-4 line-clamp-2">
          {project.desc}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}

export default ProjectCard
