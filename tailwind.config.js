/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {},
      keyframes: {},
      boxShadow: {
        'neon-purple': '0 0 5px rgba(124, 58, 237, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
        'neon-blue': '0 0 5px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
        'neon-pink': '0 0 5px rgba(236, 72, 153, 0.5), 0 0 20px rgba(236, 72, 153, 0.3)',
        'neon-green': '0 0 5px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)',
        'intense-purple': '0 0 10px rgba(139, 92, 246, 0.7), 0 0 30px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3)',
        'intense-cyan': '0 0 10px rgba(34, 211, 238, 0.7), 0 0 30px rgba(34, 211, 238, 0.5), 0 0 50px rgba(34, 211, 238, 0.3)',
        'intense-pink': '0 0 10px rgba(236, 72, 153, 0.7), 0 0 30px rgba(236, 72, 153, 0.5), 0 0 50px rgba(236, 72, 153, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(139, 92, 246, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.07) 1px, transparent 1px)',
      },
      colors: {
        'neon': {
          purple: '#a855f7',
          blue: '#0ea5e9',
          pink: '#ec4899',
          cyan: '#22d3ee',
          green: '#10b981',
        },
      },
    }
  },
  plugins: [],
}
