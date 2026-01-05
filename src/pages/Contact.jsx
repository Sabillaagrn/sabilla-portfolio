import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

const Contact = () => {
  const formRef = useRef()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          formRef.current.reset()

          setTimeout(() => {
            setSuccess(false)
          }, 3000)
        },
        (error) => {
          setLoading(false)
          console.error(error)
        }
      )
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden
                 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900
                 py-28"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-16 lg:grid-cols-2"
        >
          {/* LEFT */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white">
              Let’s Connect
            </h2>
            <p className="mb-8 text-white/60 leading-relaxed max-w-lg">
              I’m always open to discussing new projects, collaborations,
              or simply exchanging ideas about technology and design.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sabillaanggraeni@gmail.com"
                className="flex items-center gap-4 text-white/70 hover:text-white transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg
                                 bg-white/10 border border-white/20">
                  <Mail size={20} />
                </span>
                <span className="text-sm">sabillaanggraeni172@gmail.com</span>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg
                                 bg-white/10 border border-white/20">
                  <Github size={20} />
                </span>
                <span className="text-sm">github.com/Sabillaagrn</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg
                                 bg-white/10 border border-white/20">
                  <Linkedin size={20} />
                </span>
                <span className="text-sm">linkedin.com/in/sabilla-anggraeni/</span>
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-white/20
                       bg-white/10 backdrop-blur-xl
                       p-8 shadow-xl"
          >
            <div className="mb-6">
              <label className="mb-2 block text-sm text-white/70">
                Your Name
              </label>
              <input
                name="user_name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-lg bg-white/10
                           border border-white/20 px-4 py-3
                           text-white placeholder:text-white/40
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-white/70">
                Email Address
              </label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg bg-white/10
                           border border-white/20 px-4 py-3
                           text-white placeholder:text-white/40
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm text-white/70">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your idea or project..."
                className="w-full rounded-lg bg-white/10
                           border border-white/20 px-4 py-3
                           text-white placeholder:text-white/40
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r
                         from-indigo-500 to-purple-500
                         py-3 text-sm font-medium text-white
                         shadow-lg shadow-indigo-500/30
                         hover:opacity-90 transition
                         disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>

      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50
                       rounded-xl border border-white/20
                       bg-white/10 backdrop-blur-xl
                       px-6 py-4 text-sm text-white
                       shadow-xl"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact
