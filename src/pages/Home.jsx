import { motion } from "framer-motion"

const Home = () => {
  const heroText = ["Hi,", "I'm", "Sabilla"]

  // Fungsi scroll ke section
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section 
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl px-4 sm:px-6 text-center"
      >
        {/* Hero Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 text-xs tracking-widest uppercase text-indigo-400"
        >
          Welcome to my portfolio
        </motion.span>

        {/* Hero Title */}
        <h1 className="mb-6 font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex justify-center flex-wrap gap-2">
          {heroText.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 100 }}
              className={word === "Sabilla" ? "bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent" : "text-white"}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-2 text-lg sm:text-xl md:text-2xl text-white/70"
        >
          Informatics Engineering Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mx-auto mb-12 max-w-xl text-sm sm:text-base text-white/50"
        >
          Front-End Developer & UI/UX Designer crafting modern, clean, and meaningful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mx-auto grid max-w-xs grid-cols-3 gap-3 sm:max-w-3xl sm:gap-6"
        >
          {[
            { label: "Expertise", value: "Front-End" },
            { label: "Focus", value: "UI/UX" },
            { label: "Status", value: "Available" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6, scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl transition hover:bg-white/10"
            >
              <p className="text-xs sm:text-sm text-white/50">{item.label}</p>
              <p className="text-sm sm:text-base font-semibold text-white">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
