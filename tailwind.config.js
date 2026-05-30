/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#050a14',
        surface: '#0a1628',
        card: '#0d1f3c',
        neon: '#00d4ff',
        neonpurple: '#7c3aed',
        neongreen: '#00ff88',
        accent: '#0ea5e9',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 4s ease infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        glow: { '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 20px #00d4ff' }, '100%': { boxShadow: '0 0 20px #00d4ff, 0 0 60px #00d4ff, 0 0 100px #00d4ff' } },
        scan: { '0%': { top: '0%' }, '100%': { top: '100%' } },
        pulseNeon: { '0%, 100%': { opacity: 1, boxShadow: '0 0 10px #00d4ff' }, '50%': { opacity: 0.7, boxShadow: '0 0 30px #00d4ff, 0 0 60px #00d4ff' } },
        gradientX: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backgroundSize: { '300%': '300%' },
    },
  },
  plugins: [],
}
