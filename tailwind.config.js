module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        "fira-code": ["'Fira Code'"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
