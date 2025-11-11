/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geminiBlue: '#4285F4',
        geminiGreen: '#34A853',
        geminiYellow: '#FBBC05',
        geminiRed: '#EA4335',
        darkBg: '#0F172A',
        cardBg: '#1E293B',
        accentPurple: '#8B5CF6',
        neonBlue: '#00f0ff',
        neonPink: '#ff00c8'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(66, 133, 244, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(66, 133, 244, 0.8), 0 0 30px rgba(66, 133, 244, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}