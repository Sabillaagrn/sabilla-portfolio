import { motion } from "framer-motion"
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiFigma,
  SiLaravel,
  SiPhp,
  SiKotlin,
  SiGit,
} from "react-icons/si"
import { GraduationCap, Code2, Sparkles, Rocket } from "lucide-react"

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden
                 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950
                 py-24 md:py-32"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Header with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.span 
            className="inline-block text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white">
            Get to know me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            A bit about my background and what I do
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className=" gap-6 mb-16">
          
          {/* Large Story Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 md:p-10
                       hover:border-indigo-400/50 transition-all duration-500 group"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4">
              <Sparkles className="text-indigo-400" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              My Background
            </h3>
            <p className="text-base text-white/70 leading-relaxed mb-3">
              I'm an Informatics Engineering student focused on front-end development and UI/UX design. I enjoy building clean, functional interfaces that work well and look good.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              My approach combines design thinking with technical skills to create websites and apps that solve real problems.
            </p>
          </motion.div>
        </div>

        {/* What I Do - Colorful Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              icon: Code2,
              title: "Front-End Dev",
              desc: "Building responsive websites with React, JavaScript, and modern tools.",
              gradient: "from-blue-500/20 to-cyan-500/20",
              iconColor: "text-cyan-400",
              borderHover: "hover:border-cyan-400/50",
            },
            {
              icon: Sparkles,
              title: "UI/UX Design",
              desc: "Designing user-friendly interfaces with attention to detail and usability.",
              gradient: "from-purple-500/20 to-pink-500/20",
              iconColor: "text-pink-400",
              borderHover: "hover:border-pink-400/50",
            },
            {
              icon: Rocket,
              title: "Learning",
              desc: "Always exploring new technologies and improving my development skills.",
              gradient: "from-orange-500/20 to-yellow-500/20",
              iconColor: "text-yellow-400",
              borderHover: "hover:border-yellow-400/50",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group rounded-3xl border border-white/20 bg-gradient-to-br ${item.gradient} backdrop-blur-xl p-8
                         ${item.borderHover} transition-all duration-500 cursor-pointer`}
            >
              <div className={`mb-6 inline-flex rounded-2xl bg-white/10 p-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={item.iconColor} size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-10 text-center text-3xl md:text-4xl font-bold">
            <span className="bg-white bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h3>

          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-6 md:p-12 overflow-hidden">
            
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory
                            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { Icon: SiReact, name: "React", color: "#61DAFB" },
                { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
                { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
                { Icon: SiVite, name: "Vite", color: "#646CFF" },
                { Icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
                { Icon: SiPhp, name: "PHP", color: "#777BB4" },
                { Icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
                { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
                { Icon: SiGit, name: "Git", color: "#F05032" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  /* Added shrink-0 and snap-center here */
                  className="group relative flex flex-col items-center gap-3 shrink-0 snap-center"
                >
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl
                                  group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300
                                  group-hover:shadow-lg group-hover:shadow-white/20">
                    <tech.Icon className="text-4xl transition-all duration-300" style={{ color: tech.color }} />
                  </div>
                  <span className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About