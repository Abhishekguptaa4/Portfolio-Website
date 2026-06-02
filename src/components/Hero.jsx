import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiPhone } from 'react-icons/fi'
import Typed from 'typed.js'

const socials = [
  { Icon: FiGithub, href: 'https://github.com/Abhishekguptaa4', label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/abhishek-gupta-b53a7124a/', label: 'LinkedIn' },
  { Icon: FiMail, href: 'mailto:abhishekgupta454654@gmail.com', label: 'Email' },
  { Icon: FiPhone, href: 'tel:+919005078821', label: 'Phone' },
]

export default function Hero() {
  const typedRef = useRef(null)
  const typedInstanceRef = useRef(null)

  useEffect(() => {
    typedInstanceRef.current = new Typed(typedRef.current, {
      strings: [ 'Software Developer', 'Full Stack Developer', 'Backend Developer', 'Web Developer', 'Data Analyst', 'Problem Solver'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      cursorChar: '_',
    })
    return () => typedInstanceRef.current?.destroy()
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neonpurple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/20 bg-neon/5 mb-8"
          >
            <span className="w-2 h-2 bg-neongreen rounded-full animate-pulse" />
            <span className="font-mono text-neon text-xs tracking-widest">AVAILABLE FOR WORK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display font-black leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="gradient-text">Abhishek</span>
            <br />
            <span className="text-white">Gupta</span>
            <span className="neon-text">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-neon" />
            <span className="font-mono text-neon text-xl font-medium">
              <span ref={typedRef} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10"
          >
            Full Stack Developer skilled in Node.js, Express.js, MongoDB, MySQL, and REST APIs
            with hands-on internship experience building scalable production-ready applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-bg bg-neon font-body text-sm transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}
            >
              View Projects <FiArrowRight />
            </motion.button>
            <motion.a
              href="/Abhishek_Btech_CSE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-neon border border-neon/40 font-body text-sm bg-neon/5 hover:bg-neon/10 transition-all duration-300"
            >
              <FiDownload size={16} /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-slate-600 text-xs font-mono tracking-widest">CONNECT</span>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl border border-neon/20 bg-neon/5 flex items-center justify-center text-slate-400 hover:text-neon hover:border-neon/50 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 rounded-3xl border border-neon/30 glass flex items-center justify-center"
              style={{ boxShadow: '0 0 60px rgba(0,212,255,0.15), inset 0 0 60px rgba(0,212,255,0.05)' }}
            >
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ opacity: 0.4 }}
              />
              <div className="text-center">
                <span className="font-display font-black text-8xl gradient-text">AG</span>
                <p className="font-mono text-neon/60 text-xs mt-2 tracking-widest">SOFTWARE DEVELOPER</p>
              </div>
            </motion.div>

            {['Node.js', 'Java', 'MongoDB', 'Express', 'React'].map((tech, i) => {
              const angle = (i * 72) * (Math.PI / 180)
              const radius = 160
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <motion.div
                  key={tech}
                  className="absolute px-3 py-1.5 rounded-lg border border-neon/20 bg-surface/80 text-xs font-mono text-neon/80"
                  style={{ left: '50%', top: '50%' }}
                  animate={{ x: [x, x * 0.95, x], y: [y, y * 0.95, y], translateX: '-50%', translateY: '-50%' }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {tech}
                </motion.div>
              )
            })}

            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-neon rounded-tr-xl" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-neon rounded-bl-xl" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent" />
      </motion.div>
    </section>
  )
}
