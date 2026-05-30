import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (name, href) => {
    setActive(name)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark border-b border-neon/10 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNav('Home', '#home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-10 h-10 rounded-xl border border-neon/50 flex items-center justify-center
              bg-neon/5 transition-all duration-300 group-hover:bg-neon/15"
              style={{ boxShadow: '0 0 15px rgba(0,212,255,0.2)' }}>
              <span className="font-display font-black text-neon text-lg">AG</span>
            </div>
            <span className="font-display font-bold text-white hidden sm:block">
              Abhishek<span className="neon-text">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNav(link.name, link.href)}
                  className={`relative px-4 py-2 font-body text-sm font-medium transition-all duration-300
                    ${active === link.name ? 'text-neon' : 'text-slate-400 hover:text-white'}`}
                >
                  {active === link.name && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-neon/10 border border-neon/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={() => handleNav('Contact', '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex neon-btn px-5 py-2 rounded-xl text-sm font-semibold text-bg bg-neon
                font-body transition-all duration-300"
              style={{ boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}
            >
              Hire Me
            </motion.a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-neon p-2"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass-dark border-b border-neon/10 md:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNav(link.name, link.href)}
                    className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors
                      ${active === link.name ? 'text-neon' : 'text-slate-400'}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
