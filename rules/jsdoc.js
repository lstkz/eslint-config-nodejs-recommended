module.exports = {
  rules: {
    // require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'error',

    // enforce valid JSDoc comments
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': ['error', {
      prefer: {
        arg: 'param',
        argument: 'param',
        class: 'constructor',
        return: 'returns',
        virtual: 'abstract',
      },
      matchDescription: '.+',
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturnType: true,
    }],
  },
};
