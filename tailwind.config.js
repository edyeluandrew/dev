/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial dark theme
        bg: {
          dark: '#0A0A0A',
          soft: '#111111',
          panel: '#161616',
          overlay: 'rgba(10, 10, 10, 0.8)',
        },
        text: {
          primary: '#F5F1E8',
          muted: '#A1A1AA',
          secondary: '#D4D4D8',
        },
        accent: {
          lime: '#C9FF3B',
          purple: '#7C3AED',
        },
        border: {
          light: 'rgba(255, 255, 255, 0.10)',
          accent: 'rgba(201, 255, 59, 0.3)',
        },
        // Legacy color support for smooth transition
        bgMain: '#0A0A0A',
        bgDeep: '#0A0A0A',
        bgCard: '#111111',
        bgGlass: 'rgba(255,255,255,0.05)',
        textPrimary: '#F5F1E8',
        textMuted: '#A1A1AA',
        textSoft: '#D4D4D8',
        accentGold: '#C9FF3B',
        accentGoldSoft: '#E5FF7A',
        accentBronze: '#7C3AED',
        borderNormal: 'rgba(255, 255, 255, 0.10)',
        borderGold: 'rgba(201, 255, 59, 0.3)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
        goldGlow: '0 0 30px rgba(201, 255, 59, 0.15)',
        glassHover: '0 20px 50px rgba(201, 255, 59, 0.1)',
        editorial: '0 20px 60px rgba(0, 0, 0, 0.5)',
        lift: '0 30px 80px rgba(201, 255, 59, 0.08)',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideDown: 'slideDown 0.6s ease-out',
        slideRight: 'slideRight 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
