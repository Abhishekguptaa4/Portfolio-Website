import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: FaHtml5, level: 92, color: '#e34f26' },
  { name: 'CSS3', icon: FaCss3Alt, level: 88, color: '#1572b6' },
  { name: 'JavaScript', icon: FaJs, level: 85, color: '#f7df1e' },
  { name: 'React.js', icon: FaReact, level: 82, color: '#61dafb' },
  { name: 'Node.js', icon: FaNodeJs, level: 75, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, level: 72, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47a248' },
  { name: 'MySQL', icon: SiMysql, level: 78, color: '#4479a1' },
  { name: 'Java', icon: FaJava, level: 80, color: '#f89820' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, color: '#06b6d4' },
  { name: 'Git & GitHub', icon: FaGitAlt, level: 83, color: '#f05032' },
  { name: 'Database Design', icon: FaDatabase, level: 75, color: '#00d4ff' },
]

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const { name, icon: Icon, level, color } = skill

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass neon-border rounded-2xl p-5 group cursor-default"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
          <Icon size={22} style={{ color }} />
        </div>
        <div className="flex-1">
          <p className="font-body font-semibold text-white text-sm">{name}</p>
          <p className="font-mono text-xs mt-0.5" style={{ color }}>{level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 + index * 0.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-neon text-sm tracking-widest mb-4">02 / SKILLS</p>
          <h2 className="section-title text-white">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Extra: glowing tech categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Frontend', techs: ['HTML', 'CSS', 'JS', 'React', 'Tailwind'], color: '#00d4ff' },
            { label: 'Backend', techs: ['Node.js', 'Express', 'Java', 'REST APIs'], color: '#7c3aed' },
            { label: 'Database & Tools', techs: ['MongoDB', 'MySQL', 'Git', 'GitHub'], color: '#00ff88' },
          ].map(({ label, techs, color }) => (
            <div key={label} className="glass neon-border rounded-2xl p-6"
              style={{ borderColor: `${color}20` }}>
              <p className="font-mono text-xs tracking-widest mb-4" style={{ color }}>{label.toUpperCase()}</p>
              <div className="flex flex-wrap gap-2">
                {techs.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-lg font-mono text-slate-400"
                    style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
