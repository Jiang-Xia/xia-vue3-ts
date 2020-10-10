module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended','@vue/typescript/recommended'],
  rules: {
    "camelcase": "off",
    "@typescript-eslint/camelcase": 0
  }
}
