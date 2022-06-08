module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: "eslint:recommended",
  rules: {
    "no-undef": 0,
    "object-curly-newline": "off",
    "no-plusplus": "off",
    semi: 1,
  },
};
