/** @type {import("prettier").Config} */
const config = {
  printWith: 150,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: true,
  plugins: ['prettier-plugin-tailwindcss']
};
export default config;
