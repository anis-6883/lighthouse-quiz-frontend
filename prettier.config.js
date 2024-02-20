/** @type {import("prettier").Config} */

module.exports = {
  printWidth: 150,
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  //   useTabs: false,
  singleAttributePerLine: false,
  //   bracketSameLine: true,
  //   bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
}
