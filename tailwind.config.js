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
      spacing: {
        '200px': '200px',
        '300px': '300px'
      },
      zIndex: {
        '999': 999,
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['dark']
  }
}