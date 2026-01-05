import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-xl shadow-indigo-500/10">

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3">
            <motion.h1 className="text-lg sm:text-xl font-bold text-white">
              Sabilla Anggraeni<span className="text-indigo-400">.</span>
            </motion.h1>

            {/* Desktop */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    className="block px-3 py-1.5 text-sm text-white/70 group-hover:text-white transition"
                  >
                    {item.label}
                  </a>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.li>
              ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-2">
              <motion.a
                href="/CV.pdf"
                target="_blank"
                className="hidden md:block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30"
              >
                Resume
              </motion.a>

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-white text-2xl"
              >
                {open ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <ul className="flex flex-col gap-1 px-5 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="/resume.pdf"
                    className="mt-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-md"
                  >
                    Resume
                  </a>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
