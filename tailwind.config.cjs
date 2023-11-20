const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    minWidth: {
      12: '3rem',  // TODO: dynamically get 3rem
    },
  },

  plugins: [daisyui],
};

module.exports = config;
