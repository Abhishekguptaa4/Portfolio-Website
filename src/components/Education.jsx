import React from 'react'
import { motion } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin, FiAward, FiBriefcase } from 'react-icons/fi'

const timeline = [
  {
    type: 'education',
    title: 'Bachelor of Technology — Computer Science',
    institution: 'GLA University, Mathura',
    period: 'Nov 2022 – May 2026',
    location: 'Mathura, Uttar Pradesh',
    description: 'Bachelor of Technology in Computer Science. Focused on full stack development, data structures & algorithms, database management, and software engineering fundamentals.',
    highlights: ['Core Computer Science', 'DSA & Algorithms', 'Backend Development', 'DBMS'],
    color: '#00d4ff',
    icon: FiBook,
  },
  {
    type: 'internship',
    title: 'Web Developer Intern',
    institution: 'W3Elites Pvt. Ltd., New Delhi',
    period: 'June 2024 – July 2024',
    location: 'New Delhi, India',
    description: 'Developed scalable full-stack functionalities using React.js, Node.js, and Express.js for production-ready applications. Designed RESTful APIs, optimized CRUD operations, implemented MongoDB and MySQL database workflows, integrated GenAI features, and collaborated using Git and Agile methodologies.',
    highlights: ['React.js', 'Node.js & Express.js', 'RESTful API Design', 'MongoDB & MySQL', 'Agile / Git'],
    color: '#7c3aed',
    icon: FiBriefcase,
  },
  {
    type: 'certification',
    title: 'AWS Cloud Practitioner Essentials',
    institution: 'Amazon Web Services (AWS)',
    period: 'December 21, 2025',
    location: 'Online',
    description: 'Completed AWS Cloud Practitioner Essentials covering core AWS services, cloud concepts, security, architecture, pricing, and support models.',
    highlights: ['AWS Core Services', 'Cloud Architecture', 'Cloud Security'],
    color: '#f59e0b',
    icon: FiAward,
  },
  {
    type: 'certification',
    title: 'Introduction to Data Science',
    institution: 'Cisco Networking Academy',
    period: 'December 22, 2025',
    location: 'Online',
    description: 'Completed Introduction to Data Science covering data analytics concepts, the role of data in AI and Machine Learning, and career paths in the data field.',
    highlights: ['Data Analytics', 'AI & Machine Learning', 'Data Science Concepts'],
    color: '#00ff88',
    icon: FiAward,
  },
  {
    type: 'certification',
    title: 'Data Analytics Job Simulation',
    institution: 'Deloitte (via Forage)',
    period: 'December 13, 2025',
    location: 'Online',
    description: 'Completed practical job simulation tasks in data analysis and forensic technology as part of Deloitte\'s virtual experience program.',
    highlights: ['Data Analysis', 'Forensic Technology', 'Real-world Simulation'],
    color: '#00d4ff',
    icon: FiAward,
  },
  {
    type: 'certification',
    title: 'Java (Basic) — Certificate of Accomplishment',
    institution: 'HackerRank',
    period: 'November 19, 2023',
    location: 'Online',
    description: 'Passed the HackerRank Java (Basic) skill certification test, demonstrating proficiency in core Java programming concepts.',
    highlights: ['Core Java', 'OOP', 'Problem Solving'],
    color: '#7c3aed',
    icon: FiAward,
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neongreen/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-neon text-sm tracking-widest mb-4">04 / EDUCATION & EXPERIENCE</p>
          <h2 className="section-title text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            Education, internship experience, and certifications that shaped my skills
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/40 via-neonpurple/40 to-neongreen/40 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = item.icon
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  <div className="hidden md:block flex-1" />

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center border-2"
                      style={{ background: `${item.color}15`, borderColor: item.color, boxShadow: `0 0 20px ${item.color}40` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </motion.div>
                  </div>

                  <div className={`flex-1 ml-20 md:ml-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass neon-border rounded-2xl p-6 cursor-default"
                      style={{ borderColor: `${item.color}20` }}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                        <div>
                          <span className="px-2 py-0.5 rounded text-xs font-mono mb-2 inline-block"
                            style={{ color: item.color, background: `${item.color}10` }}>
                            {item.type === 'education' ? 'EDUCATION' : item.type === 'internship' ? 'INTERNSHIP' : 'CERTIFICATION'}
                          </span>
                          <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
                          <p className="font-body font-medium text-sm mt-1" style={{ color: item.color }}>
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4 font-mono">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar size={12} /> {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiMapPin size={12} /> {item.location}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map(h => (
                          <span key={h} className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400"
                            style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
