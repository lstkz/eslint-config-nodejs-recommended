# Recommended ESLint config for node.js (with babel)
[![Build Status](https://travis-ci.org/lsentkiewicz/eslint-config-nodejs-recommended.svg?branch=master)](https://travis-ci.org/lsentkiewicz/eslint-config-nodejs-recommended)

This package contains an extensible shared config for nodejs apps written using babel.  
It contains plugins:
- [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp) - ESLint rules for lodash/fp (`underscore` is forbidden)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports (`require` is forbidden)

It extends [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) with a few changes (only the most important):  
Added rules:
- [no-restricted-syntax](http://eslint.org/docs/rules/no-restricted-syntax) - loops (`for`, `while`) are not allowed (use lodash)
- [complexity](http://eslint.org/docs/rules/complexity) - max complexity is `20`
- [no-magic-numbers](http://eslint.org/docs/rules/no-magic-numbers) - disallow magic numbers, all numbers must be defined as constants (except `1`)
- [callback-return](http://eslint.org/docs/rules/callback-return) - require return statements after callbacks
- [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err) - require error handling in callbacks
- [no-process-exit](http://eslint.org/docs/rules/no-process-exit) - disallow the use of `process.exit()` (some people use it for debugging)
- [no-sync](http://eslint.org/docs/rules/no-sync) - disallow synchronous methods
- [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc) - require JSDoc comments
- [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc) - enforce valid JSDoc comments (description for params and return is not required, types are required)
- [max-len](http://eslint.org/docs/rules/max-len) - max line length is `120`, ignored for string and comments
- [max-lines](http://eslint.org/docs/rules/max-lines) - max lines per file is `500`
- [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks) - max callback depth is `5` 
- [max-params](http://eslint.org/docs/rules/max-params) - max parameters in functions is `5`
- [max-statements](http://eslint.org/docs/rules/max-statements) - max statements in functions is `50`

Removed rules:
- [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign) - reassigning function parameters is enabled, it's useful in private methods
- [no-plusplus](http://eslint.org/docs/rules/no-plusplus) - ++ and -- are allowed

## Installation

`npm install --save-dev eslint eslint-config-nodejs-recommended eslint-plugin-lodash-fp eslint-plugin-import eslint-plugin-babel babel-eslint`

## Usage

Configure `.eslintrc`

```
{
  "extends": "nodejs-recommended"
}
```


MIT License

Copyright (c) 2016 Łukasz Sentkiewicz