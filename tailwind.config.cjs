const tailwindForms = require("@tailwindcss/forms");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [
    tailwindForms
  ]
}