const a11yOff = Object.keys(require("eslint-plugin-jsx-a11y").rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = "off"; return acc }, {})


module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // "eslint" RULES
    "quotes": [1, "double"],
    "quote-props": "off",
    "semi": [0, "never"],
    "padded-blocks": ["error", { "classes": "always" }],
    "react/destructuring-assignment": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
    "no-multiple-empty-lines": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-nested-ternary": "off",
    "no-shadow": "off",
    "object-curly-newline": [1, { "ObjectPattern": { "multiline": true } }],
    // "eslint-config-airbnb" RULES
    "arrow-body-style": "off",
    // "eslint-plugin-jsx-a11y" RULES
    ...a11yOff,
    // "eslint-plugin-react" RULES
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": [2, { "namedComponents": "function-declaration" }],
    "react/jsx-no-bind": [0, { "allowBind": true }]

  },
};
