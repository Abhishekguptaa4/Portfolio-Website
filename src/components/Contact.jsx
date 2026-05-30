import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-neon text-sm tracking-widest mb-4">05 / CONTACT</p>
          <h2 className="section-title text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            Have a project in mind or a job opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              Open to <span className="neon-text">opportunities</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-10">
              I'm actively looking for internships and full-time roles in backend or full-stack development.
              Whether you have a project, a job opportunity, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: FiMail, label: 'Email', value: 'abhishekgupta454654@gmail.com', href: 'mailto:abhishekgupta454654@gmail.com' },
                { icon: FiPhone, label: 'Mobile', value: '+91 9005078821', href: 'tel:+919005078821' },
                { icon: FiMapPin, label: 'Address', value: 'Khora Colony, Noida, Uttar Pradesh', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl border border-neon/20 bg-neon/5 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs font-mono">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm hover:text-neon transition-colors">{value}</a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs text-slate-600 tracking-widest mb-4">FIND ME ON</p>
              <div className="flex gap-3">
                {[
                  { Icon: FiGithub, href: 'https://github.com/Abhishekguptaa4', label: 'GitHub' },
                  { Icon: FiLinkedin, href: 'https://linkedin.com/in/abhishek-gupta-b53a7124a/', label: 'LinkedIn' },
                  { Icon: FiMail, href: 'mailto:abhishekgupta454654@gmail.com', label: 'Email' },
                  { Icon: FiPhone, href: 'tel:+919005078821', label: 'Phone' },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl border border-white/10 bg-surface flex items-center justify-center hover:border-neon/30 transition-all duration-300 group"
                  >
                    <Icon size={20} className="text-slate-400 group-hover:text-neon transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass neon-border rounded-2xl p-8 space-y-5">
              <div>
                <label className="block font-mono text-xs text-slate-500 mb-2 tracking-widest">NAME</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="John Doe"
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                    placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/20 transition-all font-body"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-slate-500 mb-2 tracking-widest">EMAIL</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="john@example.com"
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                    placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/20 transition-all font-body"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-slate-500 mb-2 tracking-widest">MESSAGE</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                    placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/20 transition-all font-body resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm
                  text-bg bg-neon neon-btn transition-all duration-300 disabled:opacity-70"
                style={{ boxShadow: sending || sent ? 'none' : '0 0 30px rgba(0,212,255,0.5)' }}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full"
                  />
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
