import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiAward, FiPackage, FiZap } from 'react-icons/fi'
import profileImage from '../assets/Portfolio_Profile.jpeg'

const stats = [
  { icon: FiPackage, value: '10+', label: 'Projects Built', color: '#00d4ff' },
  { icon: FiCode, value: '10+', label: 'Technologies Learned', color: '#7c3aed' },
  { icon: FiAward, value: '4+', label: 'Certifications', color: '#00ff88' },
  { icon: FiZap, value: '150+', label: 'DSA Problems Solved', color: '#f59e0b' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-neon/30" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-neon text-sm tracking-widest mb-4">01 / ABOUT ME</p>
          <h2 className="section-title text-white">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* ── LEFT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow background blob */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl scale-105"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.08) 100%)' }}
              />

              {/* Main image card */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid rgba(0,212,255,0.25)',
                  boxShadow: '0 0 40px rgba(0,212,255,0.12), 0 0 80px rgba(0,212,255,0.06)',
                }}
              >
                <img
                  src={profileImage}
                  alt="Abhishek Gupta"
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent pointer-events-none"
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  style={{ opacity: 0.18 }}
                />

                {/* Bottom name tag */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.95), transparent)' }}
                >
                  <p className="font-display font-bold text-white text-sm">Abhishek Gupta</p>
                  <p className="font-mono text-neon text-xs tracking-wide">Full Stack Developer</p>
                </div>
              </div>

              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-neon rounded-tl-xl" />
              <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-neon rounded-tr-xl" />
              <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-neon rounded-bl-xl" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-neon rounded-br-xl" />

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 px-3 py-1.5 rounded-xl text-xs font-mono"
                style={{
                  background: 'rgba(13,31,60,0.9)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff',
                  boxShadow: '0 0 15px rgba(0,212,255,0.2)',
                }}
              >
                Open to Work ✦
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 px-3 py-1.5 rounded-xl text-xs font-mono"
                style={{
                  background: 'rgba(13,31,60,0.9)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  color: '#7c3aed',
                  boxShadow: '0 0 15px rgba(124,58,237,0.2)',
                }}
              >
                150+ DSA ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              B.Tech CS graduate from{' '}
              <span className="neon-text">GLA University</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              Full Stack Developer skilled in React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs
              with hands-on internship and project experience in building scalable, responsive, and production-ready web applications with modern AI integrations.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Completed MERN Stack + Generative AI training at W3Elites Pvt. Ltd., where I developed RESTful APIs and optimized 
              database workflows using MongoDB and MySQL. I'm passionate about clean architecture, problem solving, and continuously
              growing as a developer. Solved 150+ DSA problems and participated in Smart India Hackathon twice.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'React.js', 'Java', 'REST APIs', 'JWT Auth'].map(skill => (
                <span key={skill}
                  className="px-3 py-1.5 rounded-lg border border-neon/20 bg-neon/5 text-neon text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>

            <div className="rounded-xl border border-neon/10 bg-surface/50 p-4 font-mono text-xs">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <p className="text-slate-600">{'// My approach'}</p>
              <p className="text-neonpurple">const <span className="text-neon">developer</span> = {'{'}</p>
              <p className="pl-4 text-slate-300">focus: <span className="text-neongreen">"scalable backends"</span>,</p>
              <p className="pl-4 text-slate-300">internship: <span className="text-neongreen">"W3Elites Pvt. Ltd."</span>,</p>
              <p className="pl-4 text-slate-300">mindset: <span className="text-neongreen">"problem-first"</span></p>
              <p className="text-neonpurple">{'}'}</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass neon-border rounded-2xl p-6 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <p className="font-display font-black text-3xl mb-1" style={{ color }}>{value}</p>
              <p className="text-slate-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
