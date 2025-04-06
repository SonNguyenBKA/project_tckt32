/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'warning': 'var(--color-warning)',
        'success': 'var(--color-success)',
        'danger': 'var(--color-danger)',
      }
    },
  },
  plugins: [],
}
