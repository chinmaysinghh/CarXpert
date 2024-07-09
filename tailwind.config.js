module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
        'fill-up': 'fillUp 3s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fillUp: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
};
