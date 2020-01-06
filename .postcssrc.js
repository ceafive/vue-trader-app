const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");


module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    cssnano({
      preset: "default"
    }),
    purgecss({
      content: [
        "./src/*.vue",
        "./src/views/*.vue",
        "./src/components/portfolio/*.vue",
        "./src/components/stocks/*.vue"
      ],
      defaultExtractor: content => content.match(/[A-Za-z)-9-_:/]+/g) || []
    }),
  ]
};
