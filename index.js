module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    "lodash",
    "babel"
  ],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/jsdoc',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve)
};