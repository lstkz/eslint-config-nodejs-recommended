# Recommended ESLint config for node.js (with babel)
[![Build Status](https://travis-ci.org/lsentkiewicz/eslint-config-nodejs-recommended.svg?branch=master)](https://travis-ci.org/lsentkiewicz/eslint-config-nodejs-recommended)

This package contains an extensible shared config for nodejs apps written using babel.  
It contains plugins:
- [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp) - ESLint rules for lodash/fp (`underscore` is forbidden)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports (`require` is forbidden)

## Installations

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