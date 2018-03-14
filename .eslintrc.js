module.exports = {
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  extends: ["eslint:recommended", "airbnb-base"],
  env: {
    node: true
  },
  rules: {
    "no-restricted-globals": "off",
    "no-console": "off"
  }
};
