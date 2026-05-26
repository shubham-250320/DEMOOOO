import globals from "globals";

export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },

    rules: {
      semi: ["error", "always"]
    }
  }
];