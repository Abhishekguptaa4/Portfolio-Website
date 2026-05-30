import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    title: 'AI Powered Sales Forecasting Dashboard',
    description: 'Predictive analytics dashboard with ML-powered sales forecasting, interactive charts, and real-time business intelligence insights to help teams make data-driven decisions.',
    tags: ['React.js', 'Python', 'Machine Learning', 'Chart.js', 'REST API'],
    category: 'AI / Analytics',
    color: '#00d4ff',
    gradient: 'from-blue-900/40 to-cyan-900/20',
    highlights: ['Predictive Analytics', 'Interactive Charts', 'Sales Insights'],
    github: 'https://github.com/Abhishekguptaa4/AI-Powered-Sales-Forecasting-Dashboard',
    demo: null,
    emoji: '📊',
  },
  {
    title: 'Social Media Web Application',
    description: 'Full-stack social media platform built with Node.js, Express.js, React.js, and MongoDB. Features JWT authentication, user management, posts, comments, social interactions, and an integrated OpenAI chatbot.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenAI API'],
    category: 'Full Stack',
    color: '#7c3aed',
    gradient: 'from-purple-900/40 to-violet-900/20',
    highlights: ['JWT Auth', 'OpenAI Chatbot', 'Social Features'],
    github: 'https://github.com/Abhishekguptaa4/Social_Media-WebApp',
    demo: null,
    emoji: '🌐',
  },
  {
    title: 'Recipe Manager Application',
    description: 'Full-stack recipe management platform with Node.js, Express.js, and MongoDB. Features secure CRUD APIs, Cloudinary image uploads, role-based access control for Admin and User dashboards.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JavaScript'],
    category: 'Full Stack',
    color: '#00ff88',
    gradient: 'from-green-900/40 to-emerald-900/20',
    highlights: ['Cloudinary Images', 'Role-Based Access', 'Admin Dashboard'],
    github: 'https://github.com/Abhishekguptaa4?tab=repositories',
    demo: 'https://recipe-manager-v96b.onrender.com',
    emoji: '🍽️',
  },
]

function ProjectCard({ project, index }) {
  const { title, description, tags, category, color, gradient, highlights, github, demo, emoji } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative glass neon-border rounded-2xl overflow-hidden cursor-default"
    >
      <div className={`relative h-52 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono border"
            style={{ color, borderColor: `${color}30`, background: `${color}10` }}>
            {category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-7xl filter drop-shadow-lg"
          >
            {emoji}
          </motion.div>
        </div>
        <motion.div
          className="absolute left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
          style={{ background: `radial-gradient(circle at 100% 100%, ${color}, transparent)` }} />
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug group-hover:text-neon transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {highlights.map(h => (
            <span key={h} className="flex items-center gap-1 text-xs text-slate-400">
              <span className="w-1 h-1 rounded-full" style={{ background: color }} />
              {h}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 bg-surface border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold flex-1 justify-center
              transition-all"
            style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
          >
            <FiGithub size={14} /> View on GitHub <FiArrowRight size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonpurple/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-neon text-sm tracking-widest mb-4">03 / PROJECTS</p>
          <h2 className="section-title text-white">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            A selection of projects that showcase my backend and full-stack development skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Abhishekguptaa4?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neon/30
              text-neon text-sm font-semibold hover:bg-neon/10 transition-all"
          >
            <FiGithub size={16} /> View All Repositories <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
