module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "mono": ['JetBrains Mono', 'monospace']
    },
    extend: {
      backgroundImage: {
        'background': "url('/images/background.jpeg')",
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('tailwind-glassmorphism')
  ],
  daisyui: {
    themes: ['dark']
  }
}