/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        singleQuote: true,
        jsxSingleQuote: false,
        semi: true,
        tabWidth: 4,
        trailingComma: "es5",
      },
    },
  ],
};
