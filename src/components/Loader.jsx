import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + Math.random() * 15
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-bg z-50 flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* AG Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10"
      >
        <div className="w-24 h-24 rounded-2xl border-2 border-neon flex items-center justify-center"
          style={{ boxShadow: '0 0 30px rgba(0,212,255,0.5), inset 0 0 30px rgba(0,212,255,0.1)' }}>
          <span className="font-display font-black text-4xl neon-text">AG</span>
        </div>
        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border border-neon/20"
          style={{ width: '120px', height: '120px', top: '-12px', left: '-12px' }}>
          <motion.div
            className="absolute w-3 h-3 bg-neon rounded-full"
            style={{ transformOrigin: '0 66px', top: '0', left: '50%', boxShadow: '0 0 10px #00d4ff' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>

      {/* Monospace loading text */}
      <motion.p
        className="font-mono text-neon text-sm mb-6 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        INITIALIZING PORTFOLIO...
      </motion.p>

      {/* Progress bar */}
      <div className="w-64 h-0.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-neon rounded-full"
          style={{ width: `${Math.min(progress, 100)}%`, boxShadow: '0 0 10px #00d4ff' }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="font-mono text-neon/50 text-xs mt-2">{Math.min(Math.floor(progress), 100)}%</p>
    </motion.div>
  )
}
