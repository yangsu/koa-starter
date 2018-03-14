module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  extends: ["eslint:recommended", "airbnb-base", "plugin:prettier/recommended"],
  env: {
    node: true
  },
  rules: {
    "no-restricted-globals": "off",
    "no-console": "off"
  }
};
