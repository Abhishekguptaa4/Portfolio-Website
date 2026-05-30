import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiPhone } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl border border-neon/30 bg-neon/5 flex items-center justify-center">
              <span className="font-display font-black text-neon text-sm">AG</span>
            </div>
            <span className="font-display font-bold text-white">Abhishek Gupta</span>
          </div>

          <p className="text-slate-600 text-sm flex items-center gap-1.5 font-body">
            Built with <FiHeart size={12} className="text-neon" /> using React & Tailwind
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: 'https://github.com/Abhishekguptaa4' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/abhishek-gupta-b53a7124a/' },
              { icon: FiMail, href: 'mailto:abhishekgupta454654@gmail.com' },
              { icon: FiPhone, href: 'tel:+919005078821' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center
                  text-slate-500 hover:text-neon hover:border-neon/30 transition-all"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs font-mono">
            © {year} Abhishek Gupta. All rights reserved. | abhishekgupta454654@gmail.com | +91 9005078821
          </p>
        </div>
      </div>
    </footer>
  )
}
