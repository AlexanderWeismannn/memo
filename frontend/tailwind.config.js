import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2.5s ease-in-out infinite', // optional: change timing here
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["bumblebee"]
  }
}
